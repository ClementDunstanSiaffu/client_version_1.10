import {
  React,
  DataSource,
  DataSourceStatus,
  QueriableDataSource,
  IMFeatureLayerQueryParams,
  DataRecord
} from 'jimu-core'
import { ChartTypes } from 'jimu-ui/advanced/chart'
import { getCategoryField } from '../../../utils/common/serial'
import { isSerialSeries } from '../../../utils/default'
import { useChartRuntimeDispatch, useChartRuntimeState } from '../../state'
import { getSourceRecords } from './utils'

/**
 * Check whether a data source instance is valid (whether the corresponding data source is deleted)
 * @param dataSource
 */
const isDataSourceValid = (dataSource: DataSource): boolean => {
  if (!dataSource) return false
  const info = dataSource.getInfo()
  return info && Object.keys(info).length > 0
}

/**
 * Check whether a data source instance can be used to load data
 * @param dataSource
 */
const isDataSourceReady = (dataSource: DataSource): boolean => {
  if (!isDataSourceValid(dataSource)) return false
  const status = dataSource.getStatus()
  //The dats source is ready to use
  return status && status !== DataSourceStatus.NotReady
}

/**
 * Check whether the query in chart data source is valid.
 * @param dataSource
 */
const isValidQuery = (
  type: ChartTypes,
  query: IMFeatureLayerQueryParams
): boolean => {
  if (isSerialSeries(type) || type === 'pieSeries') {
    if (query.outFields) {
      return !!(query?.outFields?.[0] && query?.groupByFieldsForStatistics?.[0])
    } else {
      return !!query?.outStatistics?.[0]?.onStatisticField
    }
  } else if (type === 'scatterSeries') {
    return !!query?.outFields?.[1]
  } else if (type === 'histogramSeries') {
    return !!query?.outFields?.[0]
  }
}

const getDataSourceQuery = (
  type: ChartTypes,
  query: IMFeatureLayerQueryParams
) => {
  if (!isValidQuery(type, query)) return null
  // Remove `orderByField` for `by-field` mode of `serial` and `pie` chart
  if (query.outStatistics?.length && !query.groupByFieldsForStatistics) {
    return query.without('orderByFields')
  }
  return query
}

const useFetchRecords = (
  type: ChartTypes,
  query: IMFeatureLayerQueryParams,
  version: number,
  recordsLimited: number,
  callback?: (records: DataRecord[], query, dataSource) => DataRecord[]
) => {
  const { dataSource, outputDataSource } = useChartRuntimeState()
  const dispatch = useChartRuntimeDispatch()
  const categoryField = getCategoryField(query)
  const params = React.useMemo(() => getDataSourceQuery(type, query), [query, type])

  React.useEffect(() => {
    if (!isDataSourceReady(dataSource) || !outputDataSource || params == null) {
      return
    }
    dispatch({ type: 'SET_RECORDS_STATUS', value: 'loading' })
    ;(dataSource as QueriableDataSource).query(params).then(
      (result) => {
        let records = result.records
        if (records.length > recordsLimited) {
          dispatch({ type: 'SET_RECORDS_STATUS', value: 'exceed' })
          return
        }
        if (records.length === 0) {
          dispatch({ type: 'SET_RECORDS_STATUS', value: 'empty' })
          dispatch({ type: 'SET_RECORDS', value: records })
          return
        }
        if (callback) records = callback(records, query, dataSource)
        records = getSourceRecords(records, outputDataSource, categoryField)
        dispatch({ type: 'SET_RECORDS_STATUS', value: 'loaded' })
        dispatch({ type: 'SET_RECORDS', value: records })
      },
      (error) => {
        console.error(error)
        dispatch({ type: 'SET_RECORDS', value: undefined })
        dispatch({ type: 'SET_RECORDS_STATUS', value: 'error' })
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource, outputDataSource, params, version])
}

export default useFetchRecords
