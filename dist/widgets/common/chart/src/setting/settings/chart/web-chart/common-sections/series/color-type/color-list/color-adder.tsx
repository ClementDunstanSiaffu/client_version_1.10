/**@jsx jsx */
import { React, jsx, css, classNames, JimuFieldType } from 'jimu-core'
import { Button, hooks, Label, TextInput, ValidityResult, defaultMessages as jimuDefaultMessages, Tooltip } from 'jimu-ui'
import { MinusCircleOutlined } from 'jimu-icons/outlined/editor/minus-circle'
import { PlusCircleOutlined } from 'jimu-icons/outlined/editor/plus-circle'
import defaultMessages from '../../../../../../../translations/default'

interface ColorAdderProps {
  className?: string
  categoryFieldType: JimuFieldType
  validity?: (text: string) => ValidityResult
  onChange?: (text: string | number) => void
}

const style = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > .editor {
    width: 100%;
    > .top-part {
      width: 100%;
      display: flex;
      justify-content: space-between;
      > .jimu-input {
        width: 88%;
      }
      > .jimu-btn {
        align-self: flex-start;
      }
    }
    > .info-msg {
      color: var(--dark-600);
      width: 88%;
    }
  }
`
const isNumeric = (value: string) => /[0-9]+$/mg.test(value)

export const ColorAdder = (props: ColorAdderProps): React.ReactElement => {
  const { className, categoryFieldType, validity, onChange } = props
  const translate = hooks.useTranslate(jimuDefaultMessages, defaultMessages)
  const ref = React.useRef<HTMLInputElement>(null)
  const [editable, setEditable] = React.useState(false)
  const [value, setValue] = React.useState<string>('')

  const handleAddClick = () => {
    setEditable(!editable)
    setTimeout(() => {
      ref?.current?.focus()
    })
  }

  const handlekeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      if (categoryFieldType === JimuFieldType.String) {
        const valid = validity(value).valid
        if (value && valid) {
          setValue('')
          onChange?.(value)
          setEditable(false)
        }
      } else if (categoryFieldType === JimuFieldType.Number) {
        const valid = isNumeric(value.trim())
        if (valid) {
          setValue('')
          onChange?.(+value.trim())
          setEditable(false)
        }
      }
    }
  }

  const handleCancleClick = () => {
    setValue('')
    setEditable(false)
  }

  return (
    <div className={classNames('color-adder', className)} css={style}>
      {!editable && <Label check>
        {translate('addCategory')}
        <Tooltip title={translate('addCategoryTip')} showArrow enterDelay={300}>
          <Button type='tertiary' icon className='add' size='sm' onClick={handleAddClick}><PlusCircleOutlined size='m' /></Button>
        </Tooltip>
      </Label>}
      {editable && <div className='editor'>
        <div className='top-part'>
          <TextInput
            ref={ref}
            size='sm'
            placeholder={translate('categoryName')}
            value={value}
            onKeyDown={handlekeyDown}
            onChange={(e) => setValue(e.target.value)}
            checkValidityOnAccept={validity as any} />
          <Button icon type='tertiary' size='sm' onClick={handleCancleClick} title={translate('commonModalCancel')}><MinusCircleOutlined size='m' /></Button>
        </div>
        <div className='info-msg mt-1'>{translate('pressEnter')}</div>
      </div>}
    </div>
  )
}
