import { React, ImmutableObject } from 'jimu-core'
import {
  NumericInput,
  hooks,
  defaultMessages as jimuUiDefaultMessage
} from 'jimu-ui'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import defaultMessages from '../../../../translations/default'
import { CategoryFormatOptions } from 'jimu-ui/advanced/chart'
import { styled } from 'jimu-theme'

export interface LabelFormatSettingProps {
  value: ImmutableObject<CategoryFormatOptions>
  onChange: (value: ImmutableObject<CategoryFormatOptions>) => void
}

const Root = styled.div`
  width: 100%;
  .jimu-widget-setting--row-label {
    color: var(--dark-400);
  }
`

export const LabelFormatSetting = (props: LabelFormatSettingProps): React.ReactElement => {
  const { value, onChange } = props

  const characterLimit = value?.characterLimit ?? ''
  const translate = hooks.useTranslate(defaultMessages, jimuUiDefaultMessage)

  const handleCharacterLimitChange = (characterLimit: number): void => {
    onChange(
      value.set(
        'characterLimit',
        Math.floor(+characterLimit)
      )
    )
  }

  return (
    <Root className='label-format-setting'>
       <SettingRow label={translate('characterLimit')} flow='no-wrap' truncateLabel={true}>
          <NumericInput
            size='sm'
            showHandlers={false}
            value={characterLimit}
            min={1}
            max={99}
            step={1}
            className='w-50'
            onAcceptValue={handleCharacterLimitChange}
          />
        </SettingRow>
    </Root>
  )
}
