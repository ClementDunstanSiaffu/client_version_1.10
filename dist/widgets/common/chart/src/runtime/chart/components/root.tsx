import { React, classNames } from 'jimu-core'
import { styled } from 'jimu-theme'
import { Loading } from 'jimu-ui'
import { TemplateType } from '../../../config'
import { Placeholder } from './placeholder'

interface ChartRootPorps {
  className?: string
  showLoading: boolean
  background: string
  tools: React.ReactNode
  children: React.ReactElement
  showPlaceholder?: boolean
  templateType: TemplateType
  messageType: 'basic' | 'tooltip'
  message?: string
}

const Root = styled.div((props: { showTools: boolean, background: string }) => {
  return `
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background-color: ${props.background} !important;
      .chart-toolbar {
        height: ${props.showTools ? '38px' : '0px'};
      }
      .chart-container {
        height: ${props.showTools ? 'calc(100% - 38px)' : '100%'} !important;
        > .web-chart {
          height: 100%
          width: 100%;
        }
      }
      .arcgis-charts-modal-content, .arcgis-charts-ampopup-content, .arcgis-charts-modal-curtain, .arcgis-charts-ampopup-curtain {
        z-index: auto;
      }
    `
})

export const ChartRoot = (props: ChartRootPorps) => {
  const {
    className,
    showPlaceholder,
    showLoading,
    background,
    tools,
    templateType,
    messageType,
    message,
    children
  } = props

  return (
    <Root showTools={!!tools} background={background} className={classNames('chart-root', className)}>
      {showPlaceholder && (
        <Placeholder
          templateType={templateType}
          message={message}
          messageType={messageType}
          showMessage={!!message}
        />
      )}
      {!showPlaceholder && <>
        <div className='chart-toolbar'>{tools}</div>
        <div className='chart-container'>
          {children}
          {
            showLoading && <Loading type='DONUT' />
          }
        </div>
      </>}
    </Root>
  )
}
