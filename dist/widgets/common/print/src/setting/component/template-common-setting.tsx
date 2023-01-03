/** @jsx jsx */
import { React, css, jsx, esri, polished, classNames, moduleLoader, defaultMessages as jimuCoreDefaultMessage } from 'jimu-core'
import { hooks, TextInput, Radio, Button, Checkbox, NumericInput, defaultMessages as jimuUiDefaultMessage } from 'jimu-ui'
import { SettingRow, SettingCollapse } from 'jimu-ui/advanced/setting-components'
import { JimuMapView } from 'jimu-arcgis'
import defaultMessages from '../translations/default'
import { PrintExtentType, ModeType, IMPrintTemplateProperties, WKID_LINK } from '../../config'
import { ResetOutlined } from 'jimu-icons/outlined/editor/reset'
const EditIcon = require('jimu-icons/svg/outlined/editor/edit.svg')
const Sanitizer = esri.Sanitizer
const sanitizer = new Sanitizer()
const { useRef } = React
interface Props {
  id: string
  modeType: ModeType
  printTemplateProperties: IMPrintTemplateProperties
  jimuMapView: JimuMapView
  handleTemplatePropertyChange: (printTemplateProperties: IMPrintTemplateProperties) => void
}

enum SettingCollapseType {
  Title = 'TITLE',
  Extents = 'EXTENTS',
  SpatialReference = 'SPATIAL REFERENCE',
  Feature = 'FEATURE ATTRIBUTION',
  Quality = 'QUALITY',
}

