import { React, ImmutableObject, classNames } from 'jimu-core'
import { hooks, defaultMessages as jimuiDefaultMessage, TextInput, Switch } from 'jimu-ui'
import { DateTimeFormatOptions, WebChartAxis } from 'jimu-ui/advanced/chart'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import defaultMessages from '../../../../../translations/default'
import { DateFormatSetting } from '../../components'

export interface DateAxisProps {
  className?: string
  axis: ImmutableObject<WebChartAxis>
  onChange?: (axis: ImmutableObject<WebChartAxis>) => void
}

export const DateAxis = (props: DateAxisProps): React.ReactElement => {
  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessage)
  const { className, axis, onChange } = props
  const titleText = axis.title.content?.text ?? ''
  const valueFormat = axis.valueFormat
  const showGrid = axis.grid?.width > 0

  const handleTitleTextChange = (value: string): void => {
    onChange?.(
      axis.set(
        'title',
        axis.title.set('visible', value !== '').setIn(['content', 'text'], value)
      )
    )
  }

  const handleValueFormatChange = (value: ImmutableObject<DateTimeFormatOptions>): void => {
    onChange?.(axis.set('valueFormat', value))
  }

  const handleShowGridChange = (): void => {
    onChange?.(axis.setIn(['grid', 'width'], showGrid ? 0 : 1))
  }

  return (
    <div className={classNames('date-axis w-100', className)}>
      <SettingRow label={translate('axisTitle')} flow='wrap' level={2}>
        <TextInput
          size='sm'
          defaultValue={titleText}
          className='w-100'
          onAcceptValue={handleTitleTextChange}
        />
      </SettingRow>
      <SettingRow label={translate('axisLabel')} flow='wrap' level={2}>
        <DateFormatSetting
          value={valueFormat as ImmutableObject<DateTimeFormatOptions>}
          onChange={handleValueFormatChange}
        />
      </SettingRow>
      <SettingRow label={translate('axisGrid')} level={2}>
        <Switch checked={showGrid} onChange={handleShowGridChange} />
      </SettingRow>
    </div>
  )
}
