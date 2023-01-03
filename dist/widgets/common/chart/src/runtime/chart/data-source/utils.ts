import { DataRecord, DataSource, IMFeatureLayerQueryParams, ImmutableArray } from 'jimu-core'
import { getSeriesType, WebChartDataItem, WebChartSortOrderKinds } from 'jimu-ui/advanced/chart'
import { ByFieldSeriesX, ByFieldSeriesY, MaxPieces, MaxSlices, ObjectIdField } from '../../../constants'
import { getFieldSchema } from '../../../utils/common'
import { parseOrderByField } from '../../../utils/common/serial'
import { isSerialSeries } from '../../../utils/default'

export const getSourceRecords = (records: DataRecord[], dataSource: DataSource, categoryField?: string) => {
  const rs = records?.map((record, i) => {
    if (dataSource && record.dataSource !== dataSource) {
      const attributes = record.getData()
      // If `ObjectIdField` used as the category field, use its original value
      const objectid = categoryField === ObjectIdField ? (attributes[ObjectIdField] ?? i) : i
      const feature = { attributes: { ...attributes, [ObjectIdField]: objectid } }
      return dataSource.buildRecord(feature)
    } else {
      return record
    }
  })

  return rs
}

/**
 * Get the limited records count.
 * @param series
 */
export const getRecordslimited = (series) => {
  const seriesLength = series?.length
  if (!seriesLength) return MaxPieces
  const type = getSeriesType(series)
  if (isSerialSeries(type)) {
    return MaxPieces / seriesLength
  } else if (type === 'pieSeries') {
    return MaxSlices
  }
}

/**
 * Convert to formatted data for `by-field` mode.
 * In order for the series to know which data is to used in the global chart array (through valueY), need to convert the data,
 * transforming data into web chart data for `ByField` mode.
 *
 * In case of non-aggregated type bar chart, we rename the category names by adding a suffix, in order
 * to avoid multiple identical values (they are switched back to their original value when displayed).
 */
export const convertByFieldRecords = (inputRecords: DataRecord[], query: IMFeatureLayerQueryParams, dataSource: DataSource) => {
  const inputRecord = inputRecords?.[0]
  if (!inputRecord || !query?.outStatistics?.length) return

  const orderByFields = query.orderByFields
  const outStatistics = query.outStatistics
  const numericFields = outStatistics
    ?.map((statics) => statics.onStatisticField)
    ?.filter((field) => !!field)?.asMutable()

  const x = ByFieldSeriesX
  const y = ByFieldSeriesY

  const data =
    numericFields?.map((field) => {
      const value = inputRecord.getFieldValue(field)
      const item = {
        [x]: field,
        [y]: value ?? 0
      }
      const alias = getFieldSchema(field, dataSource.id)?.alias ?? field
      if (alias !== field) {
        item[x] = alias
        item[x + '_original'] = field
      }

      return item
    }) ?? []

  sortWebChartData(data, orderByFields)
  const records = data?.map((item, i) => {
    const feature = { attributes: item }
    return dataSource.buildRecord(feature)
  })
  return records
}

/**
 * Sorting an array WebChartDataItem following the orderByFields instructions.
 */
export function sortWebChartData (
  data: WebChartDataItem[],
  orderByFields: ImmutableArray<string>,
  forceAscendingOrder: boolean = false
): void {
  if (data == null || orderByFields == null) return
  data.sort(
    (dataItemA: WebChartDataItem, dataItemB: WebChartDataItem): number => {
      // Default sort decision = 0 (equal values)
      let sortDecision = 0

      // Using all the fields from orderByFields to proceed to the comparison
      for (let idx = 0; idx < orderByFields.length; idx += 1) {
        //`orderByField` must has `ASC` or `DESC` in it, e.g. 'field ASC', 'field name DESC'
        const [field, sortOrder] = parseOrderByField(orderByFields[idx])

        const descOrder: boolean =
          sortOrder === WebChartSortOrderKinds.Descending &&
          !forceAscendingOrder
        /**
         * We set the sortDecision only if one of the values is greater than the other one.
         * Otherwise it continues to the next value in the `orderByFields` array.
         */
        const firstEntry = dataItemA[field]
        const secondEntry = dataItemB[field]

        // In case of string values, we perform a natural sort using the native `localeCompare`
        if (typeof firstEntry === 'string' && typeof secondEntry === 'string') {
          sortDecision = firstEntry.localeCompare(secondEntry, undefined, {
            numeric: true
          })
          if (descOrder) sortDecision *= -1
        } else if (firstEntry === undefined || firstEntry === null) {
          sortDecision = !descOrder ? 1 : -1
        } else if (secondEntry === undefined || secondEntry === null) {
          sortDecision = !descOrder ? -1 : 1
        } else if (firstEntry > secondEntry) {
          sortDecision = !descOrder ? 1 : -1
          break
        } else if (firstEntry < secondEntry) {
          sortDecision = !descOrder ? -1 : 1
          break
        }
      }

      return sortDecision
    }
  )
}
