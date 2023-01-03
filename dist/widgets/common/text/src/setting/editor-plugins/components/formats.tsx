/** @jsx jsx */
import {
  React,
  jsx,
  css,
  classNames,
  ImmutableArray,
  polished,
  UseDataSource,
  LinkType
} from 'jimu-core'
import {
  FontFamily,
  Indent,
  Size,
  LinkSetting,
  ListValue,
  FormatType,
  Formats,
  RichTextFormatKeys,
  LinkFormatValue
} from 'jimu-ui/advanced/rich-text-editor'
import { Button, NumericInput, ButtonGroup, hooks } from 'jimu-ui'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { Effects } from './effects'
import { ThemeColorPicker } from 'jimu-ui/basic/color-picker'
import {
  FontStyle,
  TextAlignment
} from 'jimu-ui/advanced/style-setting-components'
import { TextDotsOutlined } from 'jimu-icons/outlined/editor/text-dots'
import { TextNumberOutlined } from 'jimu-icons/outlined/editor/text-number'
import uppercaseOutlined from 'jimu-icons/svg/outlined/editor/uppercase.svg'
import colorFillFilled from 'jimu-icons/svg/filled/editor/color-fill.svg'
import { useTheme2 } from 'jimu-theme'

const DEFAULTLETTERSIZE = '0px'
const DEFAULLINESTACE = 1.5

export interface RichFormatsPanelPorps {
  widgetId: string
  className?: string
  style?: any
  useDataSources?: ImmutableArray<UseDataSource>
  formats?: Formats
  onChange?: (key: RichTextFormatKeys, value: any, type: FormatType) => void
  disableIndent?: boolean
  disableLink?: boolean
}

const style = css`
  > * {
    user-select: none;
  }
  .jimu-widget-setting--row {
    margin-top: ${polished.rem(12)};
  }
`

export const RichFormatsPanel = (
  props: RichFormatsPanelPorps
): React.ReactElement => {
  const appTheme = useTheme2()

  const {
    formats = {},
    onChange,
    className,
    style: propStyle,
    useDataSources,
    widgetId,
    disableIndent,
    disableLink
  } = props

  const translate = hooks.useTranslate()

  const handleListChange = (value: ListValue): void => {
    const list = formats.list === value ? false : value
    onChange?.(RichTextFormatKeys.List, list, FormatType.BLOCK)
  }

  const handleLinespaceChange = (value: number): void => {
    onChange?.(RichTextFormatKeys.Linespace, value, FormatType.BLOCK)
  }

  const handleFontStyleChange = (key: string, value: boolean) => {
    onChange?.(key as any, value, FormatType.INLINE)
  }

  const handleLinkChange = (
    key: RichTextFormatKeys,
    value: LinkFormatValue,
    type: FormatType
  ): void => {
    const link = value?.link?.linkType === LinkType.None ? false : value
    onChange?.(key, link, type)
  }

  return (
    <div
      css={style}
      style={propStyle}
      className={classNames(className, 'format-panel')}
    >
      <SettingRow>
        <div className='d-flex align-items-center justify-content-between w-100'>
          <FontFamily
            aria-label={translate('variableFontFamilyBase')}
            style={{ width: '61%' }}
            font={formats.font}
            onChange={(v) =>
              onChange(RichTextFormatKeys.Font, v, FormatType.INLINE)
            }
          />
          <Size
            aria-label={translate('fontSize')}
            style={{ width: '35%' }}
            value={formats.size}
            onChange={(v) =>
              onChange(RichTextFormatKeys.Size, v, FormatType.INLINE)
            }
          />
        </div>
      </SettingRow>

      <SettingRow>
        <div className='d-flex align-items-center justify-content-between w-100'>
          <FontStyle
            aria-label={translate('fontStyle')}
            bold={formats[RichTextFormatKeys.Bold]}
            italic={formats[RichTextFormatKeys.Italic]}
            underline={formats[RichTextFormatKeys.Underline]}
            strike={formats[RichTextFormatKeys.Strike]}
            onChange={handleFontStyleChange}
          />
          <div
            className='d-flex align-items-center justify-content-between'
            style={{ width: '50%' }}
          >
            <ThemeColorPicker
              icon={colorFillFilled}
              type='with-icon'
              aria-label={translate('highlight')}
              title={translate('highlight')}
              specificTheme={appTheme}
              value={formats.background}
              onChange={(v) =>
                onChange(RichTextFormatKeys.Background, v, FormatType.INLINE)
              }
            />
            <ThemeColorPicker
              icon={uppercaseOutlined}
              type='with-icon'
              title={translate('fontColor')}
              aria-label={translate('fontColor')}
              specificTheme={appTheme}
              value={formats.color}
              onChange={(v) =>
                onChange(RichTextFormatKeys.Color, v, FormatType.INLINE)
              }
            />
            <LinkSetting
              widgetId={widgetId}
              style={{ width: 42 }}
              value={formats.link}
              disabled={disableLink}
              active={!!formats[RichTextFormatKeys.Link]}
              useDataSources={useDataSources}
              onChange={handleLinkChange}
            />
          </div>
        </div>
      </SettingRow>

      <SettingRow>
        <div className='d-flex align-items-center justify-content-between w-100'>
          <TextAlignment
            aria-label={translate('textAlign')}
            autoFlip
            textAlign={formats.align}
            showJustify
            onChange={(value) =>
              onChange(RichTextFormatKeys.Align, value, FormatType.BLOCK)
            }
          />

          <ButtonGroup aria-label={translate('ordered')}>
            <Button
              title={translate('bullet')}
              active={formats.list === ListValue.BULLET}
              aria-pressed={formats.list === ListValue.BULLET}
              icon
              size='sm'
              onClick={() => handleListChange(ListValue.BULLET)}
            >
              <TextDotsOutlined />
            </Button>
            <Button
              title={translate('numbering')}
              active={formats.list === ListValue.ORDERED}
              aria-pressed={formats.list === ListValue.ORDERED}
              icon
              size='sm'
              onClick={() => handleListChange(ListValue.ORDERED)}
            >
              <TextNumberOutlined />
            </Button>
          </ButtonGroup>

          <Indent
            disabled={disableIndent}
            value={formats.indent}
            onClick={(value) => onChange(RichTextFormatKeys.Indent, value, FormatType.BLOCK)}
          />
        </div>
      </SettingRow>

      <SettingRow flow='no-wrap' label={translate('characterSpacing')}>
        <Size
          style={{ width: '35%' }}
          aria-label={translate('characterSpacing')}
          value={formats.letterspace ?? DEFAULTLETTERSIZE}
          onChange={(v) => onChange(RichTextFormatKeys.Letterspace, v, FormatType.INLINE)}
        />
      </SettingRow>

      <SettingRow flow='no-wrap' label={translate('lineSpacing')}>
        <NumericInput
          style={{ width: '35%' }}
          size='sm'
          aria-label={translate('lineSpacing')}
          value={formats.linespace ?? DEFAULLINESTACE}
          showHandlers={false}
          onAcceptValue={handleLinespaceChange}
        />
      </SettingRow>

      <SettingRow flow='wrap' label={translate('characterEffect')}>
        <Effects
          value={formats.textshadow}
          onChange={(v) =>
            onChange(RichTextFormatKeys.Textshadow, v, FormatType.INLINE)
          }
        />
      </SettingRow>
    </div>
  )
}
