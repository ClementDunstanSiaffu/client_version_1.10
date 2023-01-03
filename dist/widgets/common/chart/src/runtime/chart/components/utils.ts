import {
  React,
  ImmutableObject,
  UseDataSource,
  DataSource,
  appConfigUtils,
  getAppStore,
  DataRecord,
  ReactRedux,
  IMState,
  IMFeatureLayerQueryParams,
  defaultMessages as jimucoreDefaultMessages,
  DataSourceStatus,
  DataSourceManager
} from 'jimu-core'
import { hooks, defaultMessages as jimuDefaultMessages } from 'jimu-ui'
import { ChartTypes, getSeriesType } from 'jimu-ui/advanced/chart'
import { ChartDataSource, IWebChart } from '../../../config'
import { isSerialSeries } from '../../../utils/default'
import { RecordsStatus } from '../../state'
import defaultMessages from '../../translations/default'

/**
 *  Get the warning message translation.
 * @param type
 * @param sourceStatus
 */
export const getWarningMessageTranslation = (
  type: ChartTypes,
  sourceStatus: RecordsStatus
): string => {
  let translation = ''
  if (sourceStatus === 'exceed') {
    if (isSerialSeries(type)) {
      translation = 'datalimitedTip'
    } else if (type === 'pieSeries') {
      translation = 'pieDatalimitedTip'
    }
  } else if (sourceStatus === 'empty') {
    translation = 'dataEmptyTip'
  } else if (sourceStatus === 'error') {
    translation = 'widgetLoadError'
  }
  return translation
}

/**
 * Get the warning message translation of not-ready data source.
 * @param useDataSource
 * @returns
 */
export const getNotReadyTranslation = (
  useDataSource: ImmutableObject<UseDataSource>,
  dataSource: DataSource
): [string, Record<string, any>] => {
  if (!useDataSource || !dataSource) return null
  const labels = getDataSourceLabels(useDataSource, dataSource)
  const translation = [
    'outputDataIsNotGenerated',
    {
      outputDsLabel: labels.dataSourceLabel,
      sourceWidgetName: labels.widgetLabel
    }
  ] as [string, Record<string, any>]
  return translation
}

/**
 * Get the label of the widget that outputs the data source
 * @param useDataSource
 */
export const getWidgetLabelFromUseDataSource = (
  useDataSource: ImmutableObject<UseDataSource>
) => {
  const widgetId = appConfigUtils.getWidgetIdByOutputDataSource(useDataSource)
  const widgetLabel =
    getAppStore().getState()?.appConfig.widgets?.[widgetId]?.label

  return widgetLabel
}
/**
 * Get the label of the data source and the label of the widget that outputs the data source
 * @param useDataSource
 * @param dataSource
 * @returns
 */
export const getDataSourceLabels = (
  useDataSource: ImmutableObject<UseDataSource>,
  dataSource: DataSource
): { dataSourceLabel: string, widgetLabel: string } => {
  const dataSourceLabel = dataSource?.getLabel()
  const widgetLabel = getWidgetLabelFromUseDataSource(useDataSource)
  return { dataSourceLabel, widgetLabel }
}

export interface SourceRecords {
  version: number
  records: DataRecord[]
}

/**
 * Monitor and get the latest source records
 * @param dataSource
 */
export const useSourceRecords = (dataSource: DataSource): SourceRecords => {
  const dataSourceId = dataSource?.id
  const sourceVersion = ReactRedux.useSelector(
    (state: IMState) => state.dataSourcesInfo?.[dataSourceId]?.sourceVersion
  )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useMemo(() => {
    const records = dataSource?.getSourceRecords() ?? ([] as DataRecord[])
    return { records, version: sourceVersion }
  }, [dataSource, sourceVersion])
}

/**
 * Check whether the query in chart data source is valid.
 * @param dataSource
 */
export const isValidQuery = (
  type: ChartTypes,
  query: IMFeatureLayerQueryParams
): boolean => {
  if (isSerialSeries(type) || type === 'pieSeries') {
    if (query.outFields) {
      return !!(query?.outFields?.[0] && query?.groupByFieldsForStatistics?.[0])
    } else {
      if (query?.groupByFieldsForStatistics) {
        return (
          !!query?.groupByFieldsForStatistics?.[0] &&
          !!query?.outStatistics?.[0]?.onStatisticField
        )
      } else {
        return !!query?.outStatistics?.[0]?.onStatisticField
      }
    }
  } else if (type === 'scatterSeries') {
    return !!query?.outFields?.[1]
  } else if (type === 'histogramSeries') {
    return !!query?.outFields?.[0]
  }
}

/**
 * Check whether the chart data source is valid.
 * @param dataSource
 */
export const isValidIWebChartDataSource = (
  type: ChartTypes,
  dataSource: ImmutableObject<ChartDataSource>
): boolean => {
  return isValidQuery(type, dataSource?.query)
}

/**
 * Check whether the web chart config is valid.
 * @param webChart
 * @returns
 */
export const isWebChartValid = (
  webChart: ImmutableObject<IWebChart>
): boolean => {
  const type = getSeriesType(webChart?.series as any)
  const sourceValid = isValidIWebChartDataSource(type, webChart?.dataSource)
  return sourceValid
}

export const useWarningMessage = (
  chartType: ChartTypes,
  webChartValid: boolean,
  useDataSource: ImmutableObject<UseDataSource>,
  recordsStatus: RecordsStatus
): ['basic' | 'tooltip', string] => {
  const [type, setType] = React.useState<'basic' | 'tooltip'>('tooltip')
  const [message, setMessage] = React.useState('')
  const originSourceStatus = ReactRedux.useSelector(
    (state: IMState) =>
      state.dataSourcesInfo?.[useDataSource?.dataSourceId]?.status
  )
  const instanceStatus = ReactRedux.useSelector(
    (state: IMState) =>
      state.dataSourcesInfo?.[useDataSource?.dataSourceId]?.instanceStatus
  )
  const translate = hooks.useTranslate(
    jimucoreDefaultMessages,
    jimuDefaultMessages,
    defaultMessages
  )

  React.useEffect(() => {
    setType(recordsStatus === 'exceed' ? 'basic' : 'tooltip')
    if (
      originSourceStatus === DataSourceStatus.NotReady &&
      instanceStatus === DataSourceStatus.Created
    ) {
      const dataSource = DataSourceManager.getInstance().getDataSource(
        useDataSource.dataSourceId
      )
      const translation = getNotReadyTranslation(useDataSource, dataSource)
      if (translation) {
        const message = translate(...translation)
        setMessage(message)
      }
    } else {
      if (!webChartValid) {
        setMessage('')
      } else {
        const translation = getWarningMessageTranslation(
          chartType,
          recordsStatus
        )
        if (translation) {
          const message = translate(translation)
          setMessage(message)
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    originSourceStatus,
    instanceStatus,
    chartType,
    webChartValid,
    recordsStatus
  ])

  return [type, message]
}
