import { DataSource, DataSourceComponent, Immutable, ImmutableObject, React, UseDataSource, DataSourceStatus, FeatureLayerDataSource, SceneLayerDataSource, DataSourceManager, dataSourceUtils } from 'jimu-core'
import { useChartRuntimeDispatch, useChartRuntimeState } from '../../state'

interface OutputSourceManagerProps {
  widgetId: string
  dataSourceId: string
}

/**
 * Check whether a data source instance is valid (whether the corresponding data source is deleted)
 * @param dataSource
 */
const isDataSourceValid = (dataSource: DataSource): boolean => {
  if (!dataSource) return false
  const info = dataSource.getInfo()
  return info && Object.keys(info).length > 0
}

const OutputSourceManager = (props: OutputSourceManagerProps) => {
  const {
    widgetId,
    dataSourceId
  } = props

  const dispatch = useChartRuntimeDispatch()
  const { outputDataSource: dataSource, records } = useChartRuntimeState()

  React.useEffect(() => {
    if (!isDataSourceValid(dataSource) || !records) return
    dataSource.setSourceRecords(records)
    dataSource.setStatus(DataSourceStatus.Unloaded)
    dataSource.setCountStatus(DataSourceStatus.Unloaded)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource, records])

  const useDataSource: ImmutableObject<UseDataSource> = React.useMemo(() => {
    if (dataSourceId) {
      return Immutable({
        dataSourceId: dataSourceId,
        mainDataSourceId: dataSourceId
      })
    }
  }, [dataSourceId])

  const handleSchemaChange = () => {
    if (!dataSource) return
    syncOriginDsInfo(dataSource as FeatureLayerDataSource | SceneLayerDataSource)
    if (dataSource.getStatus() !== DataSourceStatus.NotReady) {
      dataSource.setStatus(DataSourceStatus.NotReady)
      dataSource.setCountStatus(DataSourceStatus.NotReady)
    }
  }

  const handleCreated = (dataSource: FeatureLayerDataSource | SceneLayerDataSource) => {
    syncOriginDsInfo(dataSource)
    dispatch({ type: 'SET_OUTPUT_DATA_SOURCE', value: dataSource })
  }

  const syncOriginDsInfo = (dataSource: FeatureLayerDataSource | SceneLayerDataSource) => {
    const originDs = DataSourceManager.getInstance().getDataSource(dataSource?.getDataSourceJson()?.originDataSources?.[0]?.dataSourceId) as FeatureLayerDataSource | SceneLayerDataSource
    if (!dataSource || !originDs) {
      console.error('Failed to sync origin data source info to chart output data source.')
      return
    }
    dataSource.setPopupInfo(dataSourceUtils.getPopupInfoIntersection(originDs.getPopupInfo(), dataSource))
    dataSource.setLayerDefinition(dataSourceUtils.getLayerDefinitionIntersection(originDs.getLayerDefinition(), dataSource))
  }

  return <DataSourceComponent
    widgetId={widgetId}
    useDataSource={useDataSource}
    onDataSourceCreated={handleCreated}
    onDataSourceSchemaChange={handleSchemaChange}
  />
}

export default OutputSourceManager
