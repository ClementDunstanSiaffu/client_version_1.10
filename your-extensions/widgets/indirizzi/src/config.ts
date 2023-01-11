import { ImmutableObject } from 'seamless-immutable'

export interface Config {
  settings:{
    idWidgetTable:string,
    exampleConfigProperty: string,
    servizi_da_mappa:boolean,
    maxWidthBuffer : number,
    slideBuffer :boolean,
    queryConGeometry : boolean,
  },
  services:{
    service_1: {
      "url":string,
      "layerListIds":number[],
      "title":string
    },
    service_2: {
      "url":string,
      "layerListIds":number[],
      "title":string
    },
    service_3: {
      "url":string,
      "layerListIds":number[],
      "title":string
    },
    service_4: {
      "url":string,
      "layerListIds":number[],
      "title":string
    }
  }

}

export type IMConfig = ImmutableObject<Config>
