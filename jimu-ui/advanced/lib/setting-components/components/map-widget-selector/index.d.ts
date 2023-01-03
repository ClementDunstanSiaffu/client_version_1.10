import { ImmutableArray } from 'jimu-core';
/**
 * The MapWidgetSelector component props
 */
export interface MapWidgetSelectorProps {
    /**
     * The array of Map widget IDs. It is returned from the onSelect function.
     */
    useMapWidgetIds?: ImmutableArray<string>;
    /**
     * The function will be called when a Map widget item listed in this component is selected.
     */
    onSelect?: (useMapWidgetIds: string[]) => void;
}
export declare const _MapWidgetSelector: (props: MapWidgetSelectorProps) => JSX.Element;
/**
 * A react component for selecting Map widgets. It is usually used on the setting page of a widget,
 * and works with JimuMapViewComponent, JimuLayerViewComponent, JimuMapViewS and JimuLayerViewSelector.
 */
export declare const MapWidgetSelector: (props: MapWidgetSelectorProps) => JSX.Element;
