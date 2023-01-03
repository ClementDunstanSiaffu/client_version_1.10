/// <reference types="react" />
import { React } from 'jimu-core';
import { ChartComponentEvents, UnprivilegedChart } from '../utils';
export interface PieChartCoreProps extends Partial<HTMLArcgisChartsPieChartElement>, ChartComponentEvents {
}
export declare const PieChartCore: React.ForwardRefExoticComponent<PieChartCoreProps & React.RefAttributes<UnprivilegedChart>>;
