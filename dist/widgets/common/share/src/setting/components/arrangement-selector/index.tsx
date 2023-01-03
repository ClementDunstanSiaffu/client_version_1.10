/** @jsx jsx */
import { jsx, classNames, React } from 'jimu-core'
import { hooks, Button, Icon, Label, Tooltip, defaultMessages } from 'jimu-ui'
import { useTheme } from 'jimu-theme'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { getStyle } from './style'
import nls from '../../translations/default'
import { UiMode } from '../../../config'
//assets
const icon0 = require('../../assets/style0.svg')
const icon1 = require('../../assets/style1.svg')

interface Props {
  uiMode: UiMode
  onChanged: ((uiMode: UiMode) => void)
  // 508
  id: string
}

export const ArrangementSelector = React.memo((props: Props) => {
  const translate = hooks.useTranslate(nls, defaultMessages)
  const theme = useTheme()

  const shareTypes = translate('shareType')
  const popup = translate('popup')
  const inline = translate('inline')
  const popupDes = translate('popupDes')
  const inlineDes = translate('inlineDes')
  // 508
  const a11yDescriptionId = props.id + '-uimode-description'
  const a11yUIMode0Id = props.id + '-uimode-0'
  const a11yUIMode1Id = props.id + '-uimode-1'
  return (
    <SettingSection title={shareTypes} role='group' aria-label={shareTypes} css={getStyle(theme)}>
      <SettingRow>
        <div className='d-flex w-100 justify-content-between align-items-start ui-mode-card-chooser'>
          <Label className='d-flex flex-column ui-mode-card-wapper'>
            <Tooltip key={UiMode.Popup} title={popupDes} placement='bottom'>
              <Button icon className={classNames('w-100 ui-mode-card', { active: (props.uiMode === UiMode.Popup) })}
                onClick={() => props.onChanged(UiMode.Popup)}
                aria-labelledby={a11yUIMode0Id} aria-describedby={a11yDescriptionId}>
                <Icon width={92} height={76} icon={icon0} autoFlip />
              </Button>
            </Tooltip>
            <div id={a11yUIMode0Id} className='mx-1 text-break ui-mode-label'>{popup}</div>
          </Label>

          <Label className='d-flex flex-column ui-mode-card-wapper'>
            <Tooltip key={UiMode.Inline} title={inlineDes} placement='bottom'>
              <Button icon className={classNames('w-100 ui-mode-card', { active: (props.uiMode === UiMode.Inline) })}
                onClick={() => props.onChanged(UiMode.Inline)}
                aria-labelledby={a11yUIMode1Id} aria-describedby={a11yDescriptionId}>
                <Icon width={92} height={76} icon={icon1} autoFlip />
              </Button>
            </Tooltip>
            <div id={a11yUIMode1Id} className='mx-1 text-break ui-mode-label'>{inline}</div>
          </Label>
          {/* <div className="ui-mode-card-wapper">
              UiMode.Slide)} id="uimode-2"
            </div> */}
        </div>
      </SettingRow>
    </SettingSection>
  )
})
