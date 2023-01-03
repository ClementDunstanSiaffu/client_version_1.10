/** @jsx jsx */
import { IMUseUtility, UtilityManager } from 'jimu-core'
import { PrintServiceType, PrintTemplateProperties, CIMMarkerNorthArrow, IMConfig } from '../config'
import { getPrintTaskInfo, initDefaultTemplates } from '../setting/util/util'
import { initTemplateLayout, getUrlOfUseUtility, getPrintTemplateTaskInfo, getKeyOfNorthArrow } from './utils'

export const getNewTemplateInfo = async (utility: IMUseUtility, config: IMConfig) => {
  return getUrlOfUseUtility(utility).then(url => {
    return getPrintTemplate(url, utility, config)
  })
}

const getPrintTemplate = (serviceUrl: string, utility: IMUseUtility, config: IMConfig) => {
  const printServiceType = getPrintServiceType(utility?.utilityId)
  return getPrintTaskInfo(serviceUrl).then(printTask => {
    let newConfig = config
    const templates = printTask?.templates ? initDefaultTemplates(printTask?.templates, printServiceType, config?.printTemplateType) : []
    const newTemplates = templates?.map(temp => {
      temp?.layout && (temp.layout = initTemplateLayout(temp?.layout) as any)
      temp?.format && (temp.format = temp?.format?.toLowerCase() as any)
      return temp
    })

    return getPrintTemplateTaskInfo(serviceUrl).then(templateTaskInfo => {
      const template = addDefaultMapSizeInTemplate(templateTaskInfo, newTemplates)
      const layoutChoiceList = getLayoutChoiceList(printTask?.templates, template)
      newConfig = newConfig.set('printCustomTemplate', template)
        .set('useUtility', utility)
        .set('formatList', printTask?.formatList)
        .set('defaultFormat', printTask?.defaultFormat)
        .set('layoutChoiceList', layoutChoiceList)
      return Promise.resolve(newConfig)
    })
  })
}

const addDefaultMapSizeInTemplate = (templateTaskInfo, templates: PrintTemplateProperties[]) => {
  const newTemplates = templates?.map(temp => {
    let info
    templateTaskInfo.forEach(item => {
      if (temp.label === item.layoutTemplate) {
        info = item
      }
    })
    if (info?.webMapFrameSize) {
      temp.mapFrameSize = info?.webMapFrameSize
      temp.mapFrameUnit = info?.pageUnits
    }
    const customTextElementEnableList = info?.layoutOptions?.customTextElements?.map(item => {
      const customTextElementsEnable = {}
      for (const key in item) {
        customTextElementsEnable[key] = true
      }
      return customTextElementsEnable
    })

    const elementOverrides = getElementOverrides(info?.layoutOptions)

    temp.mapFrameUnit = info?.pageUnits
    temp.hasAuthorText = info?.layoutOptions?.hasAuthorText
    temp.hasCopyrightText = info?.layoutOptions?.hasCopyrightText
    temp.hasLegend = info?.layoutOptions?.hasLegend
    temp.hasTitleText = info?.layoutOptions?.hasTitleText
    temp.selectedFormatList = [temp?.format]
    temp.layoutOptions.customTextElements = info?.layoutOptions?.customTextElements || []
    temp.layoutOptions.elementOverrides = elementOverrides
    temp.customTextElementEnableList = customTextElementEnableList || []
    temp.enableNorthArrow = !!getKeyOfNorthArrow(elementOverrides)
    return temp
  })

  return newTemplates
}

const getElementOverrides = (layoutOptions) => {
  const mapSurroundInfos = layoutOptions?.mapSurroundInfos || []
  const defaultElementOverridesItem = mapSurroundInfos?.find(info => info.type === `${CIMMarkerNorthArrow}`)
  const defaultElementOverrides = {}
  if (defaultElementOverridesItem) {
    defaultElementOverrides[defaultElementOverridesItem?.name] = defaultElementOverridesItem
  }
  const elementOverrides = layoutOptions?.elementOverrides || defaultElementOverrides
  return elementOverrides
}

const getLayoutChoiceList = (templates, printCustomTemplate) => {
  const layoutChoiceList = templates?.map(info => {
    info.layoutTemplate = initTemplateLayout(info?.layout)
    printCustomTemplate?.forEach(temp => {
      if (info?.layout === temp?.layout) {
        info.mapFrameSize = temp?.mapFrameSize
        info.mapFrameUnit = temp?.mapFrameUnit
        info.hasAuthorText = temp?.hasAuthorText
        info.hasCopyrightText = temp?.hasCopyrightText
        info.hasLegend = temp?.hasLegend
        info.hasTitleText = temp?.hasTitleText
      }
    })
    return info
  }) || []
  return layoutChoiceList
}

const getPrintServiceType = (utilityId: string): PrintServiceType => {
  const utilityJson = UtilityManager.getInstance().getUtilityJson(utilityId)
  const printServiceType = utilityJson?.source === 'org' ? PrintServiceType.OrganizationService : PrintServiceType.Customize
  return printServiceType
}
