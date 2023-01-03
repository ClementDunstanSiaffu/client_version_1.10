import { React, ImmutableObject, UseDataSource } from 'jimu-core'
import { getSeriesType } from 'jimu-ui/advanced/chart'
import { CategoryType, IWebChart } from '../../../config'
import { getCategoryType } from '../../../utils/common/serial'
import { isSerialSeries } from '../../../utils/default'
import { useChartRuntimeState } from '../../state'
import OriginDataSourceManager from './original'
import OutputSourceManager from './output'
import useFetchRecords from './use-fetch-records'
import { convertByFieldRecords, getRecordslimited } from './utils'

interface InlineDataSourceManagerProps {
  widgetId: string
  webChart: ImmutableObject<IWebChart>
  outputDataSourceId: string
  useDataSource: ImmutableObject<UseDataSource>
}

const InlineDataSourceManager = (props: InlineDataSourceManagerProps) => {
  const {
    widgetId,
    webChart,
    outputDataSourceId,
    useDataSource
  } = props

  const type = getSeriesType(webChart?.series as any)
  const query = webChart?.dataSource?.query
  const recordsLimited = getRecordslimited(webChart?.series)
  const { queryVersion } = useChartRuntimeState()

  const categoryType = getCategoryType(query)
  const callback = React.useMemo(() => {
    if (categoryType !== CategoryType.ByField || (!isSerialSeries(type) && type !== 'pieSeries')) return null
    return convertByFieldRecords
  }, [categoryType, type])

  useFetchRecords(type, query, queryVersion, recordsLimited, callback)

  return (
    <>
      <OriginDataSourceManager
        widgetId={widgetId}
        useDataSource={useDataSource}
      />
      <OutputSourceManager
        widgetId={widgetId}
        dataSourceId={outputDataSourceId} />
    </>
  )
}

export default InlineDataSourceManager
