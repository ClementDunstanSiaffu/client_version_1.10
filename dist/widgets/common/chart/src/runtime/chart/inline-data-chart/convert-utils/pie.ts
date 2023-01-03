import { DataRecord, IMFeatureLayerQueryParams, IntlShape } from 'jimu-core'
import { WebChartDataItem } from 'jimu-ui/advanced/chart'
import { CategoryType } from '../../../../config'
import { getCategoryType } from '../../../../utils/common/serial'
import { convertGroupData } from './common'

const convertRecordsToInlineData = (
  records: DataRecord[],
  query: IMFeatureLayerQueryParams,
  intl: IntlShape
): WebChartDataItem[] => {
  let items = []
  const categoryType = getCategoryType(query)
  if (categoryType === CategoryType.ByGroup) {
    items = convertGroupData(records, query, intl)
  } else if (categoryType === CategoryType.ByField) {
    items = records?.map(record => record.getData())
  }

  return items
}

export default convertRecordsToInlineData
