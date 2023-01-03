import { FeatureLayerQueryParams, Immutable, ImmutableArray, ImmutableObject } from 'jimu-core'
import { isSerialSeries } from '../../../utils/default'
import { CategoryType, WebChartSeries } from '../../../config'
import { getSeriesType } from 'jimu-ui/advanced/chart'
import { getCategoryType } from '../../../utils/common/serial'

const getSingleQueryForByGroup = (serie: ImmutableObject<WebChartSeries>, queries: ImmutableObject<FeatureLayerQueryParams>): ImmutableObject<WebChartSeries> => {
  const y = (serie as any).y
  const outStatistics = queries.outStatistics.filter((s) => s.outStatisticFieldName === y)
  const { groupByFieldsForStatistics, orderByFields } = queries
  const query = Immutable({ groupByFieldsForStatistics, outStatistics, orderByFields }) as any
  return serie.set('query', query)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getSingleQueryForByFeature = (serie: ImmutableObject<WebChartSeries>, queries: ImmutableObject<FeatureLayerQueryParams>): ImmutableObject<WebChartSeries> => {
  const { groupByFieldsForStatistics, orderByFields } = queries
  const query = Immutable({ groupByFieldsForStatistics, orderByFields }) as any
  return serie.set('query', query)
}

const getSeriesWithQuery = (series: ImmutableArray<WebChartSeries>, query: ImmutableObject<FeatureLayerQueryParams>) => {
  let callback = null
  const type = getSeriesType(series as any)
  // don't set query for pie chart(/arcgis-charts/issues/5355)
  if (isSerialSeries(type)) {
    const categoryType = getCategoryType(query)
    if (categoryType === CategoryType.ByGroup) {
      callback = getSingleQueryForByGroup
    }
  }
  if (callback) {
    return series?.map((serie) => callback(serie, query))
  }
  return series
}

export default getSeriesWithQuery
