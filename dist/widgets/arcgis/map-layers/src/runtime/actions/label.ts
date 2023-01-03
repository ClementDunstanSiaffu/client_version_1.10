// import {MessageManager, ExtentChangeMessage, MessageType} from 'jimu-core';
import Action from './action'
import LayerList from '../widget'

export default class Leabel extends Action {
  titleShow: string
  titleHide: string

  constructor (widget: LayerList, titleShow: string, titleHide: string) {
    super()
    this.id = 'label'
    this.className = 'esri-icon-labels label-action-title'
    this.group = 0
    this.widget = widget
    this.titleShow = titleShow
    this.titleHide = titleHide
  }

  isValid = (layerItem): boolean => {
    this.title = layerItem.layer.labelsVisible ? this.titleHide : this.titleShow
    if (!this.useMapWidget() || !this.widget.props.config.label || !layerItem?.layer?.labelingInfo) {
      return false
    } else {
      return true
    }
  }

  execute = (layerItem): void => {
    layerItem.layer.labelsVisible = !layerItem.layer.labelsVisible
    this.updateTitle(layerItem.layer.labelsVisible)
  }

  private readonly updateTitle = (labelsVisible: boolean): void => {
    const dom = document.querySelector(`.widget-layerlist_${this.widget?.props?.id} .esri-layer-list__item-action .label-action-title`)
    const domParent = dom?.parentElement
    let domTitle
    domParent?.childNodes.forEach((childNode) => {
      // @ts-expect-error
      if (childNode.className?.indexOf('esri-layer-list__item-action-title') > -1) {
        domTitle = childNode
      }
    })
    if (domTitle) {
      domTitle.innerHTML = labelsVisible ? this.titleHide : this.titleShow
    }
  }
}
