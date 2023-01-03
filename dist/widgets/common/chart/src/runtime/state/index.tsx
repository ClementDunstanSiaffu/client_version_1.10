import { React, DataSource, IMSqlExpression, DataRecord } from 'jimu-core'
import { UnprivilegedChart } from 'jimu-ui/advanced/chart'

export type RecordsStatus = 'none' | 'error' | 'empty' | 'loading' | 'loaded' | 'exceed'

export interface ChartRuntimeState {
  //The element of the chart web component, which is used in `range-cursor-mode` tool.
  chart?: UnprivilegedChart
  //Filter criteria used for original data.
  filter?: IMSqlExpression
  //The data source instance of the `useDataSource`.
  dataSource?: DataSource
  //The data source instance of `outputDataSource`.
  outputDataSource?: DataSource
  //The fetched records.
  records?: DataRecord[]
  //The request status of records
  recordsStatus?: RecordsStatus
  //The version of the data source query
  queryVersion?: number
}

const initialState: ChartRuntimeState = {
  chart: null,
  filter: null,
  dataSource: null,
  outputDataSource: null,
  recordsStatus: 'none',
  queryVersion: 0
}

const reducer = (state: ChartRuntimeState, action) => {
  switch (action.type) {
    case 'SET_CHART':
      return { ...state, chart: action.value }
    case 'SET_FILTER':
      return { ...state, filter: action.value }
    case 'SET_DATA_SOURCE':
      return { ...state, dataSource: action.value }
    case 'SET_OUTPUT_DATA_SOURCE':
      return { ...state, outputDataSource: action.value }
    case 'SET_RECORDS':
      return { ...state, records: action.value }
    case 'SET_RECORDS_STATUS':
      return { ...state, recordsStatus: action.value }
    case 'SET_QUERY_VERSION':
      return { ...state, queryVersion: action.value }
    default:
      return state
  }
}

const ChartRuntimeStateContext = React.createContext<ChartRuntimeState>(undefined)
const ChartRuntimeDispatchContext = React.createContext<React.Dispatch<any>>(undefined)

interface ChartRuntimeStateProviderProps {
  defaultState?: ChartRuntimeState
  children: React.ReactNode
}

export const ChartRuntimeStateProvider = (props: ChartRuntimeStateProviderProps) => {
  const { defaultState, children } = props

  const [state, dispatch] = React.useReducer<typeof reducer>(reducer, defaultState || initialState)

  return <ChartRuntimeStateContext.Provider value={state}>
    <ChartRuntimeDispatchContext.Provider value={dispatch}>
      {children}
    </ChartRuntimeDispatchContext.Provider>
  </ChartRuntimeStateContext.Provider>
}

export const useChartRuntimeState = () => {
  return React.useContext(ChartRuntimeStateContext)
}

export const useChartRuntimeDispatch = () => {
  return React.useContext(ChartRuntimeDispatchContext)
}
