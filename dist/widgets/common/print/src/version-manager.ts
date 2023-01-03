import { BaseVersionManager, Immutable } from 'jimu-core'
import { getNewTemplateInfo } from './utils/service-util'
import { IMConfig, DEFAULT_MAP_HEIGHT, DEFAULT_MAP_WIDTH } from './config'
import { checkIsMapOnly } from './utils/utils'

class VersionManager extends BaseVersionManager {
  versions = [
    {
      version: '1.10.0',
      description: 'update layoutChoiceList of old print widget',
      upgrader: async (oldConfig: IMConfig) => {
        const useUtility = oldConfig?.useUtility

        const updateDpiAndMapSize = (template) => {
          let temp = Immutable(template)
          if (template?.exportOptions?.dpi) {
            const dpi = Number(template?.exportOptions?.dpi)
            if (dpi < 0) {
              temp = temp.setIn(['exportOptions', 'dpi'], 1)
            } else if (parseInt(dpi as any) !== dpi) {
              temp = temp.setIn(['exportOptions', 'dpi'], parseInt(dpi as any))
            }
          }

          if (template?.exportOptions?.width) {
            const width = Number(template?.exportOptions?.width)
            if (width < 1) {
              temp = temp.setIn(['exportOptions', 'width'], DEFAULT_MAP_WIDTH)
            }
          } else if (template?.layout && checkIsMapOnly(template?.layout)) {
            temp = temp.setIn(['exportOptions', 'width'], DEFAULT_MAP_WIDTH)
          }

          if (template?.exportOptions?.height) {
            const height = Number(template?.exportOptions?.height)
            if (height < 1) {
              temp = temp.setIn(['exportOptions', 'height'], DEFAULT_MAP_HEIGHT)
            }
          } else if (template?.layout && checkIsMapOnly(template?.layout)) {
            temp = temp.setIn(['exportOptions', 'height'], DEFAULT_MAP_HEIGHT)
          }

          return temp?.asMutable({ deep: true })
        }

        const updateCommonSetting = (oldConfig) => {
          if (oldConfig?.commonSetting?.exportOptions?.dpi) {
            return oldConfig.setIn(['commonSetting'], updateDpiAndMapSize(oldConfig.commonSetting))
          } else {
            return oldConfig
          }
        }

        oldConfig = updateCommonSetting(oldConfig)

        //update printCustomTemplate in config
        const updatePrintCustomTemplate = (oldConfig, newLayoutChoiceList) => {
          const printCustomTemplate = oldConfig?.printCustomTemplate?.asMutable({ deep: true }) || []
          if (printCustomTemplate) {
            return printCustomTemplate?.map(temp => {
              if (!temp?.mapFrameSize) {
                const currentLayout = newLayoutChoiceList?.filter(item => item?.layout === temp?.layout)?.[0]
                const newLayoutInfo = {
                  mapFrameSize: currentLayout?.mapFrameSize,
                  mapFrameUnit: currentLayout?.mapFrameUnit,
                  hasAuthorText: currentLayout?.hasAuthorText,
                  hasCopyrightText: currentLayout?.hasCopyrightText,
                  hasLegend: currentLayout?.hasLegend,
                  hasTitleText: currentLayout?.hasTitleText
                }
                return {
                  ...updateDpiAndMapSize(temp),
                  ...newLayoutInfo
                }
              } else {
                return updateDpiAndMapSize(temp)
              }
            })
          } else {
            return printCustomTemplate
          }
        }

        if (useUtility) {
          const newConfig = await getNewTemplateInfo(useUtility, oldConfig)
          if (newConfig?.layoutChoiceList) {
            const printCustomTemplate = updatePrintCustomTemplate(oldConfig, newConfig?.layoutChoiceList)
            return oldConfig.setIn(['layoutChoiceList'], newConfig?.layoutChoiceList).set('printCustomTemplate', printCustomTemplate)
          } else {
            return oldConfig
          }
        } else {
          return oldConfig
        }
      }
    }
  ]
}

export const versionManager = new VersionManager()
