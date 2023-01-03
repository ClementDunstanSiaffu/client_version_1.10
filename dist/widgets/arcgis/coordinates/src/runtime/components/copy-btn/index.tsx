/** @jsx jsx */
import { React, jsx } from 'jimu-core'
import { Button, defaultMessages, hooks, Tooltip } from 'jimu-ui'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useTimer } from './hooks/useTimer'
import { getStyles } from './styles'
import { CopyOutlined } from 'jimu-icons/outlined/editor/copy'
import { CheckOutlined } from 'jimu-icons/outlined/application/check'

interface Props {
  text: string
  onCopy?: ((text, result) => void)
  disabled: boolean
  className?: string
}

export const CopyBtn = React.memo((props: Props) => {
  const { text, disabled, className } = props
  const [isShowSuccessfullyCopied, setIsShowSuccessfullyCopied] = React.useState(null)
  const [initTimer, clearTimer] = useTimer(3000, setIsShowSuccessfullyCopied)

  React.useEffect(() => {
    clearTimer()
  }, [text, clearTimer])

  const onCopy = React.useCallback((text, result) => {
    if (props?.onCopy) props.onCopy(text, result)
    initTimer()
  }, [props, initTimer])

  const translate = hooks.useTranslate(defaultMessages)
  const copyNls = translate('copy')
  const copiedToClipboardNls = translate('copiedToClipboard')
  const title = (isShowSuccessfullyCopied ? copiedToClipboardNls : copyNls)
  const copyButton = (
    <Button
      className='copy-btn jimu-outline-inside d-flex'
      icon
      size='sm'
      type='tertiary'
      disabled={disabled}
    >
      {/* 1. Btn: copy to clipboard */}
      {!isShowSuccessfullyCopied &&
        <CopyOutlined size='m' autoFlip />
      }
      {/* 2. Btn: successfully copied */}
      {isShowSuccessfullyCopied &&
        <CheckOutlined size='m' />
      }
    </Button>
  )

  return <div css={getStyles()} className={className}>
    <CopyToClipboard onCopy={onCopy} text={text} options={{ format: 'text/plain' }} data-testid='copy-btn'>
      {disabled
        ? copyButton
        : <Tooltip title={title} placement='auto-end'>
          {copyButton}
        </Tooltip>
      }
    </CopyToClipboard >
  </div>
})
