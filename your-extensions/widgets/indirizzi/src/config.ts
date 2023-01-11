import { ImmutableObject } from 'seamless-immutable'

export interface Config {
  idWidgetTable:string,
  exampleConfigProperty: string,
  servizi_da_mappa:boolean,
  maxWidthBuffer : number,
  slideBuffer :boolean,
  queryConGeometry : boolean,
  service_1: {
    "url":string,
    "layerId":number,
    "layerListIds":number[],
  },
  service_2: {
    "url":string,
    "layerId":number,
    "layerListIds":number[],
  },
  service_3: {
    "url":string,
    "layerId":number,
    "layerListIds":number[],
  },
  service_4: {
    "url":string,
    "layerId":number,
    "layerListIds":number[],
  }
}

export type IMConfig = ImmutableObject<Config>
