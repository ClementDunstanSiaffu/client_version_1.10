/** @jsx jsx */
import { React, jsx } from 'jimu-core'
import { WidgetRect } from '../../../config'
import { getStyles } from './styles'

const { useEffect, useRef } = React

interface Props {
  text: string
  className?: string
  widgetRect?: WidgetRect
  domChange?: boolean
}

export const TextAutoFit = React.memo((props: Props) => {
  const { text, className, widgetRect, domChange } = props
  const outterContainerDom = useRef(null)
  const textDom = useRef(null)

  useEffect(() => {
    updateText()
  }, [text, widgetRect, outterContainerDom.current?.clientWidth, outterContainerDom.current?.clientHeight, domChange])

  const updateText = () => {
    const outterWidth = outterContainerDom.current?.clientWidth
    const outterHeight = outterContainerDom.current?.clientHeight
    const textWidth = textDom.current?.clientWidth
    const textHeight = textDom.current?.clientHeight
    if (!outterWidth || !textWidth || !outterHeight || !textHeight) return
    if (textWidth !== outterWidth || textHeight !== outterHeight) {
      const widthRate = outterWidth / textWidth
      const heightRate = outterHeight / textHeight
      textDom.current.style.transform = `scale(${Math.min(widthRate, heightRate)})`
    } else {
      textDom.current.style.transform = 'none'
    }
  }

  return <div ref={outterContainerDom} css={getStyles()} className={className}>
    <div className='text' ref={textDom}>{text}</div>
  </div>
})
