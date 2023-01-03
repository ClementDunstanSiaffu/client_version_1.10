import { React, ImmutableObject, useIntl } from 'jimu-core'
import {
  ChartElementLimit,
  getSeriesType,
  WebChartInlineDataSource,
  WebMapWebChart,
  UnprivilegedChart
} from 'jimu-ui/advanced/chart'
import { useChartRuntimeDispatch, useChartRuntimeState } from '../../state'
import { IWebChart } from '../../../config'
import convertRecordsToInlineData from './convert-utils'
import { hooks, defaultMessages as jimuUiMessages } from 'jimu-ui'
import defaultMessages from '../../translations/default'
import { normalizePieSlices, normalizeSeriesName } from './utils'
import { ChartComponents } from '../components'
import { useSelection, getSeriesWithQuery } from '../utils'

interface WithInlineDataChartProps {
  className?: string
  widgetId: string
  webChart: ImmutableObject<IWebChart>
  chartLimits?: Partial<ChartElementLimit>
}

const noDataOptions = {
  displayMessageWhenNoData: false
}

const DefaultDataSource = {
  type: 'inline'
}

const background = [0, 0, 0, 0] as any

function WithInlineDataChart (
  props: WithInlineDataChartProps
): React.ReactElement {
  const { className, widgetId, webChart: propWebChart, chartLimits } = props
  const { outputDataSource, records, recordsStatus } = useChartRuntimeState()
  const dispatch = useChartRuntimeDispatch()

  const id = widgetId + '-' + (propWebChart?.id ?? 'chart')
  const intl = useIntl()
  const translate = hooks.useTranslate(defaultMessages, jimuUiMessages)
  const webMapWebChartRef = React.useRef<ImmutableObject<WebMapWebChart>>(null)
  let webChart = React.useMemo(() => propWebChart.without('dataSource').set('id', id).set('background', background) as unknown as ImmutableObject<WebMapWebChart>, [id, propWebChart])

  const type = getSeriesType(propWebChart.series as any)
  const query = propWebChart?.dataSource?.query
  const propSeries = propWebChart?.series as any

  const [inlineData, dataItems] = React.useMemo(
    () =>
      convertRecordsToInlineData(
        type,
        records,
        query,
        propSeries,
        intl
      ),
    [type, records, query, propSeries, intl]
  )

  const dataSource = React.useMemo(() => {
    return {
      ...DefaultDataSource,
      processed: inlineData?.processed ?? true
    } as unknown as WebChartInlineDataSource
  }, [inlineData?.processed])

  let series = React.useMemo(() => getSeriesWithQuery(propSeries, query), [propSeries, query])
  series = React.useMemo(() => normalizePieSlices(series, query, dataItems), [dataItems, query, series])
  series = React.useMemo(() => normalizeSeriesName(series, query, translate), [series, query, translate])
  webChart = React.useMemo(() => webChart.set('series', series), [webChart, series])

  const webMapWebChart = React.useMemo(() => {
    // Ensure that the chart is rendered after the data is loaded
    if (recordsStatus !== 'loaded') {
      return webMapWebChartRef.current
    } else {
      webMapWebChartRef.current = webChart
      return webChart
    }
  }, [recordsStatus, webChart])

  const hanldleCreated = React.useCallback(
    (chart: UnprivilegedChart) => {
      dispatch({ type: 'SET_CHART', value: chart })
    },
    [dispatch]
  )

  const [selectionData, handleSelectionChange] = useSelection(
    widgetId,
    outputDataSource,
    propSeries?.length
  )

  return (
    <>
      {webMapWebChart && <ChartComponents
        ref={hanldleCreated}
        className={className}
        webMapWebChart={webMapWebChart}
        dataSource={dataSource}
        inlineData={inlineData}
        noDataOptions={noDataOptions}
        hideLoaderAnimation={true}
        chartLimits={chartLimits}
        selectionData={selectionData}
        arcgisChartsSelectionComplete={handleSelectionChange}
      />}
    </>
  )
}

export default WithInlineDataChart