const CommonTemplateSetting = (props: Props) => {
  const nls = hooks.useTranslate(defaultMessages, jimuCoreDefaultMessage, jimuUiDefaultMessage)
  const odlWkid = React.useRef(null)
  const wkidUtilsRef = useRef(null)
  const modulesLoadedRef = useRef(false)

  const STYLE = css`
    .dpi-input .input-wrapper{
      padding-right: 0;
    }
    .radio-con {
      cursor: ponter;
    }
    .use-current-map-scale svg{
      margin: 0 auto;
    }
    .enable-setting-con .jimu-widget-setting--row-label{
      margin-bottom: 0;
    }
    .wkid-describtion {
      font-size: ${polished.rem(12)};
      color: var(--dark-400);
    }
    .wkid-describtion-invalid {
      color: var(--danger-600)
    }
  `

  const { printTemplateProperties, modeType, jimuMapView, handleTemplatePropertyChange } = props
  const [settingCollapse, setSettingCollapse] = React.useState(null as SettingCollapseType)
  const [titleText, setTitleText] = React.useState(printTemplateProperties.layoutOptions?.titleText || '')
  const [wkid, setWkid] = React.useState(printTemplateProperties?.wkid)
  const [dpi, setDpi] = React.useState(printTemplateProperties?.exportOptions?.dpi)
  const [outScale, setOutScale] = React.useState(printTemplateProperties?.outScale)
  const [descriptionOfWkid, setDescriptionOfWkid] = React.useState(null)

  React.useEffect(() => {
    setTitleText(printTemplateProperties.layoutOptions?.titleText || '')
    setWkid(printTemplateProperties?.wkid)
    odlWkid.current = printTemplateProperties?.wkid
    setDpi(printTemplateProperties?.exportOptions?.dpi)
    setOutScale(printTemplateProperties?.outScale)
    if (printTemplateProperties?.wkidLabel) {
      setDescriptionOfWkid(printTemplateProperties?.wkidLabel)
    } else {
      if (wkidUtilsRef.current) {
        getSRLabelDynamic(printTemplateProperties?.wkid as number).then(label => {
          setDescriptionOfWkid(label)
        })
      }
    }
  }, [printTemplateProperties])

  const getSRLabelDynamic = async (wkid: number) => {
    if (!modulesLoadedRef.current) {
      return moduleLoader.loadModule('jimu-core/wkid').then(module => {
        wkidUtilsRef.current = module
        modulesLoadedRef.current = true
        const { getSRLabel } = wkidUtilsRef.current
        return Promise.resolve(getSRLabel(wkid))
      })
    } else {
      const { getSRLabel } = wkidUtilsRef.current
      return Promise.resolve(getSRLabel(wkid))
    }
  }

  const isValidWkidDynamic = async (wkid: number) => {
    if (!modulesLoadedRef.current) {
      return moduleLoader.loadModule('jimu-core/wkid').then(module => {
        wkidUtilsRef.current = module
        modulesLoadedRef.current = true
        const { isValidWkid } = wkidUtilsRef.current
        return Promise.resolve(isValidWkid(wkid))
      })
    } else {
      const { isValidWkid } = wkidUtilsRef.current
      return Promise.resolve(isValidWkid(wkid))
    }
  }

  const openSettingCollapse = async (settingCollapseType: SettingCollapseType) => {
    if (settingCollapseType === SettingCollapseType.SpatialReference && !printTemplateProperties?.wkidLabel) {
      //When expanding the Output spatial reference, if the WKID util has not been loaded, you need to load the WKID util first.
      const wkidLabel = await getSRLabelDynamic(printTemplateProperties?.wkid as number)
      setDescriptionOfWkid(wkidLabel)
    }
    setSettingCollapse(settingCollapseType)
  }

  const closeSettingCollapse = () => {
    setSettingCollapse(null)
  }

  const handlePrintTitleChange = (event) => {
    const value = event?.target?.value
    setTitleText(value)
  }

  const handlePrintTitleAccept = (value) => {
    const newPrintTemplateProperties = printTemplateProperties.setIn(['layoutOptions', 'titleText'], value)
    handleTemplatePropertyChange(newPrintTemplateProperties)
  }

  const handleWKIDChange = async (value) => {
    setWkid(value)
    const isValid = await isValidWkidDynamic(value)
    if (isValid) {
      const wkidLabel = await getSRLabelDynamic(value)
      setDescriptionOfWkid(wkidLabel)
    } else {
      setDescriptionOfWkid(nls('uploadImageError'))
    }
  }

  const handleWKIDAccept = async (value) => {
    const isValid = await isValidWkidDynamic(value)
    if (!isValid) {
      setWkid(odlWkid.current)
      const oldWkidLabel = await getSRLabelDynamic(value)
      setDescriptionOfWkid(oldWkidLabel)
      return false
    }
    odlWkid.current = value
    const newPrintTemplateProperties = printTemplateProperties.setIn(['wkid'], value).set('wkidLabel', descriptionOfWkid)
    handleTemplatePropertyChange(newPrintTemplateProperties)
    const wkidLabel = await getSRLabelDynamic(value)
    setDescriptionOfWkid(wkidLabel)
  }

  const handleDPIChange = (value) => {
    if (value < 1) return false
    setDpi(parseInt(value))
  }

  const handleDPIAccept = (value) => {
    if (value < 1) return false
    const newPrintTemplateProperties = printTemplateProperties.setIn(['exportOptions', 'dpi'], parseInt(value))
    handleTemplatePropertyChange(newPrintTemplateProperties)
  }

  const handleScaleChange = (value) => {
    setOutScale(value)
  }

  const setScaleByCurrentMapScale = () => {
    if (!jimuMapView) return
    const scale = jimuMapView?.view?.scale
    const newPrintTemplateProperties = printTemplateProperties.setIn(['outScale'], scale)
    handleTemplatePropertyChange(newPrintTemplateProperties)
  }

  const handleScaleAccept = (value) => {
    const newPrintTemplateProperties = printTemplateProperties.setIn(['outScale'], value)
    handleTemplatePropertyChange(newPrintTemplateProperties)
  }

  const handlePrintExtentTypeChange = (printExtentType: PrintExtentType) => {
    let newPrintTemplateProperties = printTemplateProperties.setIn(['printExtentType'], printExtentType)
    const scale = jimuMapView ? jimuMapView?.view?.scale : 36978595.474472
    switch (printExtentType) {
      case PrintExtentType.CurrentMapExtent:
        newPrintTemplateProperties = newPrintTemplateProperties.setIn(['scalePreserved'], false)
        break
      case PrintExtentType.CurrentMapScale:
        newPrintTemplateProperties = newPrintTemplateProperties.setIn(['scalePreserved'], true)
        break
      case PrintExtentType.SetMapScale:
        newPrintTemplateProperties = newPrintTemplateProperties.setIn(['scalePreserved'], true)
        newPrintTemplateProperties = newPrintTemplateProperties.setIn(['outScale'], scale)
        break
    }
    handleTemplatePropertyChange(newPrintTemplateProperties)
  }

  const handleCheckBoxChange = (key: string) => {
    const newPrintTemplateProperties = printTemplateProperties.setIn([key], !printTemplateProperties?.[key])
    handleTemplatePropertyChange(newPrintTemplateProperties)
  }

  const handleEnableTitleChange = () => {
    let newPrintTemplateProperties = printTemplateProperties.setIn(['showLabels'], !printTemplateProperties?.showLabels)
    newPrintTemplateProperties = newPrintTemplateProperties.setIn(['enableTitle'], !printTemplateProperties?.enableTitle)
    handleTemplatePropertyChange(newPrintTemplateProperties)
  }

  const getWKIDElement = () => {
    return sanitizer.sanitize(
      nls('wellKnownId', { wkid: `<a target="_blank" href="${WKID_LINK}">WKID</a>` })
    )
  }

  const checkIsValidWkid = (wkid) => {
    if (wkidUtilsRef.current) {
      const { isValidWkid } = wkidUtilsRef.current
      return isValidWkid(wkid)
    } else {
      return true
    }
  }

  return (
    <div css={STYLE}>
      <SettingRow label={nls('setDefaults')} flow='wrap'/>
      {/* Print title */}
      <SettingCollapse
        label={nls('printTitle')}
        isOpen={settingCollapse === SettingCollapseType.Title}
        onRequestOpen={() => { openSettingCollapse(SettingCollapseType.Title) }}
        onRequestClose={closeSettingCollapse}
        role='group'
        aria-label={nls('printTitle')}
        rightIcon={EditIcon}
        type='primary'
        className={settingCollapse === SettingCollapseType.Title && 'active-collapse'}
      >
        <SettingRow className='mt-2'>
          <TextInput
            size='sm'
            className='search-placeholder w-100'
            placeholder={nls('printTitle')}
            value={titleText}
            onAcceptValue={handlePrintTitleAccept}
            onChange={handlePrintTitleChange}
            aria-label={nls('printTitle')}
          />
        </SettingRow>
      </SettingCollapse>

      {/* Map print extents */}
      <SettingCollapse
        label={nls('mapPrintingExtents')}
        isOpen={settingCollapse === SettingCollapseType.Extents}
        onRequestOpen={() => { openSettingCollapse(SettingCollapseType.Extents) }}
        onRequestClose={closeSettingCollapse}
        role='group'
        aria-label={nls('mapPrintingExtents')}
        rightIcon={EditIcon}
        type='primary'
        className={settingCollapse === SettingCollapseType.Extents && 'active-collapse'}
      >
        <SettingRow className='mt-2'>
          <div className='w-100'>
            <Button title={nls('currentMapExtent')} type='tertiary' style={{ paddingLeft: 0, paddingRight: 0 }} className='d-flex align-items-center radio-con' onClick={() => { handlePrintExtentTypeChange(PrintExtentType.CurrentMapExtent) }}>
              <Radio title={nls('currentMapExtent')} checked={printTemplateProperties?.printExtentType === PrintExtentType.CurrentMapExtent} className='mr-2'/> {nls('currentMapExtent')}
            </Button>
            <Button title={nls('currentMapScale')} type='tertiary' style={{ paddingLeft: 0, paddingRight: 0 }} className='d-flex align-items-center radio-con' onClick={() => { handlePrintExtentTypeChange(PrintExtentType.CurrentMapScale) }}>
              <Radio title={nls('currentMapScale')} checked={printTemplateProperties?.printExtentType === PrintExtentType.CurrentMapScale} className='mr-2'/> {nls('currentMapScale')}
            </Button>
            <Button title={nls('setMapScale')} type='tertiary' style={{ paddingLeft: 0, paddingRight: 0 }} className='d-flex align-items-center radio-con' onClick={() => { handlePrintExtentTypeChange(PrintExtentType.SetMapScale) }}>
              <Radio title={nls('setMapScale')} checked={printTemplateProperties?.printExtentType === PrintExtentType.SetMapScale} className='mr-2'/> {nls('setMapScale')}
            </Button>
            {printTemplateProperties?.printExtentType === PrintExtentType.SetMapScale && <div className='d-flex mt-1 align-items-center'>
              <NumericInput
                size='sm'
                className='search-placeholder flex-grow-1 dpi-input'
                value={outScale}
                onAcceptValue={handleScaleAccept}
                onChange={handleScaleChange}
                showHandlers={false}
              />
              <Button className='use-current-map-scale' size='sm' title={nls('useCurrentScale')} disabled={!jimuMapView} onClick={setScaleByCurrentMapScale}><ResetOutlined /></Button>
            </div>}
          </div>
        </SettingRow>
      </SettingCollapse>

      {/* Output spatial reference */}
      <SettingCollapse
        label={nls('outputSpatialReference')}
        isOpen={settingCollapse === SettingCollapseType.SpatialReference}
        onRequestOpen={() => { openSettingCollapse(SettingCollapseType.SpatialReference) }}
        onRequestClose={closeSettingCollapse}
        role='group'
        type='primary'
        aria-label={nls('outputSpatialReference')}
        rightIcon={EditIcon}
        className={settingCollapse === SettingCollapseType.SpatialReference && 'active-collapse'}
      >
        <SettingRow flow='wrap' label={<div className='flex-grow-1' dangerouslySetInnerHTML={{ __html: getWKIDElement() }}></div>} className='mt-2'>
          <NumericInput
            size='sm'
            className='search-placeholder w-100'
            value={wkid}
            onAcceptValue={handleWKIDAccept}
            onChange={handleWKIDChange}
            showHandlers={false}
            aria-label={nls('outputSpatialReference')}
          />
          <div className={classNames('text-truncate mt-1 wkid-describtion', { 'wkid-describtion-invalid': !checkIsValidWkid(Number(wkid)) })} title={descriptionOfWkid} aria-label={descriptionOfWkid}>{descriptionOfWkid}</div>
        </SettingRow>
      </SettingCollapse>

      {/* Print quality */}
      <SettingCollapse
        label={nls('printQuality')}
        isOpen={settingCollapse === SettingCollapseType.Quality}
        onRequestOpen={() => { openSettingCollapse(SettingCollapseType.Quality) }}
        onRequestClose={closeSettingCollapse}
        role='group'
        aria-label={nls('printQuality')}
        type='primary'
        rightIcon={EditIcon}
        className={settingCollapse === SettingCollapseType.Quality && 'active-collapse'}
      >
        <SettingRow className='mt-2'>
          <div className='d-flex align-items-center w-100'>
            <NumericInput
              size='sm'
              className='search-placeholder flex-grow-1 dpi-input'
              placeholder={nls('printQuality')}
              value={dpi}
              onAcceptValue={handleDPIAccept}
              onChange={handleDPIChange}
              showHandlers={false}
              aria-label={nls('printQuality')}
            />
            <Button disabled size='sm' title='DPI'>DPI</Button>
          </div>
        </SettingRow>
      </SettingCollapse>

      {/* Print quality */}
      <SettingCollapse
        label={nls('featureAttributes')}
        isOpen={settingCollapse === SettingCollapseType.Feature}
        onRequestOpen={() => { openSettingCollapse(SettingCollapseType.Feature) }}
        onRequestClose={closeSettingCollapse}
        role='group'
        type='primary'
        aria-label={nls('featureAttributes')}
        rightIcon={EditIcon}
        className={settingCollapse === SettingCollapseType.Feature && 'active-collapse'}
      >
        <SettingRow className='mt-2'>
          <Button
            title={nls('includeAttributes')}
            className='d-flex w-100 align-items-center'
            type='tertiary'
            style={{ paddingLeft: 0, paddingRight: 0 }}
            aria-label={nls('includeAttributes')}
            onClick={() => { handleCheckBoxChange('forceFeatureAttributes') }}
          >
            <Checkbox
              title={nls('includeAttributes')}
              className='lock-item-ratio'
              data-field='forceFeatureAttributes'
              checked={printTemplateProperties?.forceFeatureAttributes || false}
            />
            <div className='lock-item-ratio-label text-left ml-2'>
              {nls('includeAttributes')}
            </div>
          </Button>
        </SettingRow>
      </SettingCollapse>

      {/* Select editable setting */}
      {modeType === ModeType.Classic && <SettingRow className='mt-3 enable-setting-con' flow='wrap' role='group' aria-label={nls('selectEditableSettings')} label={nls('selectEditableSettings')}>
        <div className='w-100'>
          <Button
            title={nls('printTitle')}
            className='d-flex w-100 align-items-center text-wrap'
            type='tertiary'
            style={{ paddingLeft: 0, paddingRight: 0 }}
            onClick={() => { handleEnableTitleChange() }}
          >
            <Checkbox
              title={nls('printTitle')}
              className='lock-item-ratio'
              data-field='enableTitle'
              checked={printTemplateProperties?.enableTitle || false}
            />
            <div className='lock-item-ratio-label text-left ml-2'>
              {nls('printTitle')}
            </div>
          </Button>
          <Button
            title={nls('mapPrintingExtents')}
            className='d-flex w-100 align-items-center text-wrap'
            type='tertiary'
            style={{ paddingLeft: 0, paddingRight: 0 }}
            onClick={() => { handleCheckBoxChange('enableMapPrintExtents') }}
          >
            <Checkbox
              title={nls('mapPrintingExtents')}
              className='lock-item-ratio'
              data-field='enableMapPrintExtents'
              checked={printTemplateProperties?.enableMapPrintExtents || false}
            />
            <div className='lock-item-ratio-label text-left ml-2'>
              {nls('mapPrintingExtents')}
            </div>
          </Button>
          <Button
            title={nls('outputSpatialReference')}
            className='d-flex w-100 align-items-center text-wrap'
            type='tertiary'
            style={{ paddingLeft: 0, paddingRight: 0 }}
            onClick={() => { handleCheckBoxChange('enableOutputSpatialReference') }}
          >
            <Checkbox
              title={nls('outputSpatialReference')}
              className='lock-item-ratio'
              data-field='enableOutputSpatialReference'
              checked={printTemplateProperties?.enableOutputSpatialReference || false}
            />
            <div className='lock-item-ratio-label text-left ml-2'>
              {nls('outputSpatialReference')}
            </div>
          </Button>
          <Button
            title={nls('printQuality')}
            className='d-flex w-100 align-items-center text-wrap'
            type='tertiary'
            style={{ paddingLeft: 0, paddingRight: 0 }}
            onClick={() => { handleCheckBoxChange('enableQuality') }}
          >
            <Checkbox
              title={nls('printQuality')}
              className='lock-item-ratio'
              data-field='enableQuality'
              checked={printTemplateProperties?.enableQuality || false}
            />
            <div className='lock-item-ratio-label text-left ml-2'>
              {nls('printQuality')}
            </div>
          </Button>
          <Button
            title={nls('featureAttributes')}
            className='d-flex w-100 align-items-center text-wrap'
            type='tertiary'
            style={{ paddingLeft: 0, paddingRight: 0 }}
            onClick={() => { handleCheckBoxChange('enableFeatureAttribution') }}
          >
            <Checkbox
              title={nls('featureAttributes')}
              className='lock-item-ratio'
              data-field='enableFeatureAttribution'
              checked={printTemplateProperties?.enableFeatureAttribution || false}
            />
            <div className='lock-item-ratio-label text-left ml-2'>
              {nls('featureAttributes')}
            </div>
          </Button>
        </div>
      </SettingRow>}
    </div>
  )
}

export default CommonTemplateSetting
