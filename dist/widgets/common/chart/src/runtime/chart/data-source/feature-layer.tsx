import { React, ImmutableObject, UseDataSource } from 'jimu-core'
import OriginDataSourceManager from './original'
import OutputSourceManager from './output'
import { IWebChart } from '../../../config'

interface FeatureLayerDataSourceManagerPorps {
  widgetId: string
  webChart: ImmutableObject<IWebChart>
  outputDataSourceId: string
  useDataSource: ImmutableObject<UseDataSource>
}

const FeatureLayerDataSourceManager = (props: FeatureLayerDataSourceManagerPorps) => {
  const {
    widgetId,
    useDataSource,
    outputDataSourceId
  } = props

  return (
    <>
      <OriginDataSourceManager
        widgetId={widgetId}
        useDataSource={useDataSource}
      />
      <OutputSourceManager
        widgetId={widgetId}
        dataSourceId={outputDataSourceId}/>
    </>
  )
}

export default FeatureLayerDataSourceManager
