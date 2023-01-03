import { React, ImmutableObject } from 'jimu-core'
import { Select } from 'jimu-ui'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { DateTimeFormatOptions } from 'jimu-ui/advanced/chart'
import { styled } from 'jimu-theme'

export interface DateFormatSettingProps {
  value: ImmutableObject<DateTimeFormatOptions>
  onChange: (value: ImmutableObject<DateTimeFormatOptions>) => void
}

const Root = styled.div`
  width: 100%;
  .jimu-widget-setting--row-label {
    color: var(--dark-400);
  }
`

// More info about intl option: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
export const DateFormatSetting = (props: DateFormatSettingProps): React.ReactElement => {
  const { value, onChange } = props

  const intlOptions = (value as DateTimeFormatOptions)?.intlOptions
  const dateStyle = intlOptions?.dateStyle ?? 'none'

  const handleDateStyleChange = (evt: React.MouseEvent<HTMLSelectElement>): void => {
    let dateStyle = evt.currentTarget.value
    dateStyle = dateStyle === 'none' ? undefined : dateStyle
    onChange(value.setIn(['intlOptions', 'dateStyle'], dateStyle))
  }

  return (
    <Root className='date-format-setting'>
      <SettingRow label='$Date style' flow='no-wrap' className='mt-2' truncateLabel={true}>
        <Select
          size='sm'
          value={dateStyle}
          className='w-50'
          onChange={handleDateStyleChange}
        >
          <option value='none'>none</option>
          <option value='full'>full</option>
          <option value='long'>long</option>
          <option value='medium'>medium</option>
          <option value='short'>short</option>
        </Select>
      </SettingRow>
    </Root>
  )
}
