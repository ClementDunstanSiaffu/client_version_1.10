import { React, ImmutableObject, classNames } from 'jimu-core'
import { ISimpleLineSymbol, ISimpleMarkerSymbol } from '@esri/arcgis-rest-types'
import { TextInput, defaultMessages as jimuMessages, hooks, Switch } from 'jimu-ui'
import defaultMessages from '../../../../../translations/default'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { LineSymbolSetting, MarkSymbolSetting } from '../../components'
import { WebChartSeries } from '../../../../../../config'
import { SeriesColors } from '../../../../../../utils/default'
import { WebChartLineChartSeries } from 'jimu-ui/advanced/chart'

interface LineSeriesStyleProps {
  className?: string
  defaultFillColor: string
  defaultLineColor: string
  serie: ImmutableObject<WebChartSeries>
  onChange?: (serie: ImmutableObject<WebChartSeries>) => void
}

const presetSeriesColors = SeriesColors.map((color) => ({
  label: color,
  value: color,
  color: color
}))

export const LineSeriesStyle = (props: LineSeriesStyleProps): React.ReactElement => {
  const { className, serie, defaultFillColor, defaultLineColor, onChange } = props
  const markerVisible = (serie as ImmutableObject<WebChartLineChartSeries>)?.markerVisible ?? false
  const translate = hooks.useTranslate(defaultMessages, jimuMessages)

  const handleLabelChange = (value: string): void => {
    onChange?.(serie.set('name', value))
  }

  const handleLineSymbolChange = (
    value: ImmutableObject<ISimpleLineSymbol>
  ): void => {
    onChange?.(serie.set('lineSymbol', value))
  }

  const handleMarkerVisibleChange = (evt): void => {
    const visible = evt.target.checked
    onChange?.(serie.set('markerVisible', visible))
  }

  const handleMarkerSymbolChange = (
    value: ImmutableObject<ISimpleMarkerSymbol>
  ): void => {
    onChange?.(serie.set('markerSymbol', value))
  }

  return (
    <div className={classNames('line-series-style w-100', className)}>
      <SettingRow label={translate('label')} flow='no-wrap'>
        <TextInput
          size='sm'
          className='w-50'
          defaultValue={serie?.name ?? ''}
          onAcceptValue={handleLabelChange}
        />
      </SettingRow>
      <SettingRow label={translate('symbol')} flow='wrap'>
        <LineSymbolSetting
          defaultColor={defaultFillColor}
          presetColors={presetSeriesColors}
          value={(serie as any).lineSymbol}
          onChange={handleLineSymbolChange}
        />
      </SettingRow>
      <SettingRow label={translate('valuePoint')}>
        <Switch
          checked={markerVisible}
          onChange={handleMarkerVisibleChange}
        />
      </SettingRow>
      {
        markerVisible && <MarkSymbolSetting
          className='mt-2'
          defaultFillColor={defaultFillColor}
          defaultLineColor={defaultLineColor}
          presetFillColors={presetSeriesColors}
          presetLineColors={presetSeriesColors}
          value={(serie as any)?.markerSymbol}
          onChange={handleMarkerSymbolChange}
        />
      }
    </div>
  )
}
