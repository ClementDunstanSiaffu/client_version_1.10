/// <reference types="react" />
import { ImmutableObject, React } from 'jimu-core';
import { WebChartDataSources, WebMapWebChart } from 'arcgis-charts';
import { UnprivilegedChart } from '../utils';
import { ScatterPlotCoreProps } from './core';
export interface ScatterPlotProps extends Omit<ScatterPlotCoreProps, 'config'> {
    /**
   * Used by `@arcgis/charts-components` package, both mutable and immutable are supported.
   */
    webMapWebChart: WebMapWebChart | ImmutableObject<WebMapWebChart>;
    /**
     * Property representing the datasource. Can be Feature layer or vanilla POJOs.
     */
    dataSource?: WebChartDataSources;
}
export declare const ScatterPlot: React.ForwardRefExoticComponent<ScatterPlotProps & React.RefAttributes<UnprivilegedChart>>;
