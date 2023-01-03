import {
  ImmutableObject,
  ImmutableArray,
  IMFeatureLayerQueryParams,
  StatisticType,
  JimuFieldType
} from 'jimu-core'
import { WebChartLineChartSeries, WebChartStackedKinds } from 'jimu-ui/advanced/chart'
import { getFieldType } from '.'
import { CategoryType, WebChartSeries } from '../../config'

/**
 * Get category type from chart data source
 * @param query
 */
export const getCategoryType = (
  query: IMFeatureLayerQueryParams
): CategoryType => {
  if (query?.groupByFieldsForStatistics != null) {
    return CategoryType.ByGroup
  } else if (query?.outStatistics != null) {
    return CategoryType.ByField
  }
}

/**
 * Get category field from chart query.
 * @param query
 */
export const getCategoryField = (
  query: IMFeatureLayerQueryParams
): string => {
  return query?.groupByFieldsForStatistics?.[0]
}

/**
 * Get category field type from chart query.
 * @param query
 */
export const getCategoryFieldType = (
  query: IMFeatureLayerQueryParams,
  dataSourceId: string
): JimuFieldType => {
  const categoryField = query?.groupByFieldsForStatistics?.[0]
  const fieldType = getFieldType(categoryField, dataSourceId)
  return fieldType
}

export const getSerialStackedType = (
  series: ImmutableArray<WebChartSeries>
): WebChartStackedKinds => {
  return (series?.[0] as any).stackedType
}

export const getSeriaLlineSmoothed = (
  series: ImmutableArray<WebChartSeries>
): boolean => {
  return (series?.[0] as ImmutableObject<WebChartLineChartSeries>).lineSmoothed
}

export const getSeriaLlineShowArea = (
  series: ImmutableArray<WebChartSeries>
): boolean => {
  return (series?.[0] as ImmutableObject<WebChartLineChartSeries>).showArea
}

export const getSerialSeriesRotated = (
  series: ImmutableArray<WebChartSeries>
): boolean => {
  return (series?.[0] as any)?.rotated ?? false
}

const OrderSeparator = ' '
/**
 * Parse a query.orderByFields[i]
 * @param fieldOrder
 * normal: 'fieldname ASC'
 * with space in field: 'field name ASC'
 */
export const parseOrderByField = (fieldOrder: string): string[] => {
  if (!fieldOrder || !fieldOrder.includes(OrderSeparator)) return []
  const lastIndex = fieldOrder.lastIndexOf(OrderSeparator)
  const index = fieldOrder.indexOf(OrderSeparator)
  if (lastIndex !== index) {
    const field = fieldOrder.substring(0, lastIndex)
    const order = fieldOrder.substring(lastIndex + 1)
    return [field, order]
  } else {
    return fieldOrder.split(' ')
  }
}

//Using these special symbols as `outStatisticName` will cause some service statistics to fail.
const SpecialSymbolRegexp = /\(|\)|\[|\]|\%/gm

/**
 * Generate the `outStatisticName` for `query`, and it's always equal to `serie.y`
 * @param numericField
 * @param statisticType
 */
export const getOutStatisticName = (numericField: string, statisticType: StatisticType) => {
  if (numericField?.match(SpecialSymbolRegexp)) {
    numericField = numericField.replace(SpecialSymbolRegexp, '__')
  }
  return `${numericField}_${statisticType}`
}

const translations = {
  sum: 'sumOf',
  avg: 'meanOf',
  min: 'minOf',
  max: 'maxOf',
  count: 'count',
  percentile_cont: 'medianOf'
}

/**
 * Normalize the label of statistic type.
 * @param field
 * @param statisticType
 * @param translate
 */
export const normalizeStatisticFieldLabel = (statisticType, field, translate) => {
  const normalized = translate(translations[statisticType], { field })
  return normalized
}
