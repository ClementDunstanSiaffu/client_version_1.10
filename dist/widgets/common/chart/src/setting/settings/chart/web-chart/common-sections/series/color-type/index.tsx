import { React, ImmutableObject, ImmutableArray, Immutable, DataSourceManager, UseDataSource, QueriableDataSource } from 'jimu-core'
import { SettingOutlined } from 'jimu-icons/outlined/application/setting'
import { Button, hooks, Label, Radio } from 'jimu-ui'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { ThemeColorPicker } from 'jimu-ui/basic/color-picker'
import defaultMessages from '../../../../../../translations/default'
import { WebChartColoringPatterns, WebChartPieChartSeries, WebChartPieChartSlice } from 'jimu-ui/advanced/chart'
import { CategoryType, ChartDataSource, WebChartSeries } from '../../../../../../../config'
import { DefaultColorMatchOtherColor, getFillSymbol, getSeriesFillColor, SeriesColors } from '../../../../../../../utils/default'
import { convertStripColors, getByFieldPieSlices, useLoadingPieSlices } from './utils'
import { COLORS_SET } from './color-list/colors-selector'
import { ColorList } from './color-list'
import { getTheme2 } from 'jimu-theme'
import { MaxColorCount } from '../../../../../../../constants'
import { ISimpleFillSymbol } from '@esri/arcgis-rest-types'
import { getCategoryFieldType, getCategoryType } from '../../../../../../../utils/common/serial'

interface ColorTypeProps {
  useDataSources: ImmutableArray<UseDataSource>
  chartDataSource: ImmutableObject<ChartDataSource>
  series: ImmutableArray<WebChartSeries>
  onChange?: (series: ImmutableArray<WebChartSeries>) => void
}

const defaultFillColor = getSeriesFillColor(0)
const presetSeriesColors = convertStripColors(SeriesColors)

const defaultFillSymbol = Immutable(
  getFillSymbol(defaultFillColor, 1, 'var(--light-100)')
)

const totalNumberLimit = 50
export const ColorType = (props: ColorTypeProps): React.ReactElement => {
  const {
    series: propSeries,
    chartDataSource,
    useDataSources,
    onChange
  } = props
  const appTheme = getTheme2()
  const unmountRef = React.useRef<boolean>(false)
  hooks.useUnmount(() => { unmountRef.current = true })
  const translate = hooks.useTranslate(defaultMessages)
  const [open, setOpen] = React.useState(false)
  const [colors, setColors] = React.useState(COLORS_SET[0])
  const dataSourceId = useDataSources?.[0]?.dataSourceId
  const dataSource = DataSourceManager.getInstance().getDataSource(dataSourceId) as QueriableDataSource

  const propSerie = propSeries?.[0] as ImmutableObject<WebChartPieChartSeries>
  const propSlices = propSerie?.slices
  const query = chartDataSource?.query
  const categoryType = getCategoryType(query)
  const categoryFieldType = getCategoryFieldType(query, dataSourceId)

  const numericFields = query?.outStatistics
    ?.map((outStatistic) => outStatistic.onStatisticField)
    .filter((field) => !!field)

  const [loadSlices, loading] = useLoadingPieSlices(dataSource, query, propSlices, colors, totalNumberLimit)

  const colorType = propSerie?.colorType ?? 'singleColor'
  const fillSymbol = propSerie?.fillSymbol
  const outline = fillSymbol?.outline
  const singleColor = fillSymbol?.color as any

  const handleSingleColorChange = (value: string) => {
    value = value || defaultFillColor
    const series = Immutable.setIn(
      propSeries,
      ['0', 'fillSymbol', 'color'],
      value
    )
    onChange?.(series)
  }

  const handleColorTypeChange = async (type: WebChartColoringPatterns) => {
    if (type === 'singleColor') {
      let series = Immutable.setIn(propSeries, ['0', 'colorType'], type)
      series = Immutable.setIn(
        series,
        ['0', 'fillSymbol'],
        fillSymbol.set('color', defaultFillColor)
      )
      series = series.map(serie => (serie as ImmutableObject<WebChartPieChartSeries>).without('slices') as any)
      onChange?.(series)
    } else if (type === 'colorMatch') {
      if (categoryType === CategoryType.ByGroup) {
        let series = Immutable.setIn(propSeries, ['0', 'colorType'], type)
        series = Immutable.setIn(
          series,
          ['0', 'fillSymbol'],
          fillSymbol.set('color', DefaultColorMatchOtherColor)
        )
        loadSlices(MaxColorCount, outline).then(({ value: slices }) => {
          if (unmountRef.current) return
          series = Immutable.setIn(series, ['0', 'slices'], slices)
          onChange?.(series)
        })
      } else if (categoryType === CategoryType.ByField) {
        const slices = getByFieldPieSlices(numericFields, COLORS_SET[0], outline)
        let series = Immutable.setIn(propSeries, ['0', 'colorType'], type)
        series = Immutable.setIn(
          series,
          ['0', 'fillSymbol'],
          defaultFillSymbol.set('color', DefaultColorMatchOtherColor)
        )
        series = Immutable.setIn(series, ['0', 'slices'], slices)
        onChange?.(series)
      }
    }
  }

  const handleSlicesChange = (slices: ImmutableArray<WebChartPieChartSlice>) => {
    const series = Immutable.setIn(propSeries, ['0', 'slices'], slices)
    onChange?.(series)
  }

  const handleOtherChange = (
    fillSymbol: ImmutableObject<ISimpleFillSymbol>
  ) => {
    const series = Immutable.setIn(propSeries, ['0', 'fillSymbol'], fillSymbol)
    onChange?.(series)
  }

  return (
    <>
      <SettingRow label={translate('themeSettingColorMode')} flow='wrap'>
        <div role='radiogroup' className='w-100'>
          <div className='d-flex align-items-center justify-content-between'>
            <Label
              title={translate('singleColor')}
              className='d-flex align-items-center text-truncate'
              style={{ width: '60%' }}
            >
              <Radio
                name='singleColor'
                className='mr-2'
                checked={colorType === 'singleColor'}
                onChange={() => handleColorTypeChange('singleColor')}
              />
              {translate('singleColor')}
            </Label>
            {colorType === 'singleColor' && (
              <ThemeColorPicker
                specificTheme={appTheme}
                presetColors={presetSeriesColors}
                value={singleColor}
                onChange={handleSingleColorChange}
              />
            )}
          </div>
          <div className='d-flex align-items-center justify-content-between'>
            <Label
              title={translate('byCategory')}
              className='d-flex align-items-center text-truncate'
              style={{ width: '60%' }}
            >
              <Radio
                name='radio1'
                className='mr-2'
                checked={colorType === 'colorMatch'}
                onChange={() => handleColorTypeChange('colorMatch')}
              />
              {translate('byCategory')}
            </Label>
            {colorType === 'colorMatch' && (
              <Button
                type='tertiary'
                active={open}
                icon
                size='sm'
                onClick={() => setOpen(!open)}
              >
                <SettingOutlined />
              </Button>
            )}
          </div>
        </div>
      </SettingRow>
      <ColorList
        open={open}
        onRequestClose={() => setOpen(false)}
        categoryType={categoryType}
        categoryFieldType={categoryFieldType}
        loadSlices={loadSlices}
        loading={loading}
        value={propSlices}
        other={fillSymbol}
        colors={colors}
        onColorsChange={setColors}
        onChange={handleSlicesChange}
        onOtherChange={handleOtherChange} />
    </>
  )
}
