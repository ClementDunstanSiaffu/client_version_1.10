import { React, ImmutableObject } from 'jimu-core'
import FeatureLayer from 'esri/layers/FeatureLayer'
import {
  ActionModes,
  BarAndLineDataLabelFormatCallback,
  BarAndLineTooltipFormatCallback,
  BarChart,
  ChartComponentEvents,
  ChartElementLimit,
  getSeriesType,
  Histogram,
  HistogramLabelFormatCallback,
  InlineData,
  LineChart,
  NoDataOptions,
  PieChart,
  PieChartLabelFormatCallback,
  PieChartLegendValueLabelFormatCallback,
  ScatterPlot,
  ScatterPlotLabelFormatCallback,
  SelectionData,
  SelectionTheme,
  UnprivilegedChart,
  WebChartDataSources,
  WebChartLegendPositions,
  WebMapWebChart
} from 'jimu-ui/advanced/chart'

export interface ChartComponentsProps extends ChartComponentEvents {
  /**
   * Defines the class names added to the component.
   */
  className?: string
  /**
   * Used by `@arcgis/charts-js` package, both mutable and immutable are supported.
   */
  webMapWebChart: WebMapWebChart | ImmutableObject<WebMapWebChart>
  /**
   * Property representing the datasource. Can be Feature layer or vanilla POJOs.
   */
  dataSource?: WebChartDataSources
  /**
   * A property representing the selection to apply on the chart.
   * The properties are considered in the following order:
   * - selectionData.selectionOIDs: an array of Object Ids (for Feature Layer) representing a selection to apply to the chart.
   * - selectionData.selectionItems: an array of data items representing a selection to apply to the chart.
   */
  selectionData?: SelectionData
  /**
   * Used to provide a customized theme for the selected and non selected elements.
   * If no style is provided for the selected elements, a default selection is applied.
   * If no style is provided for the non selected elements, the chart's style is applied.
   */
  selectionTheme?: SelectionTheme
  /**
   * Used to customize the chart's limits, especially the maximum number of bars to be displayed.
   */
  chartLimits?: Partial<ChartElementLimit>
  /**
   * Used to build/update inline data source of the chart
   */
  inlineData?: InlineData<any>
  /**
   * used to perform queries or client-side queries (if the view is provided)
   */
  featureLayer?: FeatureLayer
  /**
   * Set the chart's mode (zoom, selection, none)
   * - zoom: allows to zoom on the chart. All selection is disabled
   * - mono-selection: the selection is enabled but only one element can be selected. Zoom is disabled
   * - multi-selection: the selection is enabled and allows selecting multiple elements. Zoom is disabled
   * - multi-selection-with-ctrl-key: the selection is enabled and allows selecting multiple elements when the ctrl/cmd key is pressed. Zoom is disabled
   * - none: the zoom and selection features are disabled
   */
  actionMode?: ActionModes
  /**
   * optional create message to be displayed in the chart container.
   */
  placeholder?: string
  /**
    * Used to set the chart's behavior when its data set is empty
    */
  noDataOptions?: NoDataOptions
  /**
   * Can be used when creating or updating a chart compatible with time binning. If this option is `true`, the series properties
   * `timeIntervalUnits` and `timeIntervalSize` become optional and will be automatically set to values that fit the data set.
   * @default false
   * Note: Only valid for `lineSeries`.
   */
  setTimeBinningInfoWhenNotProvided?: boolean
  /**
   * Used to customize the way the tooltips are rendered. The callback function can return an HTML string and the tags will
   * be interpreted properly.
   */
  tooltipFormatter?:
  | PieChartLabelFormatCallback
  | HistogramLabelFormatCallback
  | ScatterPlotLabelFormatCallback
  | BarAndLineTooltipFormatCallback
  dataLabelFormatter?:
  | PieChartLabelFormatCallback
  | HistogramLabelFormatCallback
  | ScatterPlotLabelFormatCallback
  | BarAndLineDataLabelFormatCallback
  /**
   * Used by the legend position change action.
   */
  legendPosition?: WebChartLegendPositions
  /**
   * A callback function used to format the legend value labels. If the returned string contains HTML tags they will be interpreted as such.
   * If provided, the formatter will be used if at least `WebChartPieChartLegend.displayNumericValue` or `WebChartPieChartLegend.displayPercentage` is true.
   * Note: Only valid for `pieSeries`.
   */
  legendValueLabelFormatter?: PieChartLegendValueLabelFormatCallback
  /**
   * Can be used to disable the default setting that uses debounce functions to handle the visibility of markers that are outside of the plotting area
   * when the min/max bound changes and/or when a zoom action is performed (via chart cursor or scrollbar), to increase performance.
   * This property will be set when the chart is created and cannot be updated after that. It's recommended that this property should only be set to true for small datasets.
   * @default false
   * Note: Only valid for `lineSeries` and `scatterSeries`.
   */
  ignoreSmoothRenderingLimit?: boolean
  /**
   * Used by the legend visibility change action.
   */
  legendVisibility?: boolean
  /**
   * enable filter by selection
   */
  filterBySelection?: boolean
  /**
   * used to disable all interactions on the chart (legend hit, selection, zoom...)
   */
  disableInteractions?: boolean
  /**
   * To enable the responsive features.
   * @default false
   */
  enableResponsiveFeatures?: boolean
  /**
   * To auto-dispose a chart if a new one is created in the same container.
   * @default true
   */
  autoDisposeChart?: boolean
  /**
   * To ensure that charts are built one by one.
   * @default true
   */
  queueChartCreation?: boolean
  /**
   * To activate the animations on the chart.
   * @default false
   */
  useAnimatedCharts?: boolean
  /**
   * To hide the licence watermark.
   * @default true
   */
  hideLicenceWatermark?: boolean
  /**
  * Used to hide the loader animation (curtain and spinner), showed by default at every update.
  * @default false
  */
  hideLoaderAnimation?: boolean
}

