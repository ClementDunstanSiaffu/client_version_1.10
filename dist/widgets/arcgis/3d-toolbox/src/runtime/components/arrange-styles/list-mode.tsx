/** @jsx jsx */
import { React, jsx, ImmutableObject, ImmutableArray, classNames } from 'jimu-core'
import { Button, hooks, defaultMessages as jimuUIMessages } from 'jimu-ui'
import { JimuMapView } from 'jimu-arcgis'
import defaultMessages from '../../translations/default'

import { Tool3D, ToolsID } from '../../../constraints'

import { ToolPanel } from '../tool-panel/index'

import { DaylightOutlined } from 'jimu-icons/outlined/gis/daylight'
import { WeatherOutlined } from 'jimu-icons/outlined/gis/weather'
import { ShadowCastOutlined } from 'jimu-icons/outlined/gis/shadow-cast'
import { LineOfSightOutlined } from 'jimu-icons/outlined/gis/line-of-sight'

export interface Props {
  toolsConfig: ImmutableArray<Tool3D>
  findToolConfigById: (toolID: ToolsID) => ImmutableObject<Tool3D>
  useMapWidgetId: string
  jimuMapView: JimuMapView
}

export const ListMode = React.memo((props: Props) => {
  const translate = hooks.useTranslate(defaultMessages, jimuUIMessages)

  const [shownModeState, setShownModeState] = React.useState<ImmutableObject<Tool3D>>(null)
  // a11y
  const btnRefFor508 = React.useRef<HTMLElement>(null)

  const onItemClick = React.useCallback((tool: ImmutableObject<Tool3D>, evt) => {
    setShownModeState(tool)

    const target = (evt.target as HTMLElement) // 508 for back to main-list
    const btn = target.dataset.id ? target : target.parentElement
    btnRefFor508.current = btn
  }, [])

  const onBackBtnClick = React.useCallback(() => {
    setShownModeState(null)
  }, [])
  React.useEffect(() => {
    if (shownModeState === null) {
      btnRefFor508?.current?.focus() // 508 for back to main-list
    }
  }, [shownModeState])

  const _getListItem = React.useCallback((tool: ImmutableObject<Tool3D>) => {
    if (!tool.enable) {
      return null //disable
    }

    const name = translate('' + tool.id)
    let icon = null
    switch (tool.id) {
      case ToolsID.Daylight: {
        icon = <DaylightOutlined />
        break
      }
      case ToolsID.Weather: {
        icon = <WeatherOutlined />
        break
      }
      case ToolsID.ShadowCast: {
        icon = <ShadowCastOutlined />
        break
      }
      case ToolsID.LineOfSight: {
        icon = <LineOfSightOutlined />
        break
      }

      default: {
        break
      }
    }

    return (
      <Button className='list-item d-flex align-items-center pl-2 py-1 my-3 w-100 jimu-outline-inside' type='tertiary' title={name} role='listitem'
        key={tool.id} data-id={tool.id} onClick={(evt) => onItemClick(tool, evt)}>
          <div className='d-flex list-item-icon mx-2'>{icon}</div>
          <div className='d-flex list-item-name'>{name}</div>
      </Button>
    )
  }, [translate, onItemClick])

  return (
    <React.Fragment>
      <div className='list-item-container d-flex h-100' role='list'>
        {<div className={classNames('main-list w-100 ', { hide: (shownModeState !== null) })}>
          {
            props.toolsConfig.map((tool) => {
              return _getListItem(tool)
            })
          }
        </div>}

        {/* Daylight */}
        {//(shownModeState?.id === ToolsID.Daylight) &&
          <ToolPanel
            mode={ToolsID.Daylight}
            toolConfig={props.findToolConfigById(ToolsID.Daylight)}
            useMapWidgetId={props.useMapWidgetId}
            jimuMapView={props.jimuMapView}

            shownModeState={shownModeState}
            isShowBackBtn={true}
            onBackBtnClick={onBackBtnClick}
          ></ToolPanel>
        }

        {/* Weather */}
        {//(shownModeState?.id === ToolsID.Weather) &&
          <ToolPanel
            mode={ToolsID.Weather}
            toolConfig={props.findToolConfigById(ToolsID.Weather)}
            useMapWidgetId={props.useMapWidgetId}
            jimuMapView={props.jimuMapView}

            shownModeState={shownModeState}
            isShowBackBtn={true}
            onBackBtnClick={onBackBtnClick}
          ></ToolPanel>
        }

        {/* ShadowCast */}
        {//(shownModeState?.id === ToolsID.ShadowCast) &&
          <ToolPanel
            mode={ToolsID.ShadowCast}
            toolConfig={props.findToolConfigById(ToolsID.ShadowCast)}
            useMapWidgetId={props.useMapWidgetId}
            jimuMapView={props.jimuMapView}

            shownModeState={shownModeState}
            isShowBackBtn={true}
            onBackBtnClick={onBackBtnClick}
          ></ToolPanel>
        }

        {/* LineOfSight */}
        {//(shownModeState?.id === ToolsID.LineOfSight) &&
          <ToolPanel
            mode={ToolsID.LineOfSight}
            toolConfig={props.findToolConfigById(ToolsID.LineOfSight)}
            useMapWidgetId={props.useMapWidgetId}
            jimuMapView={props.jimuMapView}

            shownModeState={shownModeState}
            isShowBackBtn={true}
            onBackBtnClick={onBackBtnClick}
          ></ToolPanel>
        }
      </div>
    </React.Fragment>
  )
})
