/** @jsx jsx */
import { React, jsx, Immutable, defaultMessages as jimucoreMessages, urlUtils, moduleLoader } from 'jimu-core'
import { AllWidgetSettingProps, builderAppSync } from 'jimu-for-builder'
import { Button, defaultMessages as jimuiMessages, hooks, Icon, Label, NumericInput, Radio, Switch, Tooltip } from 'jimu-ui'
import { MapWidgetSelector, SettingRow, SettingSection, SidePopper } from 'jimu-ui/advanced/setting-components'
import { CoordinateConfig, DisplayOrderType, ElevationUnitType, IMConfig, WidgetStyleType } from '../config'
import defaultMessages from './translations/default'
import { List, TreeItemActionType } from 'jimu-ui/basic/list-tree'
import CloseOutlined from 'jimu-icons/svg/outlined/editor/close.svg'
import { SystemConfig } from './system-config'
import { Fragment } from 'react'
import { ClickOutlined } from 'jimu-icons/outlined/application/click'
import { getSettingStyle } from './style'
import { JimuMapView, JimuMapViewComponent, JimuMapViewGroup } from 'jimu-arcgis'

const { useState, useEffect, useRef } = React
const coordinateSystemDefault = {
  id: '',
  name: '',
  wkid: '',
  displayUnit: '',
  elevationUnit: ElevationUnitType.metric,
  datumWkid: '',
  datumName: ''
}

type SettingProps = AllWidgetSettingProps<IMConfig>

