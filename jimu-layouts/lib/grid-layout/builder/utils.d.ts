import { LayoutItemConstructorProps, LayoutInfo, IMAppConfig } from 'jimu-core';
import { SideType } from './types';
export declare function addItemToGrid(appConfig: IMAppConfig, item: LayoutItemConstructorProps, parentLayoutInfo: LayoutInfo, referenceItemId: string, side: SideType): Promise<{
    appConfig: IMAppConfig;
    layoutInfo: LayoutInfo;
}>;
export declare function splitGrid(appConfig: IMAppConfig, item: LayoutItemConstructorProps, gridLayoutId: string, side: SideType): Promise<{
    appConfig: IMAppConfig;
    itemId: string;
}>;
