/** @jsx jsx */
import { React, jsx, css, polished, Immutable, IMUseUtility, UseUtility, ImmutableArray, SupportedUtilityType } from 'jimu-core'
import { hooks, defaultMessages as jimuiDefaultMessages } from 'jimu-ui'
import { SettingChangeFunction } from 'jimu-for-builder'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { UtilitySelector } from 'jimu-ui/advanced/utility-selector'
import defaultMessages from '../translations/default'
import { IMConfig } from '../../config'
import { ClickOutlined } from 'jimu-icons/outlined/application/click'
import { getNewTemplateInfo } from '../../utils/service-util'
const { useState, useEffect, useRef } = React
interface Props {
  config: IMConfig
  id: string
  showLoading: boolean
  onSettingChange: SettingChangeFunction
  toggleLoading: (isShowLoading: boolean) => void
}

const PrintServiceSelect = (props: Props) => {
  const isRemoveServiceRef = useRef(false)
  const nls = hooks.useTranslate(defaultMessages, jimuiDefaultMessages)
  const { config, id, showLoading, onSettingChange, toggleLoading } = props

  const [useUtility, setUseUtility] = useState(config?.useUtility)

  const STYLE = css`
    &>div>div {
      padding-left: 0!important;
      padding-right: 0!important;
    }
    .utility-placeholder {
      & {
        color: var(--dark-200);
      }
      p {
        color: var(--dark-500);
        font-size: ${polished.rem(14)};
        margin: ${polished.rem(16)} auto 0;
        line-height: ${polished.rem(19)};
        width: ${polished.rem(228)};
      }
    }
    .utility-list {
      margin-bottom: 0 !important;
    }
  }`

  useEffect(() => {
    setUseUtility(config?.useUtility)
  }, [config])

  const handleUtilityChange = (utilities: ImmutableArray<UseUtility>) => {
    const utility = utilities[0]
    setUseUtility(utility)
    if (!utility) {
      isRemoveServiceRef.current = true
      removeUtility()
    } else {
      isRemoveServiceRef.current = false
      addUseUtility(utility)
    }
  }

  const removeUtility = () => {
    let newConfig = config
    newConfig = newConfig.set('useUtility', null)
    toggleLoading(false)
    onSettingChange({
      id: id,
      config: newConfig,
      useUtilities: []
    })
  }

  const addUseUtility = async (utility: IMUseUtility) => {
    toggleLoading(true)
    getNewTemplateInfo(utility, config).then(newConfig => {
      if (isRemoveServiceRef.current) {
        return false
      }
      toggleLoading(false)
      onSettingChange({
        id: id,
        config: newConfig,
        useUtilities: utility ? [utility] : []
      })
    }, err => {
      removeUtility()
      toggleLoading(false)
    })
  }

  const renderUseUtilityPlaceholder = () => {
    return (
      <div className='w-100 mt-3 text-center utility-placeholder'>
        <div className="text-center w-100">
          <ClickOutlined size={48}/>
          <p className='text-Secondary' id='list-empty-tip' title={nls('utilityPlaceholder')}>
            {nls('utilityPlaceholder')}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div css={STYLE}>
      <SettingRow flow='wrap' label={nls('printService')} role='group' aria-label={nls('printService')}>
        <UtilitySelector
          useUtilities={Immutable(useUtility ? [useUtility] : [])}
          onChange={handleUtilityChange}
          showRemove
          closePopupOnSelect
          type={SupportedUtilityType.Printing}
        />
      </SettingRow>
      {(!config?.useUtility && !showLoading) && renderUseUtilityPlaceholder()}
    </div>
  )
}

export default PrintServiceSelect