const Setting = (props: SettingProps): React.ReactElement => {
  const {
    id,
    theme,
    onSettingChange,
    config: propConfig,
    useMapWidgetIds
  } = props
  const { coordinateSystem, showSeparators, coordinateDecimal, altitudeDecimal, displayOrder, widgetStyle, mapInfo, mapInfo2 } = propConfig
  const sidePopperTrigger = useRef<HTMLDivElement>(null)
  // state
  const [showLayerPanel, setShowLayerPanel] = useState(false)
  const [popperFocusNode, setPopperFocusNode] = useState<HTMLElement>(null)
  const [mapView, setMapView] = useState(undefined)
  const [viewGroup, setViewGroup] = useState<JimuMapViewGroup>(undefined)
  const [modulesLoaded, setModulesLoaded] = useState(false)
  // translate
  const translate = hooks.useTranslate(defaultMessages, jimuiMessages, jimucoreMessages)
  const selectMapWidget = translate('selectMapWidget')
  const classicType = translate('classic')
  const modernType = translate('modern')
  const outputCoorSystem = translate('outputCoorSystem')
  const newCoordinateSystem = translate('newCoordinate')
  const remove = translate('remove')
  const configureCoordinateSystem = translate('configureCoordinate')
  const displayOptions = translate('displayOptions')
  const coordinateDecimalLabel = translate('coordinateDecimal')
  const altitudeDecimalLabel = translate('altitudeDecimal')
  const showSeparatorsLabel = translate('showSeparators')
  const displayOrderLabel = translate('displayOrder')
  const loLaMode = translate('loLaMode')
  const laLoMode = translate('laLoMode')
  const selectMapTips = translate('selectMapTips')
  const widgetStyleLabel = translate('style')
  // global variabl
  const panelIndex = useRef(0)
  const wkidUtilsRef = useRef(null)

  useEffect(() => {
    const useMap = useMapWidgetIds?.length > 0
    if (useMap && !modulesLoaded) {
      moduleLoader.loadModule('jimu-core/wkid').then(module => {
        wkidUtilsRef.current = module
        setModulesLoaded(true)
      })
    }
    // eslint-disable-next-line
  }, [useMapWidgetIds])

  useEffect(() => {
    if (useMapWidgetIds && modulesLoaded) viewGroupSetMapInfo(viewGroup)
    // eslint-disable-next-line
  }, [modulesLoaded, viewGroup, useMapWidgetIds])

  const viewGroupSetMapInfo = (viewGroup: JimuMapViewGroup) => {
    if (!viewGroup) return
    const viewsKeys = Object.keys(viewGroup.jimuMapViews)
    if (viewsKeys.length > 0) {
      const { getSRLabel, getCSUnit } = wkidUtilsRef.current
      const view1 = viewGroup.jimuMapViews?.[viewsKeys[0]]?.view
      const view2 = viewGroup.jimuMapViews?.[viewsKeys[1]]?.view
      const map1Wkid = view1?.spatialReference?.wkid
      const map2Wkid = view2?.spatialReference?.wkid
      const mapId = (view1?.map as any)?.portalItem?.id
      const mapId2 = (view2?.map as any)?.portalItem?.id
      if (mapId === mapInfo?.id && mapId2 === mapInfo2?.id) return
      const mapTitle = (view1?.map as any)?.portalItem?.title
      const mapTitle2 = (view2?.map as any)?.portalItem?.title
      onMultiSettingChange({
        mapInfo: { id: mapId, title: mapTitle, wkid: map1Wkid, label: getSRLabel(map1Wkid), csUnit: getCSUnit(map1Wkid) },
        mapInfo2: { id: mapId2, title: mapTitle2, wkid: map2Wkid, label: getSRLabel(map2Wkid), csUnit: getCSUnit(map2Wkid) }
      })
    }
  }

  const onMultiSettingChange = (updateOptions: any) => {
    const currentSystem = coordinateSystem[panelIndex.current]
    if (currentSystem) {
      const newConfig = propConfig.set('mapInfo', updateOptions.mapInfo).set('mapInfo2', updateOptions.mapInfo2)
      const config = { id, config: newConfig }
      onSettingChange(config)
    }
  }

  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    onSettingChange({ id, useMapWidgetIds })
  }

  const onCloseLayerPanel = () => {
    setShowLayerPanel(false)
    panelIndex.current = 0
  }

  const setSidePopperAnchor = (index: number, newAdded: boolean = false) => {
    let node: any
    if (newAdded) {
      node = sidePopperTrigger.current.getElementsByClassName('add-table-btn')[0]
    } else {
      node = sidePopperTrigger.current.getElementsByClassName('jimu-tree-item__body')[index]
    }
    setPopperFocusNode(node)
  }

  const onShowLayerPanel = (index: number, newAdded: boolean = false) => {
    setSidePopperAnchor(index, newAdded)
    if (index === panelIndex.current) {
      setShowLayerPanel(!showLayerPanel)
    } else {
      setShowLayerPanel(true)
      panelIndex.current = index
    }
  }

  const onWkidChangeSave = (newWkid: string, crs: any) => {
    const itemsLength = coordinateSystem.length
    if (itemsLength === panelIndex.current) {
      addNewSystem(newWkid, crs)
    }
  }

  const getArrayMaxId = (): number => {
    const numbers = coordinateSystem.map(systemConfig => {
      return systemConfig.id?.split('-').reverse()[0]
    })
    return numbers.length > 0 ? Math.max.apply(null, numbers) : 0
  }

  const getNewConfigId = (): string => {
    const index =
      coordinateSystem.length > 0
        ? getArrayMaxId()
        : 0
    return `system-${index + 1}`
  }

  const addNewSystem = (newWkid: string, crs: any, elevationUnit?: ElevationUnitType) => {
    const newConfigId = getNewConfigId()
    const systemItem: CoordinateConfig = {
      id: newConfigId,
      name: crs?.name ?? newConfigId,
      wkid: newWkid,
      crs,
      displayUnit: '',
      elevationUnit: ElevationUnitType.metric,
      datumWkid: '',
      datumName: ''
    }

    const currentLayer = coordinateSystem[panelIndex.current]
    let systemItems
    if (currentLayer) {
      // update config, reset other opts for current config
      const _conf = coordinateSystem.asMutable({ deep: true })
      _conf.splice(panelIndex.current, 1, systemItem)
      systemItems = Immutable(_conf)
    } else {
      // add new config
      systemItems = coordinateSystem.concat([
        Immutable(systemItem)
      ])
    }
    onPropertyChange('coordinateSystem', systemItems)
  }

  const removeSystem = (index: number) => {
    if (panelIndex.current === index) {
      onCloseLayerPanel()
    }
    // del current filter item
    const _system = propConfig.coordinateSystem.asMutable({ deep: true })
    _system.splice(index, 1)
    onPropertyChange('coordinateSystem', _system)

    if (panelIndex.current > index) {
      panelIndex.current--
    }
    builderAppSync.publishChangeWidgetStatePropToApp({
      widgetId: id,
      propKey: 'removeLayerFlag',
      value: true
    })
  }

  const onItemUpdated = (parentItemJson, currentIndex: number) => {
    const newSystemConfigs = parentItemJson.map(item => {
      return item.itemStateDetailContent
    })
    onShowLayerPanel(currentIndex)
    onPropertyChange('coordinateSystem', newSystemConfigs)
  }

  const handleCoordinateDecimal = (valueInt: number) => {
    onPropertyChange('coordinateDecimal', valueInt)
  }

  const handleAltitudeDecimal = (valueInt: number) => {
    onPropertyChange('altitudeDecimal', valueInt)
  }

  const onPropertyChange = (name, value) => {
    if (value === propConfig[name]) return
    const newConfig = propConfig.set(name, value)
    const newProps = { id, config: newConfig }
    onSettingChange(newProps)
  }

  const multiOptionsChangeSave = (updateOptions: any) => {
    const currentSystem = coordinateSystem[panelIndex.current]
    if (currentSystem) {
      const newConfig = propConfig.setIn(['coordinateSystem', panelIndex.current.toString()], { ...currentSystem, ...updateOptions })
      const config = { id, config: newConfig }
      onSettingChange(config)
    }
  }

  const switchWidgetType = (type: WidgetStyleType) => {
    if (type !== widgetStyle) {
      onPropertyChange('widgetStyle', type)
    }
  }

  const itemsLength = coordinateSystem.length
  const useMap = useMapWidgetIds?.length > 0
  const advancedActionMap = {
    isItemFocused: (actionData, refComponent) => {
      const { itemJsons: [currentItemJson, parentArray] } = refComponent.props
      return showLayerPanel && parentArray.indexOf(currentItemJson) === panelIndex.current
    },
    overrideItemBlockInfo: ({ itemBlockInfo }, refComponent) => {
      return {
        name: TreeItemActionType.RenderOverrideItem,
        children: [{
          name: TreeItemActionType.RenderOverrideItemDroppableContainer,
          children: [{
            name: TreeItemActionType.RenderOverrideItemDraggableContainer,
            children: [{
              name: TreeItemActionType.RenderOverrideItemBody,
              children: [{
                name: TreeItemActionType.RenderOverrideItemMainLine,
                children: [{
                  name: TreeItemActionType.RenderOverrideItemDragHandle
                }, {
                  name: TreeItemActionType.RenderOverrideItemIcon,
                  autoCollapsed: true
                }, {
                  name: TreeItemActionType.RenderOverrideItemTitle
                }, {
                  name: TreeItemActionType.RenderOverrideItemCommands
                }]
              }]
            }]
          }]
        }]
      }
    }
  }

  const onActiveViewChange = (jimuMapView: JimuMapView) => {
    setMapView(jimuMapView)
  }

  const onViewGroupCreate = (viewGroup: JimuMapViewGroup) => {
    setViewGroup(viewGroup)
  }

  return (
    <div className='widget-setting-coordinates jimu-widget-setting' css={getSettingStyle(theme)}>
      <SettingSection
        title={selectMapWidget}
        role='group'
        aria-label={selectMapWidget}
      >
        <SettingRow>
          <MapWidgetSelector onSelect={onMapWidgetSelected} useMapWidgetIds={useMapWidgetIds} />
        </SettingRow>
      </SettingSection>

      {!useMap &&
        <div className='empty-placeholder w-100'>
          <div className='empty-placeholder-inner'>
            <div className='empty-placeholder-icon'><ClickOutlined size={48} /></div>
              <div
                className='empty-placeholder-text'
                id='coordinates-blank-msg'
              >
                {selectMapTips}
              </div>
          </div>
        </div>
      }

      {useMap &&
        <Fragment>
          <SettingSection
            className='arrange-style-container'
            title={widgetStyleLabel}
            role='group'
            aria-label={widgetStyleLabel}
          >
            <SettingRow className='arrange_container'>
              <Tooltip title={classicType} placement='bottom'>
                <Button
                  onClick={() => switchWidgetType(WidgetStyleType.classic)}
                  icon
                  size='sm'
                  type='tertiary'
                  active={widgetStyle === WidgetStyleType.classic}
                >
                  <Icon
                    autoFlip
                    width={109}
                    height={70}
                    icon={require('./assets/style-coordinate-classic.svg')}
                  />
                </Button>
              </Tooltip>
              <Tooltip title={modernType} placement='bottom'>
                <Button
                  onClick={() => switchWidgetType(WidgetStyleType.modern)}
                  className='ml-2'
                  icon
                  size='sm'
                  type='tertiary'
                  active={widgetStyle === WidgetStyleType.modern}
                >
                  <Icon
                    autoFlip
                    width={109}
                    height={70}
                    icon={require('./assets/style-coordinate-modern.svg')}
                  />
                </Button>
              </Tooltip>
            </SettingRow>
          </SettingSection>

          <SettingSection
            title={outputCoorSystem}
            role='group'
            aria-label={outputCoorSystem}
          >
            <div ref={sidePopperTrigger}>
              <SettingRow>
                <Button
                  className='w-100 text-dark add-table-btn'
                  type='primary'
                  onClick={() => {
                    onShowLayerPanel(itemsLength, true)
                  }}
                  title={newCoordinateSystem}
                  // aria-describedby='table-widget-empty'
                >
                  <div className='w-100 px-2 text-truncate'>
                    {newCoordinateSystem}
                  </div>
                </Button>
              </SettingRow>

              <SettingRow>
                <div className='setting-ui-unit-list w-100'>
                  {!!itemsLength &&
                    <List
                      size='sm'
                      className='setting-ui-unit-list-exsiting'
                      itemsJson={Array.from(coordinateSystem).map((item, index) => ({
                        itemStateDetailContent: item,
                        itemKey: `${index}`,
                        itemStateTitle: item.name,
                        itemStateCommands: [
                          {
                            label: remove,
                            iconProps: () => ({ icon: CloseOutlined, size: 12 }),
                            action: () => {
                              removeSystem(index)
                            }
                          }
                        ]
                      }))}
                      dndEnabled
                      onUpdateItem={(actionData, refComponent) => {
                        const { itemJsons } = refComponent.props
                        const [currentItemJson, parentItemJson] = itemJsons
                        onItemUpdated(parentItemJson, +currentItemJson.itemKey)
                      }}
                      onClickItemBody={(actionData, refComponent) => {
                        const { itemJsons: [currentItemJson] } = refComponent.props
                        onShowLayerPanel(+currentItemJson.itemKey)
                      }}
                      {...advancedActionMap}
                    />
                  }
                  {itemsLength === panelIndex.current && showLayerPanel &&
                    <List
                      size='sm'
                      className='setting-ui-unit-list-new'
                      itemsJson={[{
                        name: '......'
                      }].map((item, x) => ({
                        itemStateDetailContent: item,
                        itemKey: `${panelIndex.current}`,
                        itemStateTitle: item.name,
                        itemStateCommands: []
                      }))}
                      dndEnabled={false}
                      renderOverrideItemDetailToggle={() => '' }
                      {...advancedActionMap}
                      isItemFocused={() => true}
                    />
                  }
                </div>
              </SettingRow>
            </div>
          </SettingSection>

          <SettingSection
            title={displayOptions}
            role='group'
            aria-label={displayOptions}
          >
            <SettingRow flow='wrap' label={coordinateDecimalLabel}>
              <NumericInput
                size='sm'
                value={coordinateDecimal}
                min={0}
                max={10}
                onChange={handleCoordinateDecimal}
                aria-label={coordinateDecimalLabel}
                className='w-100'
              />
            </SettingRow>
            <SettingRow flow='wrap' label={altitudeDecimalLabel}>
              <NumericInput
                size='sm'
                value={altitudeDecimal}
                min={0}
                max={10}
                onChange={handleAltitudeDecimal}
                aria-label={altitudeDecimalLabel}
                className='w-100'
              />
            </SettingRow>
            <SettingRow label={showSeparatorsLabel}>
              <Switch
                className='can-x-switch'
                checked={showSeparators}
                data-key='showSeparators'
                onChange={evt => {
                  onPropertyChange('showSeparators', evt.target.checked)
                }}
                aria-label={showSeparatorsLabel}
              />
            </SettingRow>
            <SettingRow flow='wrap' label={displayOrderLabel}>
              <div role='radiogroup' className='mb-3'>
                <Label className='d-flex align-items-center'>
                  <Radio
                    style={{ cursor: 'pointer' }}
                    name='displayOrderType'
                    className='mr-2'
                    checked={displayOrder === DisplayOrderType.xy}
                    onChange={() => onPropertyChange('displayOrder', DisplayOrderType.xy)}
                  />
                  {loLaMode}
                </Label>
                <Label className='d-flex align-items-center'>
                  <Radio
                    style={{ cursor: 'pointer' }}
                    name='displayOrderType'
                    className='mr-2'
                    checked={displayOrder === DisplayOrderType.yx}
                    onChange={() => onPropertyChange('displayOrder', DisplayOrderType.yx)}
                  />
                  {laLoMode}
                </Label>
              </div>
            </SettingRow>
          </SettingSection>
        </Fragment>
      }

      <JimuMapViewComponent
        useMapWidgetId={useMapWidgetIds?.[0]}
        onActiveViewChange={onActiveViewChange}
        onViewGroupCreate={onViewGroupCreate}
      />
      <SidePopper
        position='right'
        title={configureCoordinateSystem}
        isOpen={showLayerPanel && !urlUtils.getAppIdPageIdFromUrl().pageId}
        toggle={onCloseLayerPanel}
        trigger={sidePopperTrigger?.current}
        backToFocusNode={popperFocusNode}
      >
        <SystemConfig
          {...(coordinateSystem.asMutable({ deep: true })[panelIndex.current] ?? coordinateSystemDefault)}
          useMapWidgetIds={useMapWidgetIds}
          theme={theme}
          multiOptionsChange={multiOptionsChangeSave}
          onWkidChangeSave={onWkidChangeSave}
          onClose={onCloseLayerPanel}
          mapView={mapView}
          viewGroup={viewGroup}
          wkidUtils={wkidUtilsRef.current}
          mapInfo={mapInfo}
          mapInfo2={mapInfo2}
        />
      </SidePopper>
    </div>
  )
}

export default Setting