export const ChartComponents = React.forwardRef(
  (
    props: ChartComponentsProps,
    ref: React.Ref<UnprivilegedChart>
  ): React.ReactElement => {
    const {
      noDataOptions,
      tooltipFormatter,
      dataLabelFormatter,
      enableResponsiveFeatures = false,
      autoDisposeChart = true,
      queueChartCreation = true,
      useAnimatedCharts = false,
      hideLicenceWatermark = true,
      ignoreSmoothRenderingLimit = false,
      legendValueLabelFormatter,
      setTimeBinningInfoWhenNotProvided,
      ...others
    } = props

    const seriesType = getSeriesType(props.webMapWebChart?.series as any)

    const globalOptions = {
      autoDisposeChart,
      enableResponsiveFeatures,
      queueChartCreation,
      useAnimatedCharts,
      hideLicenceWatermark
    }

    return (
      <>
        {seriesType === 'barSeries' && (
          <BarChart
            ref={ref}
            {...others}
            dataLabelFormatter={
              dataLabelFormatter as BarAndLineDataLabelFormatCallback
            }
            tooltipFormatter={
              tooltipFormatter as BarAndLineTooltipFormatCallback
            }
            noDataOptions={noDataOptions}
            {...globalOptions}
          />
        )}
        {seriesType === 'lineSeries' && (
          <LineChart
            ref={ref}
            {...others}
            dataLabelFormatter={
              dataLabelFormatter as BarAndLineDataLabelFormatCallback
            }
            tooltipFormatter={
              tooltipFormatter as BarAndLineTooltipFormatCallback
            }
            ignoreSmoothRenderingLimit={ignoreSmoothRenderingLimit}
            setTimeBinningInfoWhenNotProvided={
              setTimeBinningInfoWhenNotProvided
            }
            noDataOptions={noDataOptions}
            {...globalOptions}
          />
        )}
        {seriesType === 'pieSeries' && (
          <PieChart
            ref={ref}
            {...others}
            dataLabelFormatter={
              dataLabelFormatter as PieChartLabelFormatCallback
            }
            tooltipFormatter={tooltipFormatter as PieChartLabelFormatCallback}
            legendValueLabelFormatter={legendValueLabelFormatter}
            noDataOptions={noDataOptions}
            {...globalOptions}
          />
        )}
        {seriesType === 'scatterSeries' && (
          <ScatterPlot
            ref={ref}
            {...others}
            dataLabelFormatter={
              dataLabelFormatter as ScatterPlotLabelFormatCallback
            }
            tooltipFormatter={
              tooltipFormatter as ScatterPlotLabelFormatCallback
            }
            ignoreSmoothRenderingLimit={ignoreSmoothRenderingLimit}
            noDataOptions={noDataOptions}
            {...globalOptions}
          />
        )}
        {seriesType === 'histogramSeries' && (
          <Histogram
            ref={ref}
            {...others}
            dataLabelFormatter={
              dataLabelFormatter as HistogramLabelFormatCallback
            }
            tooltipFormatter={tooltipFormatter as HistogramLabelFormatCallback}
            {...globalOptions}
          />
        )}
      </>
    )
  }
)
