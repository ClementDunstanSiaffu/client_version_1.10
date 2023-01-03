/// <reference types="react" />
import { ImmutableObject, React } from 'jimu-core';
import { WebChartDataSources, WebMapWebChart } from 'arcgis-charts';
import { UnprivilegedChart } from '../utils';
import { PieChartCoreProps } from './core';
export interface PieChartProps extends Omit<PieChartCoreProps, 'config'> {
    /**
   * Used by `@arcgis/charts-components` package, both mutable and immutable are supported.
   */
    webMapWebChart: WebMapWebChart | ImmutableObject<WebMapWebChart>;
    /**
     * Property representing the datasource. Can be Feature layer or vanilla POJOs.
     */
    dataSource?: WebChartDataSources;
}
export declare const PieChart: React.ForwardRefExoticComponent<PieChartProps & React.RefAttributes<UnprivilegedChart>>;
