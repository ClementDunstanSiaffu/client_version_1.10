import { React, ImmutableObject, UseDataSource, IMState, ReactRedux, DataSourceStatus } from 'jimu-core'
import { ChartElementLimit, getSeriesType } from 'jimu-ui/advanced/chart'
import { ChartTools, IWebChart, TemplateType } from '../../../config'
import Tools from '../tools'
import WithFeatureLayerChart from './with-feature-layer'
import { useChartRuntimeState } from '../../state'
import { getTemplateType } from '../../../utils/common'
import { ChartRoot, isWebChartValid, useWarningMessage } from '../components'

interface WebFeatureLayerChartPorps {
  className?: string
  widgetId: string
  webChart: ImmutableObject<IWebChart>
  tools: ImmutableObject<ChartTools>
  enableDataAction: boolean
  chartLimits?: Partial<ChartElementLimit>
  useDataSource: ImmutableObject<UseDataSource>
  defaultTemplateType: TemplateType
}

const useChartRendered = (dataSourceId: string, webChart: ImmutableObject<IWebChart>) => {
  const status = ReactRedux.useSelector((state: IMState) => state.dataSourcesInfo?.[dataSourceId]?.status)
  const valid = React.useMemo(() => isWebChartValid(webChart), [webChart])
  const render = status !== DataSourceStatus.NotReady && valid
  return { valid, render }
}

const WebFeatureLayerChart = (props: WebFeatureLayerChartPorps) => {
  const {
    widgetId,
    tools: propTools,
    enableDataAction = true,
    webChart,
    chartLimits,
    useDataSource,
    defaultTemplateType
  } = props

  const { recordsStatus } = useChartRuntimeState()
  const type = getSeriesType(webChart?.series as any)
  const showTools = propTools?.cursorEnable || !!propTools?.filter || enableDataAction
  const { valid, render } = useChartRendered(
    useDataSource?.dataSourceId,
    webChart
  )

  const templateType =
    getTemplateType(webChart?.series)?.[1] || defaultTemplateType || 'column'
  const [messageType, message] = useWarningMessage(
    type,
    valid,
    useDataSource,
    recordsStatus
  )

  const tools = showTools
    ? (
    <Tools
      type={type}
      tools={propTools}
      widgetId={widgetId}
      enableDataAction={enableDataAction}
    />
      )
    : null
  return (
    <ChartRoot
      templateType={templateType}
      messageType={messageType}
      message={message}
      showLoading={recordsStatus === 'loading'}
      background={webChart?.background}
      className='web-feature-layer-chart'
      showPlaceholder={!render}
      tools={tools}
    >
      <WithFeatureLayerChart
        className='web-chart'
        widgetId={widgetId}
        webChart={webChart}
        chartLimits={chartLimits}
        useDataSource={useDataSource}
      />
    </ChartRoot>
  )
}

export default WebFeatureLayerChart
