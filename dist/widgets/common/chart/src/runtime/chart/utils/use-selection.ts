import { React, IMState, ReactRedux, lodash, MessageManager, DataRecordsSelectionChangeMessage, DataSource } from 'jimu-core'
import { SelectionData, SelectionIndexes, SelectionSource } from 'jimu-ui/advanced/chart'
import { hooks } from 'jimu-ui'

const arrange = (num: number): number[] => {
  const arr = []
  for (let i = 0; i < num; i++) {
    arr.push(i)
  }
  return arr
}

/**
 * Get selection indexes by the selected id from data source.
 * @param selectedIds
 * @param seriesLength
 */
const getSelectionIndexes = (
  selectedIds: string[],
  seriesLength: number = 1
): SelectionIndexes => {
  const selectionIds = selectedIds.filter(id => id).map(id => +id)
  const indexes = (selectionIds?.length) ? selectionIds : []
  const selectionIndexes = new Map()
  arrange(seriesLength).forEach((_, idx) => {
    selectionIndexes.set(idx, { indexesToSelect: indexes })
  })
  return selectionIndexes
}

/**
 * Get all selected indexs from `SelectionIndexes` of chart component.
 * @param selectionIndexes
 */
const getAllSelectionIndexes = (selectionIndexes: SelectionIndexes): number[] => {
  let indexs = []
  selectionIndexes?.forEach((serie) => {
    indexs = indexs.concat(serie.indexesToSelect)
  })
  return Array.from(new Set(indexs.sort()))
}

/**
 * Keep the selection of chart and output data source, publish message when selection changes.
 * @param widgetId
 * @param outputDataSource
 * @param dataItems
 * @param seriesLength
 */
const useSelection = (
  widgetId: string,
  outputDataSource: DataSource,
  seriesLength: number
): [SelectionData, (...args: any[]) => any] => {
  const preSelectedIdsRef = React.useRef<string[]>()

  const handleSelectionChange = hooks.useEventCallback((e) => {
    const sourceRecords = outputDataSource?.getSourceRecords()
    if (!sourceRecords?.length) return
    const selectedIndexs = getAllSelectionIndexes(e.detail.selectionIndexes) ?? []
    const selectedIds = selectedIndexs.map(index => index + '')

    const selectionSource: SelectionSource = e.detail.selectionSource
    // Only trigger selection change message if selection source is from the user operation
    const selectionByUser =
      selectionSource === SelectionSource.SelectionByClickOrRange ||
      selectionSource === SelectionSource.ClearSelection
    if (!selectionByUser) return

    let selectedRecords = []

    if (selectedIds?.length) {
      selectedRecords = sourceRecords.filter(record => {
        const id = record.getId()
        return selectedIds.includes(id)
      })
    }
    preSelectedIdsRef.current = selectedIds

    //Publish records selection change message
    MessageManager.getInstance().publishMessage(
      new DataRecordsSelectionChangeMessage(widgetId, selectedRecords)
    )

    outputDataSource.selectRecordsByIds(selectedIds)
  })

  const originalSelectedIds = ReactRedux.useSelector((state: IMState) => state.dataSourcesInfo?.[outputDataSource?.id]?.selectedIds)
  const [selectionIndexes, setSelectionIndexes] = React.useState<SelectionIndexes>()

  React.useEffect(() => {
    if (!originalSelectedIds) return
    const mutableSelectionIds = originalSelectedIds.asMutable()
    // if the selected ids is same as the current selected ids, just return.
    if (lodash.isDeepEqual(mutableSelectionIds, preSelectedIdsRef.current)) return
    preSelectedIdsRef.current = mutableSelectionIds
    const selectionIndexes = getSelectionIndexes(mutableSelectionIds, seriesLength)
    setSelectionIndexes(selectionIndexes)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalSelectedIds])
  const selectionData = React.useMemo(() => ({ selectionIndexes }), [selectionIndexes])
  return [selectionData, handleSelectionChange]
}

export default useSelection
