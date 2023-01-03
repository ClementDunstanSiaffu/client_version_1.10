/* eslint-disable camelcase */
import { DataRecord, IMFeatureLayerQueryParams, Immutable } from 'jimu-core'
import { convertByFieldRecords } from '../../src/runtime/chart/data-source/utils'
import { convertGroupData } from '../../src/runtime/chart/inline-data-chart/convert-utils/common'

jest.mock('../../src/utils/common', () => {
  return {
    ...jest.requireActual<Record<string, any>>('../../src/utils/common'),
    getFieldSchema: field => ({ field, alias: `${field}-1` })
  }
})

const makeDummyRecord = (attribute): DataRecord => {
  return {
    getData: () => attribute,
    getFieldValue: (field) => attribute[field],
    getFormattedFieldValue: (field) => attribute[field] + '!'
  } as unknown as DataRecord
}

describe('src/runtime/serial/utils', () => {
  it('convertGroupData', () => {
    const query: IMFeatureLayerQueryParams = Immutable({
      groupByFieldsForStatistics: ['x'],
      outStatistics: [{
        onStatisticField: 'v',
        outStatisticFieldName: 'v',
        statisticType: 'sum'
      }]
    })
    let data = [{ x: 'a', v: 0 }, { x: 'b', v: 1 }]
    let records = data.map(makeDummyRecord)
    let result = convertGroupData(records, query, null)
    expect(result).toEqual([{ x: 'a!', x_original: 'a', v: 0 }, { x: 'b!', x_original: 'b', v: 1 }])

    data = [{ x: 'a', v: 0 }, { x: 'b', v: 1 }, { x: null, v: 2 }]
    records = data.map(makeDummyRecord)
    result = convertGroupData(records, query, null)
    expect(result).toEqual([{ x: 'a!', x_original: 'a', v: 0 }, { x: 'b!', x_original: 'b', v: 1 }])
  })
  it('convertByFieldRecords', () => {
    const dataSource = {
      buildRecord: (feature) => {
        return feature
      }
    } as any
    let query: IMFeatureLayerQueryParams = Immutable({
      outStatistics: [{
        onStatisticField: 'v',
        outStatisticFieldName: 'v',
        statisticType: 'sum'
      }]
    })
    let data = [{ x: 'a', v: 0 }, { x: 'b', v: 1 }]
    let records = data.map(makeDummyRecord)

    query = Immutable({
      outStatistics: [{
        onStatisticField: 'v',
        outStatisticFieldName: 'v',
        statisticType: 'sum'
      },
      {
        onStatisticField: 'v1',
        outStatisticFieldName: 'v1',
        statisticType: 'sum'
      }, {
        onStatisticField: 'v2',
        outStatisticFieldName: 'v',
        statisticType: 'sum'
      }]
    })

    data = [{ v: 0, v1: 1, v2: null }] as any
    records = data.map(makeDummyRecord)
    const result = convertByFieldRecords(records, query, dataSource)
    expect(result).toEqual([{
      attributes: {
        name: 'v-1',
        name_original: 'v',
        value: 0
      }
    }, {
      attributes: {
        name: 'v1-1',
        name_original: 'v1',
        value: 1
      }
    }, {
      attributes: {
        name: 'v2-1',
        name_original: 'v2',
        value: 0
      }
    }])
  })
})
