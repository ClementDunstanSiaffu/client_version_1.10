import { BaseVersionManager, IMFeatureLayerQueryParams, Immutable, ImmutableArray } from 'jimu-core'
import { getSeriesType, WebChartPieChartSeries } from 'jimu-ui/advanced/chart'
import { CategoryType, IMConfig, WebChartSeries } from './config'
import { ByFieldSeriesX, ByFieldSeriesY } from './constants'
import { capitalizeString } from './utils/common'
import { getCategoryType } from './utils/common/serial'
import { getFillSymbol, isSerialSeries } from './utils/default'

/**
 * Function merging multiple `outStatistics` properties.
 * @param uniqueQuery
 * @param series
 */
const mergeOutStatistics = (uniqueQuery: IMFeatureLayerQueryParams, series: ImmutableArray<WebChartSeries>) => {
  series.slice(1).forEach((serie) => {
    const outStatistics = (uniqueQuery.outStatistics ?? []).concat(serie.query?.outStatistics ?? [])
    uniqueQuery = uniqueQuery.set('outStatistics', outStatistics)
  })
  return uniqueQuery
}

/**
 * Function building a unique query based on the chart series config.
 * Note: all queries have the same onStatisticsField, so they can be combined into one query.
 */
export const buildUniqueQuery = (series: ImmutableArray<WebChartSeries>): IMFeatureLayerQueryParams => {
  if (!series?.length) return null
  let uniqueQuery: IMFeatureLayerQueryParams = series[0].query
  if (!uniqueQuery.outStatistics?.length) return null
  if (uniqueQuery?.groupByFieldsForStatistics?.length) {
    uniqueQuery = mergeOutStatistics(uniqueQuery, series)
  }
  return uniqueQuery
}

/**
 * Use the numeric field as the id of the serie.
 */
export const setSeriesIdWithNumericField = (series: ImmutableArray<WebChartSeries>): ImmutableArray<WebChartSeries> => {
  return series?.map((serie) => {
    if (!serie.query?.groupByFieldsForStatistics?.length) {
      return serie
    } else {
      const numericField = serie.query?.outStatistics?.[0]?.onStatisticField
      const id = serie.id
      if (numericField && numericField !== id) {
        serie = Immutable.set(serie, 'id', numericField)
      }
      return serie
    }
  }) as unknown as ImmutableArray<WebChartSeries>
}

export const upgradeColorMatch = (oldConfig: IMConfig): IMConfig => {
  if (!oldConfig) return oldConfig
  let series = oldConfig.webChart?.series
  if (!series?.length) return oldConfig
  const seriesType = getSeriesType(series as any)
  if (seriesType !== 'pieSeries') return oldConfig
  const colorType = series[0].colorType
  if (colorType !== 'colorMatch') return oldConfig
  let dataSource = oldConfig.webChart.dataSource
  const colorMatch = dataSource?.colorMatch
  if (!colorMatch) return oldConfig

  const colorMatches = colorMatch.colorMatches
  const defaultFillSymbol = (series[0] as unknown as WebChartPieChartSeries).fillSymbol
  const slices = Object.entries(colorMatches).map(([key, match]) => {
    const sliceId = key
    const color = match._fillColor
    const fillSymbol = getFillSymbol(color, defaultFillSymbol.outline?.width ?? 0, defaultFillSymbol.outline?.color as any)
    return { sliceId, fillSymbol }
  })
  series = Immutable.setIn(series, ['0', 'slices'], slices)
  dataSource = dataSource.without('colorMatch')
  const newConfig: IMConfig = oldConfig.setIn(['webChart', 'series'], series)
    .setIn(['webChart', 'dataSource'], dataSource)
  return newConfig
}

export const upgradeByField = (oldConfig: IMConfig): IMConfig => {
  if (!oldConfig) return oldConfig
  let query = oldConfig.webChart?.dataSource?.query
  let series = oldConfig.webChart?.series
  const seriesType = getSeriesType(series as any)
  if (seriesType !== 'pieSeries' && !isSerialSeries(seriesType)) return oldConfig
  const categoryType = getCategoryType(query)
  if (categoryType !== CategoryType.ByField) return oldConfig
  const statisticType = query?.outStatistics?.[0]?.statisticType ?? 'sum'
  series = series.map(serie => {
    let x = serie.x
    let y = (serie as any).y
    let id = (serie as any).y
    if (x === 'FieldName') {
      x = ByFieldSeriesX
      serie = serie.set('x', x)
    }
    if (y === 'FieldValue') {
      y = ByFieldSeriesY
      serie = serie.set('y', y)
    }
    if (id === 'FieldValue') {
      id = ByFieldSeriesY
      serie = serie.set('id', id)
    }
    if (serie.name === 'Sum of value') {
      const name = `${capitalizeString(statisticType)} of value`
      serie = serie.set('name', name)
    }
    return serie
  }) as any
  const orderByField = query.orderByFields?.[0]
  if (orderByField?.includes('FieldName')) {
    query = query.set('orderByFields', [orderByField.replace('FieldName', ByFieldSeriesX)])
  } else if (orderByField?.includes('FieldValue')) {
    query = query.set('orderByFields', [orderByField.replace('FieldValue', ByFieldSeriesY)])
  }
  const newConfig: IMConfig = oldConfig.setIn(['webChart', 'series'], series)
    .setIn(['webChart', 'dataSource', 'query'], query)
  return newConfig
}

class VersionManager extends BaseVersionManager {
  versions = [{
    version: '1.6.0',
    description: 'Rename `multipleBarType` to `stackedType`',
    upgrader: (oldConfig: IMConfig) => {
      if (!oldConfig) return oldConfig
      let series = oldConfig.webChart?.series
      if (!series?.length) return oldConfig
      series = series.map((serie) => {
        serie = (serie as any).set('stackedType', (serie as any).multipleBarType)
        serie = (serie as any).without('multipleBarType')
        return serie as unknown as WebChartSeries
      })
      const newConfig: IMConfig = oldConfig.setIn(['webChart', 'series'], series)
      return newConfig
    }
  }, {
    version: '1.7.0',
    description: 'Use the `numericField` as the `id` of serie, build the `query` in the `series` as a data source',
    upgrader: (oldConfig: IMConfig) => {
      if (!oldConfig) return oldConfig
      let series = oldConfig.webChart?.series
      if (!series?.length) return oldConfig
      series = setSeriesIdWithNumericField(series)
      const query = buildUniqueQuery(series)
      series = series.map(serie => Immutable.without(serie, 'query')) as unknown as ImmutableArray<WebChartSeries>
      const dataSource = { query }
      const newConfig: IMConfig = oldConfig.setIn(['webChart', 'series'], series)
        .setIn(['webChart', 'dataSource'], dataSource)
      return newConfig
    }
  }, {
    version: '1.8.0',
    description: '',
    upgrader: (oldConfig: IMConfig) => {
      return oldConfig
    }
  }, {
    version: '1.9.0',
    description: '',
    upgrader: (oldConfig: IMConfig) => {
      return oldConfig
    }
  }, {
    version: '1.10.0',
    description: 'Upgrade `config.colorMatch` to `series[0].slices` for pie chart.',
    upgrader: (oldConfig: IMConfig) => {
      let newConfig = upgradeColorMatch(oldConfig)
      newConfig = upgradeByField(newConfig)
      return newConfig
    }
  }]
}

export const versionManager = new VersionManager()
