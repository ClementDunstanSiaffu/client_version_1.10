import { ImmutableObject } from 'seamless-immutable'

export interface Config {
  idWidgetTable:string,
  exampleConfigProperty: string,
  listvalues: ListValue[]
}
export interface ListValue {
  name: string,
  listIds: [],
  link: string
}

export type IMConfig = ImmutableObject<Config>
