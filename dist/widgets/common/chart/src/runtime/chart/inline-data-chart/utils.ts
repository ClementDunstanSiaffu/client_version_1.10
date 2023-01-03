import { IMFeatureLayerQueryParams, ImmutableArray, ImmutableObject } from 'jimu-core'
import { getSeriesType, WebChartDataItem, WebChartPieChartSeries } from 'jimu-ui/advanced/chart'
import { CategoryType, WebChartSeries } from '../../../config'
import { ByFieldSeriesX } from '../../../constants'
import { getCategoryType, normalizeStatisticFieldLabel } from '../../../utils/common/serial'
import { isSerialSeries } from '../../../utils/default'

export const normalizeSeriesName = (propsSeries: ImmutableArray<WebChartSeries>, query, translate) => {
  const type = getSeriesType(propsSeries as any)
  const statisticType = query?.outStatistics?.[0]?.statisticType
  const categoryType = getCategoryType(query)
  let series = propsSeries
  if (categoryType === CategoryType.ByField) return series
  if (!statisticType) return series
  if (isSerialSeries(type) || type === 'pieSeries') {
    series = propsSeries.map(serie => {
      const alias = serie.name
      const name = normalizeStatisticFieldLabel(statisticType, alias, translate)
      return serie.set('name', name)
    }) as any
  }
  return series
}

/**
 * Slice is the original value of the field, which needs to be mapped to the formatted value of the field (the data of the chart rendered)
 * @param propsSeries
 * @param query
 * @param dataItems
 */
export const normalizePieSlices = (propsSeries: ImmutableArray<WebChartSeries>, query: IMFeatureLayerQueryParams, dataItems: WebChartDataItem[]): ImmutableArray<WebChartSeries> => {
  const type = getSeriesType(propsSeries as any)
  if (type !== 'pieSeries') return propsSeries
  const propSlices = (propsSeries?.[0] as unknown as ImmutableObject<WebChartPieChartSeries>)?.slices
  if (!propSlices) return propsSeries

  const categoryType = getCategoryType(query)
  const x = categoryType === CategoryType.ByField ? ByFieldSeriesX : query?.groupByFieldsForStatistics?.[0]
  const originalx = x + '_original'

  const slices = propSlices?.map((slice) => {
    const sliceId = slice.sliceId
    const matchItem = dataItems?.find(item => {
      const xValue = (item[originalx] || item[x]) as any
      if (xValue == null) return false
      return sliceId === xValue || sliceId === (xValue + '')
    })
    if (matchItem) {
      return slice.set('sliceId', matchItem[x]) as any
    }
    return null
  })?.filter(slice => !!slice)

  const series = propsSeries.map(serie => (serie as any).set('slices', slices))
  return series
}
