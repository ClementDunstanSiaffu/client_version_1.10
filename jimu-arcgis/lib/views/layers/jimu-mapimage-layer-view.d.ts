import { IMDataSourceInfo } from 'jimu-core';
import { JimuLayerView, JimuLayerViewConstructorOptions } from './jimu-layer-view';
export interface JimuMapImageLayerViewOptions extends JimuLayerViewConstructorOptions {
    url?: string;
}
export declare class JimuMapImageLayerView extends JimuLayerView {
    url: string;
    private readonly originalGdbVersion;
    constructor(options: JimuMapImageLayerViewOptions);
    protected onLayerDataSourceInfoChange(preDsInfo: IMDataSourceInfo, dsInfo: IMDataSourceInfo): void;
}
