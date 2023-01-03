/** @jsx jsx */
import { React, jsx, css, polished, ImmutableArray, Immutable, classNames, ReactRedux, IMState } from 'jimu-core'
import { Button, hooks, Popper, getFallbackPlacementsModifier, Select, Option, Icon, SVG, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import { JimuMapView } from 'jimu-arcgis'
import { IMConfig, PrintTemplateProperties, IMPrintTemplateProperties, IMPrintResultListItemTyle, PrintResultState, MapView } from '../../../config'
import defaultMessage from '../../translations/default'
import { WidgetPrintOutlined } from 'jimu-icons/outlined/brand/widget-print'
import { CloseOutlined } from 'jimu-icons/outlined/editor/close'
import { print } from '../../utils/print-service'
import { checkIsTemplateExist, getIndexByTemplateId, mergeTemplateSetting } from '../../../utils/utils'
import SettingRow from '../setting-row'
import PrintResult from './result'
import PreviewExtent from '../preview-extents'
import { getPreviewLayerId, initTemplateProperties } from '../../utils/utils'
const { useState, useRef, useEffect } = React
const { useSelector } = ReactRedux

interface Props {
  id: string
  errorTip: string
  config: IMConfig
  jimuMapView: JimuMapView
  templateList: ImmutableArray<PrintTemplateProperties>
}

const CompactPrint = (props: Props) => {
  const { config, templateList, jimuMapView, errorTip, id } = props
  const nls = hooks.useTranslate(defaultMessage, jimuiDefaultMessage)
  const printButtonRef = useRef<HTMLButtonElement>(null)
  const widgetJson = useSelector((state: IMState) => state?.appConfig?.widgets?.[id])
  const STYLE = css`
    .compact-con {
      padding: 0;
      svg {
        margin: 0 auto;
      }
      .compact-icon {
        color: ${(widgetJson?.icon as any)?.properties?.color};
      }
    }
  `

  const POPPER_STYLE = css`
    & {
      padding: ${polished.rem(12)};
      width: ${polished.rem(320)};
      height: ${polished.rem(155)};
    }
    .close-con button{
      padding: 0;
    }
    .result-list-con button {
      padding: 0;
    }
    .compact-preview-con {
      width: 0;
    }
  `
  const MODIFIERS = [
    {
      name: 'preventOverflow',
      options: {
        altAxis: true
      }
    },
    getFallbackPlacementsModifier(['left-start', 'left-end'], true)
  ]

  const [openPopper, setOpenPopper] = useState(false)
  const [showResult, setShowReult] = useState(false)
  const [printResult, setPrintResult] = useState(null as IMPrintResultListItemTyle)
  const [selectedTemplate, setSelectedTemplate] = useState(null as IMPrintTemplateProperties)

  useEffect(() => {
    setSelectedTemplateByIndex(0)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (!selectedTemplate || (!checkIsTemplateExist(templateList, selectedTemplate?.templateId))) {
      setSelectedTemplateByIndex(0)
    }
    if (selectedTemplate && checkIsTemplateExist(templateList, selectedTemplate?.templateId)) {
      const index = getIndexByTemplateId(templateList?.asMutable({ deep: true }), selectedTemplate?.templateId)
      setSelectedTemplateByIndex(index)
    }
    // eslint-disable-next-line
  }, [templateList, config])

  const setSelectedTemplateByIndex = (index: number) => {
    if (templateList?.length === 0) return false
    let template = templateList?.[index]
    if (template?.overrideCommonSetting) {
      template = mergeTemplateSetting(config?.commonSetting, template)
    } else {
      template = mergeTemplateSetting(template, config?.commonSetting)
    }
    setSelectedTemplate(template)
  }

  const togglePopper = () => {
    setOpenPopper(!openPopper)
  }

  const toggleResultPanel = () => {
    setShowReult(!showResult)
  }

  const handleTemplateChange = (e) => {
    const templateId = e?.target?.value
    const index = getIndexByTemplateId(templateList?.asMutable({ deep: true }), templateId)
    setSelectedTemplateByIndex(index)
  }

  const restPrint = () => {
    setPrintResult(null)
    setShowReult(false)
  }

  const togglePreviewLayer = (visible: boolean) => {
    const layerId = getPreviewLayerId(id, jimuMapView.id)
    const graphicsLayer = jimuMapView.view.map.findLayerById(layerId)
    if (graphicsLayer) {
      graphicsLayer.visible = visible
    }
  }

  const confirmPrint = async () => {
    const printResult = {
      resultId: selectedTemplate?.templateId,
      url: null,
      title: selectedTemplate?.layoutOptions?.titleText,
      state: PrintResultState.Loading
    }
    setPrintResult(Immutable(printResult))
    toggleResultPanel()
    togglePreviewLayer(false)
    print({
      useUtility: config?.useUtility,
      mapView: jimuMapView?.view as MapView,
      printTemplateProperties: await initTemplateProperties(selectedTemplate, jimuMapView)
    }).then(res => {
      printResult.url = res?.url
      printResult.state = PrintResultState.Success
      togglePreviewLayer(true)
      setPrintResult(Immutable(printResult))
    }, printError => {
      togglePreviewLayer(true)
      printResult.state = PrintResultState.Error
      setPrintResult(Immutable(printResult))
    })
  }

  const renderTemplateSelect = () => {
    return (
      <div className='d-flex flex-column'>
        <SettingRow flowWrap className='flex-grow-1' label={nls('template')}>
          <Select
            value={selectedTemplate?.templateId}
            onChange={handleTemplateChange}
            size='sm'
            className='scalebar-unit'
            aria-label={nls('template')}
          >
            {templateList?.map((template, index) => {
              return (<Option
                key={template.templateId}
                value={template.templateId}
                title={template.label}
              >
                {template.label}
              </Option>)
            })}
          </Select>
        </SettingRow>
        <div className='print-button-con d-flex align-items-center mt-2'>
          <PreviewExtent
            className='flex-grow-1 compact-preview-con'
            id={id}
            jimuMapView={jimuMapView}
            scale={selectedTemplate?.outScale}
            selectedTemplate={selectedTemplate}
            scalebarUnit={selectedTemplate?.layoutOptions?.scalebarUnit}
            printExtentType={selectedTemplate?.printExtentType}
          />
          <Button className='print-button text-truncate ml-1' type='primary' onClick={confirmPrint} title={nls('_widgetLabel')}>{nls('_widgetLabel')}</Button>
        </div>
      </div>
    )
  }

  const checkShowPlaceholder = () => {
    return !jimuMapView || !config?.useUtility
  }

  const renderPrintIcon = () => {
    const icon = widgetJson?.icon
    if (!icon) {
      return (<WidgetPrintOutlined/>)
    }
    if (typeof (icon) === 'string') {
      return (<SVG src={icon}/>)
    } else {
      return (<Icon className='compact-icon' icon={icon?.svg }/>)
    }
  }

  return (
    <div className='w-100 h-100' css={STYLE}>
      <Button className='w-100 h-100 compact-con' type='tertiary' ref={printButtonRef} title={nls('_widgetLabel')} onClick={togglePopper}>
        {renderPrintIcon()}
      </Button>
      <Popper
        open={openPopper}
        disableResize
        placement='bottom'
        reference={printButtonRef}
        modifiers={MODIFIERS}
        showArrow
        toggle={togglePopper}
        trapFocus={false}
        autoFocus={false}
        css={POPPER_STYLE}
      >
        {!checkShowPlaceholder() && <div className='d-flex flex-column w-100 h-100'>
          <div className='text-right close-con'>
            <Button className='print-button' type='tertiary' title={nls('closeTour')} onClick={togglePopper}>
              <CloseOutlined/>
            </Button>
          </div>
          <div className='flex-grow-1'>
            <div className={ classNames('w-100 h-100', { 'sr-only': showResult })}>
              {renderTemplateSelect()}
            </div>
            {showResult && <PrintResult prinResult={printResult} restPrint={restPrint}/>}
          </div>
        </div>}
        {checkShowPlaceholder() && <div>{errorTip}</div>}
      </Popper>
    </div>
  )
}

export default CompactPrint
