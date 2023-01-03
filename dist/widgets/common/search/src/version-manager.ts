import { BaseVersionManager, JimuFieldType, loadArcGISJSAPIModules, UtilityManager, UseUtility } from 'jimu-core'
import { OutputDsAddress, SearchServiceType } from 'jimu-ui/advanced/setting-components'
import { IMConfig } from './config'
export const AddressSchema = {
  jimuName: OutputDsAddress,
  alias: 'ADDRESS',
  type: JimuFieldType.String,
  name: OutputDsAddress
}
class VersionManager extends BaseVersionManager {
  versions = [
    {
      version: '1.9.0',
      description: 'For geocode service, use arrary of Schema to set displayFields',
      upgrader: (oldConfig: IMConfig) => {
        const newDatasourceConfig = oldConfig?.asMutable({ deep: true })?.datasourceConfig?.map(dsConfig => {
          if (dsConfig?.searchServiceType === SearchServiceType.FeatureService) {
            return dsConfig
          } else {
            if (dsConfig?.displayFields) {
              return dsConfig
            } else {
              dsConfig.displayFields = [AddressSchema]
              dsConfig.addressFields = [AddressSchema]
              dsConfig.defaultAddressFieldName = AddressSchema.jimuName
              return dsConfig
            }
          }
        })
        return oldConfig.setIn(['datasourceConfig'], newDatasourceConfig)
      }
    },
    {
      version: '1.10.0',
      description: 'For locator service, need to save support for suggest in config',
      upgrader: async (oldConfig: IMConfig) => {
        const getUrlOfUseUtility = async (useUtility: UseUtility) => {
          return UtilityManager.getInstance().getUrlOfUseUtility(useUtility)
            .then((url) => {
              return Promise.resolve(url)
            })
        }
        const newDatasourceConfigPromise = oldConfig?.asMutable({ deep: true })?.datasourceConfig?.map(dsConfig => {
          if (dsConfig?.searchServiceType === SearchServiceType.FeatureService) {
            return Promise.resolve(dsConfig)
          } else {
            return getUrlOfUseUtility(dsConfig?.useUtility).then(url => {
              return loadArcGISJSAPIModules(['esri/request']).then(modules => {
                const [esriRequest] = modules
                return esriRequest(url, {
                  query: {
                    f: 'json'
                  },
                  responseType: 'json'
                }).then(res => {
                  const result = res?.data || {}
                  if (result?.capabilities) {
                    const capabilitiesArr = result?.capabilities?.split(',') || []
                    const isSupportSuggest = capabilitiesArr?.includes('Suggest')
                    dsConfig.isSupportSuggest = isSupportSuggest
                    return Promise.resolve(dsConfig)
                  } else {
                    return Promise.resolve(dsConfig)
                  }
                })
              })
            })
          }
        })
        const newDatasourceConfig = newDatasourceConfigPromise ? await Promise.all(newDatasourceConfigPromise) : []
        return oldConfig.setIn(['datasourceConfig'], newDatasourceConfig)
      }
    }
  ]
}

export const versionManager = new VersionManager()
