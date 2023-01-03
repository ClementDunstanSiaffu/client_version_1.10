export interface JimuMapViewSelectorProps {
    /**
     * The array of map view IDs. It is returned from the onChange function.
     */
    useMapViewIds?: string[];
    /**
     * The function will be called when a map view item listed in this component is selected.
     */
    onChange?: (useMapViewId: string[]) => void;
}
/**
 * A react component for selecting map views in a map. It is usually used on the settings page of a widget,
 * and works with JimuLayerViewSelector.
 */
export declare const JimuMapViewSelector: (props: JimuMapViewSelectorProps) => JSX.Element;
