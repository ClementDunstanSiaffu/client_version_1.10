import { ImmutableObject } from 'seamless-immutable'

export interface Config {
  "idWidgetTable":string,
  "searchItems": {
    "url": string,
    "queryWhere": string,
    "outFields": string[],
    "outFieldsDisplay": string[],
  },
  "searchAmbiti": {
    "url": string,
    "queryWhere": string,
    "outFields": string[]
  },
  "searchSTO": {
    "url": string,
    "queryWhere": string,
    "outFields": string[]
  }
}

export type IMConfig = ImmutableObject<Config>
