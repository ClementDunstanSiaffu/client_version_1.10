import { React, ImmutableObject, classNames } from 'jimu-core'
import {
  TextInput,
  hooks,
  defaultMessages as jimuiDefaultMessage,
  Switch
} from 'jimu-ui'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { CategoryFormatOptions, NumberFormatOptions, WebChartAxis } from 'jimu-ui/advanced/chart'
import defaultMessages from '../../../../../translations/default'
import { LabelFormatSetting, TextAlignment, TextAlignments } from '../../components'
import { styled } from 'jimu-theme'

export interface CategoryAxisProps {
  className?: string
  isHorizontal: boolean
  axis: ImmutableObject<WebChartAxis>
  onChange?: (axis: ImmutableObject<WebChartAxis>) => void
}

const Root = styled.div`
  .label-alignment .jimu-widget-setting--row-label {
    color: var(--dark-400);
  }
`

export const CategoryAxis = (props: CategoryAxisProps): React.ReactElement => {
  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessage)

  const { className, axis, isHorizontal, onChange } = props
  const titleText = axis.title.content?.text ?? ''
  const valueFormat = axis.valueFormat
  const showGrid = axis.grid?.width > 0
  const alignmentName = isHorizontal ? 'horizontalAlignment' : 'verticalAlignment'
  const alignments = TextAlignments[alignmentName]
  const alignment = axis?.labels.content[alignmentName] ?? alignments[2] as any

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

  const handleAlignmentChange = (alignment): void => {
    onChange?.(axis.setIn(['labels', 'content', alignmentName], alignment))
  }

  return (
    <Root className={classNames('category-axis w-100', className)} >
      <SettingRow label={translate('axisTitle')} flow='wrap' level={2}>
        <TextInput
          size='sm'
          defaultValue={titleText}
          className='w-100'
          onAcceptValue={handleTitleTextChange}
        />
      </SettingRow>
      <SettingRow label={translate('axisLabel')} flow='wrap' level={2}>
        <React.Fragment>
          <LabelFormatSetting
            value={valueFormat as ImmutableObject<CategoryFormatOptions>}
            onChange={handleValueFormatChange}
          />
          <SettingRow
            truncateLabel={true}
            className='label-alignment w-100 mt-2'
            label={translate('alignment')}
            flow='no-wrap'
          >
            <TextAlignment
              vertical={!isHorizontal}
              className='w-50'
              value={alignment}
              onChange={handleAlignmentChange}
            />
          </SettingRow>
        </React.Fragment>
      </SettingRow>
      <SettingRow label={translate('axisGrid')} level={2}>
        <Switch checked={showGrid} onChange={handleShowGridChange} />
      </SettingRow>
    </Root>
  )
}
