import {
  DataSource,
  dataSourceUtils,
  IMThemeVariables,
  SerializedStyles,
  css,
  ClauseOperator,
  ClauseLogic
} from 'jimu-core'
import { FeatureDataRecord, FeatureLayerDataSource } from 'jimu-arcgis'
import { LayersConfig, Suggestion } from '../config'

async function queryRecords (q: any, ds: DataSource): Promise<FeatureDataRecord[]> {
  if (!ds) return await Promise.resolve([])
  return await (ds as FeatureLayerDataSource)
    .query(q)
    .then(async queryResult => await queryRecordsResult(q, queryResult))
}

async function queryRecordsResult (q, queryResult): Promise<FeatureDataRecord[]> {
  return await Promise.resolve(queryResult?.records || [])
}

function getSuggestionItem (suggestion: string, searchText: string): string {
  if (!searchText) return suggestion
  const replaceReg = new RegExp(`(${searchText})`, 'gi')
  return suggestion.replace(replaceReg, '<strong >$1</strong>')
}

function uniqueJson (jsonArr, key) {
  const result = jsonArr[0] ? [jsonArr[0]] : []
  for (let i = 1; i < jsonArr.length; i++) {
    const item = jsonArr[i]
    let repeat = false
    for (let j = 0; j < result.length; j++) {
      if (item[key] === result[j][key]) {
        repeat = true
        break
      }
    }
    if (!repeat) {
      result.push(item)
    }
  }
  return result
}

export async function fetchSuggestionRecords (
  searchText: string,
  config: LayersConfig,
  datasource: DataSource
): Promise<Suggestion[]> {
  const searchFields = config.searchFields.split(',')
  const queryParams: any = {
    page: 1,
    pageSize: 10,
    outFields: searchFields,
    returnDistinctValues: true
  }

  if (config.enableSearch && config.searchFields) {
    const SQL = getQuerySQL(searchText, config, datasource, true)?.sql
    queryParams.where = SQL
  }
  const searchReg = new RegExp(`(${searchText})`, 'gi')
  return queryRecords(queryParams, datasource).then(async records => {
    let searchSuggestion = []
    searchFields.forEach(attrName => {
      records.forEach(el => {
        const suggestionItem = el?.feature?.attributes[attrName]
        if (
          suggestionItem &&
          !searchSuggestion.includes(suggestionItem) &&
          suggestionItem.match(searchReg)
        ) {
          const suggestion: Suggestion = {
            suggestionHtml: getSuggestionItem(suggestionItem, searchText),
            suggestion: suggestionItem
          }
          searchSuggestion.push(suggestion)
        }
      })
    })
    searchSuggestion = uniqueJson(searchSuggestion, 'suggestion')
    return Promise.resolve(searchSuggestion)
  })
}

export function minusArray (array1, array2, key?: string) {
  const keyField = key || 'jimuName'
  const lengthFlag = array1.length > array2.length
  const arr1 = lengthFlag ? array1 : array2
  const arr2 = lengthFlag ? array2 : array1
  return arr1.filter(item => {
    const hasField = arr2.some(ele => {
      return ele?.[keyField] === item?.[keyField]
    })
    return !hasField
  })
}

export function getQuerySQL (
  searchText: string,
  curLayer: LayersConfig,
  datasource: DataSource,
  fetchSuggestion: boolean = false
) {
  const searchFields = curLayer.searchFields.split(',')
  const searchExact = fetchSuggestion ? false : curLayer.searchExact
  const clauseOperator = searchExact ? ClauseOperator.StringOperatorIs : ClauseOperator.StringOperatorContains
  if (curLayer.searchFields) {
    const clauses = searchFields.map(field => {
      return dataSourceUtils.createSQLClause(field, clauseOperator, searchText)
    })
    const sqlExpression = dataSourceUtils.createSQLExpression(ClauseLogic.Or, clauses)
    return dataSourceUtils.getArcGISSQL(sqlExpression, datasource)
  }
}

export function getGlobalTableTools (theme: IMThemeVariables): SerializedStyles {
  return css`
    .esri-button-menu__item .esri-button-menu__item-label{
      padding: 4px 15px !important;
    }
    .table-popup-search{
      .search-icon{
        z-index: 2;
      }
      .popup-search-input{
        border: 1px solid ${theme.colors.palette.light[400]};
        border-radius: 2px;
        .input-wrapper{
          height: 30px;
          border: none;
        }
      }
    }
    .table-action-option{
      width: 100%;
      display: inline-flex;
      flex-direction: row;
      .table-action-option-tab{
        margin: auto 8px;
      }
      .table-action-option-close{
        flex: 1;
        button{
          :hover {
            color: ${theme.colors.white};
          }
          float: right;
        }
      }
    }
    .esri-popover--open{
      z-index: 1005 !important;
      .esri-date-picker__calendar{
        background-color: ${theme.colors.white};
      }
    }
    .jimu-dropdown-menu{
      z-index: 1006 !important;
    }
  `
}
