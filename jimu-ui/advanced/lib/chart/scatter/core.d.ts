/// <reference types="react" />
import { React } from 'jimu-core';
import { ChartComponentEvents, UnprivilegedChart } from '../utils';
export interface ScatterPlotCoreProps extends Partial<HTMLArcgisChartsScatterPlotElement>, ChartComponentEvents {
}
export declare const ScatterPlotCore: React.ForwardRefExoticComponent<ScatterPlotCoreProps & React.RefAttributes<UnprivilegedChart>>;
