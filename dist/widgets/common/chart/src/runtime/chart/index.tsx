import { ImmutableObject, React, UseDataSource } from 'jimu-core'
import { getSeriesType } from 'jimu-ui/advanced/chart'
import { InlineDataSourceManager, FeatureLayerDataSourceManager } from './data-source'
import WebInlineDataChart from './inline-data-chart'
import WebFeatureLayerChart from './feature-layer-chart'
import { ChartTools, IWebChart, TemplateType } from '../../config'

const ChartLimits = {
  maxBarUniqueSeriesCountTotal: 1000,
  maxBarTwoSeriesCountTotal: 1000,
  maxBarThreePlusSeriesCountTotal: 1000,
  maxPieChartSliceCountTotal: 300
}

interface Props {
  className?: string
  widgetId: string
  webChart: ImmutableObject<IWebChart>
  tools: ImmutableObject<ChartTools>
  enableDataAction: boolean
  outputDataSourceId: string
  useDataSource: ImmutableObject<UseDataSource>
  defaultTemplateType: TemplateType
}

const Chart = (props: Props): React.ReactElement => {
  const { outputDataSourceId, useDataSource, tools, webChart, widgetId, defaultTemplateType, enableDataAction } = props

  const seriesType = getSeriesType(webChart?.series as any)
  const useInlineData = seriesType !== 'histogramSeries'

  return (
    <>
        {useInlineData && (
          <>
            <InlineDataSourceManager
              widgetId={widgetId}
              webChart={webChart}
              outputDataSourceId={outputDataSourceId}
              useDataSource={useDataSource}
            />
            <WebInlineDataChart
              widgetId={widgetId}
              tools={tools}
              webChart={webChart}
              chartLimits={ChartLimits}
              useDataSource={useDataSource}
              enableDataAction={enableDataAction}
              defaultTemplateType={defaultTemplateType}
            />
          </>
        )}
        {!useInlineData && (
         <>
          <FeatureLayerDataSourceManager
            widgetId={widgetId}
            webChart={webChart}
            outputDataSourceId={outputDataSourceId}
            useDataSource={useDataSource}
          />
          <WebFeatureLayerChart
              widgetId={widgetId}
              tools={tools}
              webChart={webChart}
              chartLimits={ChartLimits}
              useDataSource={useDataSource}
              enableDataAction={enableDataAction}
              defaultTemplateType={defaultTemplateType}
            />
         </>
        )}
    </>
  )
}
export default Chart
