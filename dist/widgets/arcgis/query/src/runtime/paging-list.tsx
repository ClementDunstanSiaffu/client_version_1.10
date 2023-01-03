/** @jsx jsx */
import { React, jsx, css, classNames, CONSTANTS, FeatureLayerDataSource, ImmutableObject, DataRecord, FeatureDataRecord, QueryParams } from 'jimu-core'
import { Pagination, Loading, LoadingType } from 'jimu-ui'
import { ListDirection, QueryItemType } from '../config'
import { EntityStatusType } from '../common/common-components'
import { QueryResultItem } from './query-result-item'
import { executeQuery, getPopupTemplate } from './query-utils'
import { useAutoHeight } from './useAutoHeight'

const { useRef, useState } = React

export interface PagingListProps {
  widgetId: string
  queryItem: ImmutableObject<QueryItemType>
  outputDS: FeatureLayerDataSource
  resultCount: number
  maxPerPage: number
  records: DataRecord[]
  queryParams: QueryParams
  direction?: ListDirection
  onRenderDone?: (options: { dataItems: any[], pageSize?: number, page?: number }) => void
}

const getStyle = (isAutoHeight: boolean) => {
  return css`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;

    .list_items {
      flex: 1 1 ${isAutoHeight ? 'auto' : 0};
      max-height: ${isAutoHeight ? 'calc(61.8vh - 100px)' : 'none'};
      overflow: auto;
      display: flex;
      flex-direction: row;
    }

    .query-result-item + .query-result-item {
      margin-left: 0.5rem;
      margin-top: 0;
    }

    &.vertical {
      .list_items {
        flex-direction: column;
      }
      .feature-info-component {
        width: 100%;
      }
      .query-result-item + .query-result-item {
        margin-top: 0.5rem;
        margin-left: 0;
      }
    }
    .page-size-selector {
      width: auto;
    }

    .query-editable-select {
      .jimu-numeric-input {
        width: 60px;
      }
    }
  `
}

export function PagingList (props: PagingListProps) {
  const { widgetId, outputDS, queryItem, queryParams, resultCount, records, onRenderDone, direction } = props
  const [dataItems, setDataItems] = useState(records)
  const [popupTempalte, setPopupTemplate] = useState<any>()
  const [loadStatus, setLoadStatus] = useState<EntityStatusType>(EntityStatusType.Init)
  const pageRef = useRef(1)
  const defaultPageSize = outputDS?.getQueryPageSize() ?? CONSTANTS.DEFAULT_QUERY_PAGE_SIZE
  const [pageSize, setPageSize] = useState(defaultPageSize)
  const isAutoHeight = useAutoHeight()

  const pageSizeOptions = React.useMemo(() => {
    const result = [defaultPageSize]
    if (Math.round(defaultPageSize / 2) !== result[0]) {
      result.push(Math.round(defaultPageSize / 2))
    }
    if (Math.round(defaultPageSize / 5) !== result[1]) {
      result.push(Math.round(defaultPageSize / 5))
    }
    return result.reverse()
  }, [defaultPageSize])

  React.useEffect(() => {
    pageRef.current = 1
    setDataItems(records)
    setPageSize(defaultPageSize)
    // eslint-disable-next-line
  }, [records])

  React.useEffect(() => {
    getPopupTemplate(outputDS, queryItem).then(template => {
      setPopupTemplate(template)
    })
  }, [outputDS, queryItem])

  const loadByPages = async (currentPage: number, size: number) => {
    pageRef.current = currentPage
    setLoadStatus(EntityStatusType.Loading)
    const result = await executeQuery(widgetId, queryItem, outputDS, { ...queryParams, page: currentPage, pageSize: size })
    setDataItems(result.records)
    onRenderDone?.({
      dataItems: result.records,
      pageSize: size,
      page: pageRef.current
    })
    setLoadStatus(EntityStatusType.Loaded)
  }

  const handlePageSizeChange = (size: number) => {
    if (size > 0) {
      setPageSize(size)
      loadByPages(1, size)
    }
  }

  return (
    <div className={classNames({ vertical: direction === ListDirection.Vertical })} css={getStyle(isAutoHeight)}>
      <div className='list_items mb-2 px-3'>
        {dataItems?.map((dataItem, x) => (
          <QueryResultItem
            key={dataItem.getId()}
            data={dataItem as FeatureDataRecord}
            dataSource={outputDS}
            widgetId={widgetId}
            popupTemplate={popupTempalte}
            expandByDefault={queryItem.resultExpandByDefault}
          />
        ))}
      </div>
      {loadStatus === EntityStatusType.Loading && <Loading type={LoadingType.Donut}/>}
      {resultCount > 0 && (
        <div className='d-flex justify-content-between align-items-center px-3'>
          <Pagination
            className='d-flex justify-content-end'
            disabled={loadStatus === EntityStatusType.Loading}
            current={pageRef.current}
            totalPage={Math.ceil(resultCount / pageSize)}
            onChangePage={(pageNum) => loadByPages(pageNum, pageSize)}
            pageSize={pageSize}
            pageSizeOptions={pageSizeOptions}
            onPageSizeChange={handlePageSizeChange}
            showSizeChanger
          />
        </div>
      )}
    </div>
  )
}
