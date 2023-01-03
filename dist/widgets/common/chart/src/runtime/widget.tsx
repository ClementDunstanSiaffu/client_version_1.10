import { React, AllWidgetProps } from 'jimu-core'
import { IMConfig } from '../config'
import { versionManager } from '../version-manager'
import { ChartRuntimeStateProvider } from './state'
import Chart from './chart'

const Widget = (props: AllWidgetProps<IMConfig>): React.ReactElement => {
  const { outputDataSources, useDataSources, config, id, enableDataAction } = props

  const webChart = config?.webChart
  const tools = config?.tools
  const defaultTemplateType = config?._templateType

  return (
    <div className='jimu-widget widget-chart'>
      <ChartRuntimeStateProvider>
        <Chart
          widgetId={id}
          tools={tools}
          webChart={webChart}
          useDataSource={useDataSources?.[0]}
          outputDataSourceId={outputDataSources?.[0]}
          enableDataAction={enableDataAction}
          defaultTemplateType={defaultTemplateType}
        />
      </ChartRuntimeStateProvider>
    </div>
  )
}

Widget.versionManager = versionManager

export default Widget
