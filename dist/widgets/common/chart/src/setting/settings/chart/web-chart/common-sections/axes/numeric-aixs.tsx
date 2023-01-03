import { React, ImmutableObject, classNames, ImmutableArray } from 'jimu-core'
import {
  TextInput,
  hooks,
  NumericInput,
  defaultMessages as jimuiDefaultMessage,
  Switch
} from 'jimu-ui'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { CategoryFormatOptions, NumberFormatOptions, WebChartAxis, WebChartGuide } from 'jimu-ui/advanced/chart'
import defaultMessages from '../../../../../translations/default'
import { NumericFormatSetting } from '../../components'
import Guides from './guide'
import { parseNumber } from './guide/utils'

export interface NumericAxisProps {
  className?: string
  isHorizontal: boolean
  showLogarithmicScale?: boolean
  axis: ImmutableObject<WebChartAxis>
  onChange?: (axis: ImmutableObject<WebChartAxis>) => void
}

export const NumericAxis = (props: NumericAxisProps): React.ReactElement => {
  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessage)
  const { className, axis, isHorizontal, showLogarithmicScale, onChange } = props
  const titleText = axis.title.content?.text ?? ''
  const valueFormat = axis.valueFormat
  const showGrid = axis.grid?.width > 0
  const minimum = axis.minimum ?? ''
  const maximum = axis.maximum ?? ''
  const isLogarithmic = axis.isLogarithmic ?? false
  const guides = axis?.guides

  const handleTitleTextChange = (value: string): void => {
    onChange?.(
      axis.set(
        'title',
        axis.title.set('visible', value !== '').setIn(['content', 'text'], value)
      )
    )
  }

  const handleValueFormatChange = (value: ImmutableObject<CategoryFormatOptions> | ImmutableObject<NumberFormatOptions>): void => {
    onChange?.(axis.set('valueFormat', value))
  }

  const handleShowGridChange = (): void => {
    onChange?.(axis.setIn(['grid', 'width'], showGrid ? 0 : 1))
  }

  const handleMinumumChange = (value: string): void => {
    const minimum = parseNumber(value)
    onChange?.(axis.set('minimum', minimum))
  }

  const handleMaxumumChange = (value: string): void => {
    const maximum = parseNumber(value)
    onChange?.(axis.set('maximum', maximum))
  }

  const handleLogarithmicChange = (): void => {
    onChange?.(axis.set('isLogarithmic', !isLogarithmic))
  }

  const handleGuidesChange = (value: ImmutableArray<WebChartGuide>) => {
    onChange?.(axis.set('guides', value))
  }

  return (
    <div className={classNames('numeric-axis w-100', className)}>
      <SettingRow label={translate('valueRange')} flow='wrap' level={2}>
        <div className='d-flex align-items-center justify-content-between'>
          <NumericInput
            placeholder={translate('min')}
            size='sm'
            showHandlers={false}
            value={minimum}
            style={{ width: '40%' }}
            onAcceptValue={handleMinumumChange}
          />
          <span className='text-truncate'>{translate('to')}</span>
          <NumericInput
            size='sm'
            showHandlers={false}
            placeholder={translate('max')}
            value={maximum}
            style={{ width: '40%' }}
            onAcceptValue={handleMaxumumChange}
          />
        </div>
      </SettingRow>
      {
        showLogarithmicScale && (
          <SettingRow label={translate('logarithmicScale')} level={2}>
            <Switch checked={isLogarithmic} onChange={handleLogarithmicChange} />
          </SettingRow>
        )
      }
      <SettingRow label={translate('axisTitle')} flow='wrap' level={2}>
        <TextInput
          size='sm'
          defaultValue={titleText}
          className='w-100'
          onAcceptValue={handleTitleTextChange}
        />
      </SettingRow>
      <SettingRow label={translate('axisLabel')} flow='wrap' level={2}>
        <NumericFormatSetting
          value={valueFormat as ImmutableObject<NumberFormatOptions>}
          onChange={handleValueFormatChange}
        />
      </SettingRow>
      <SettingRow label={translate('axisGrid')} level={2}>
        <Switch checked={showGrid} onChange={handleShowGridChange} />
      </SettingRow>
      <Guides isHorizontal={!isHorizontal} value={guides} onChange={handleGuidesChange} />
    </div>
  )
}
