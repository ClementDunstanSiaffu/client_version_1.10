import { React, ImmutableArray, UseDataSource, ImmutableObject, IMFeatureLayerQueryParams } from 'jimu-core'
import { SettingSection, SettingRow, SettingCollapse } from 'jimu-ui/advanced/setting-components'
import { IWebChart, WebChartSeries } from '../../../../../config'
import { StatisticsDataSetting } from '../common-sections/data'
import { hooks, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import { defaultMessages as jimuBuilderDefaultMessage } from 'jimu-for-builder'
import { ChartTypes, WebChartAxis } from 'jimu-ui/advanced/chart'
import { getSerialSeriesRotated } from '../../../../../utils/common/serial'
import defaultMessages from '../../../../translations/default'
import { ChartSettingSection } from '../../type'
import { AppearanceSetting } from '../common-sections/appearance'
import { AxesSetting } from '../common-sections/axes'
import { XYGeneralSetting } from '../common-sections/genaral'
import { SerialSeriesSetting } from '../common-sections/series'

interface SerialSettingProps {
  type: ChartTypes
  section: ChartSettingSection
  webChart: ImmutableObject<IWebChart>
  useDataSources: ImmutableArray<UseDataSource>
  onSectionChange: (section: ChartSettingSection) => void
  onWebChartChange: (webChart: ImmutableObject<IWebChart>, query?: IMFeatureLayerQueryParams) => void
}

const SerialSetting = (props: SerialSettingProps): React.ReactElement => {
  const {
    type,
    section,
    webChart: propWebChart,
    useDataSources,
    onSectionChange,
    onWebChartChange
  } = props

  const rotated = getSerialSeriesRotated(propWebChart?.series)
  const legendValid = propWebChart?.series != null && propWebChart?.series?.length > 1

  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessage, jimuBuilderDefaultMessage)

  const handleSeriesChange = (series: ImmutableArray<WebChartSeries>, otherProps?) => {
    const chartDataSource = otherProps?.chartDataSource
    const valueFormat = otherProps?.valueFormat

    let query = null
    let webChart = propWebChart.set('series', series)

    if (valueFormat) {
      webChart = webChart.setIn(['axes', '0', 'valueFormat'], valueFormat)
    }
    if (chartDataSource) {
      webChart = webChart.set('dataSource', chartDataSource)
      if (chartDataSource.query !== propWebChart?.dataSource?.query) {
        query = chartDataSource.query
      }
    }
    onWebChartChange?.(webChart, query)
  }

  const handleAxesChange = (axes: ImmutableArray<WebChartAxis>): void => {
    onWebChartChange?.(propWebChart.set('axes', axes))
  }

  return (
    <>
      <SettingSection>
        <SettingCollapse
          label={translate('data')}
          isOpen={section === ChartSettingSection.Data}
          onRequestOpen={() => onSectionChange(ChartSettingSection.Data)}
          onRequestClose={() => onSectionChange(ChartSettingSection.None)}
        >
          <SettingRow flow='wrap'>
            <StatisticsDataSetting
              type={type}
              chartDataSource={propWebChart?.dataSource}
              useDataSources={useDataSources}
              series={propWebChart?.series}
              onChange={handleSeriesChange}
            />
          </SettingRow>
        </SettingCollapse>
      </SettingSection>
      <SettingSection>
        <SettingCollapse
          label={translate('series')}
          isOpen={section === ChartSettingSection.Series}
          onRequestOpen={() => onSectionChange(ChartSettingSection.Series)}
          onRequestClose={() => onSectionChange(ChartSettingSection.None)}
        >
          <SettingRow flow='wrap'>
            <SerialSeriesSetting
              series={propWebChart?.series}
              onChange={handleSeriesChange}
            />
          </SettingRow>
        </SettingCollapse>
      </SettingSection>
      <SettingSection>
        <SettingCollapse
          label={translate('axes')}
          isOpen={section === ChartSettingSection.Axes}
          onRequestOpen={() => onSectionChange(ChartSettingSection.Axes)}
          onRequestClose={() => onSectionChange(ChartSettingSection.None)}
        >
          <SettingRow flow='wrap'>
            <AxesSetting
              rotated={rotated}
              axes={propWebChart?.axes}
              onChange={handleAxesChange}
            />
          </SettingRow>
        </SettingCollapse>
      </SettingSection>
      <SettingSection>
        <SettingCollapse
          label={translate('general')}
          isOpen={section === ChartSettingSection.General}
          onRequestOpen={() => onSectionChange(ChartSettingSection.General)}
          onRequestClose={() => onSectionChange(ChartSettingSection.None)}
        >
          <SettingRow flow='wrap'>
            <XYGeneralSetting
              value={propWebChart}
              rotatable={true}
              legendValid={legendValid}
              onChange={onWebChartChange}
            />
          </SettingRow>
        </SettingCollapse>
      </SettingSection>
      <SettingSection>
        <SettingCollapse
          label={translate('appearance')}
          isOpen={section === ChartSettingSection.Appearance}
          onRequestOpen={() => onSectionChange(ChartSettingSection.Appearance)}
          onRequestClose={() => onSectionChange(ChartSettingSection.None)}
        >
          <SettingRow flow='wrap'>
            <AppearanceSetting
              webChart={propWebChart}
              onChange={onWebChartChange}
            />
          </SettingRow>
        </SettingCollapse>
      </SettingSection>
    </>
  )
}

export default SerialSetting
