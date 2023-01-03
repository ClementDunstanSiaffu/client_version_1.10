/** @jsx jsx */
import { React, jsx, classNames } from 'jimu-core'
import { hooks, Label, Button, Icon, defaultMessages as jimuUIMessages } from 'jimu-ui'
import { SettingRow, SettingSection } from 'jimu-ui/advanced/setting-components'
import defaultMessages from '../translations/default'
import { PanelLayout } from '../../config'

export interface Props {
  widgetId: string
  layout?: PanelLayout
  onChange: (layout: PanelLayout) => void
}

export const LayoutsContainer = React.memo((props: Props) => {
  const translate = hooks.useTranslate(defaultMessages, jimuUIMessages)

  const a11yDescriptionId = props.widgetId + '-uimode-description'
  const a11yUIMode0Id = props.widgetId + '-uimode-0'
  const a11yUIMode1Id = props.widgetId + '-uimode-1'
  return (
    <React.Fragment>
      { /* Arrangement */}
      <SettingSection title={translate('controllerStyle')}>
        <SettingRow>
          <div className='ui-mode-card-chooser'>
            { /* Bar */}
            <Label className='d-flex flex-column ui-mode-card-wapper'>
              <Button icon className={classNames('ui-mode-card', { active: (props.layout === PanelLayout.Horizontal) })}
                onClick={() => props.onChange(PanelLayout.Horizontal)}
                aria-labelledby={a11yUIMode0Id} aria-describedby={a11yDescriptionId}>
                <Icon width={92} height={56} icon={require('../assets/style0.svg')} autoFlip />
              </Button>
              <div id={a11yUIMode0Id} className='mx-1 text-break ui-mode-label'>{translate('bar')}</div>
            </Label>

            <div className='ui-mode-card-separator' />

            { /* Palette */}
            <Label className='d-flex flex-column ui-mode-card-wapper'>
              <Button icon className={classNames('ui-mode-card', { active: (props.layout === PanelLayout.Palette) })}
                onClick={() => props.onChange(PanelLayout.Palette)}
                aria-labelledby={a11yUIMode1Id} aria-describedby={a11yDescriptionId}>
                <Icon width={92} height={56} icon={require('../assets/style1.svg')} autoFlip />
              </Button>
              <div id={a11yUIMode1Id} className='mx-1 text-break ui-mode-label'>{translate('palette')}</div>
            </Label>
          </div>
        </SettingRow>
      </SettingSection>
    </React.Fragment>
  )
})
