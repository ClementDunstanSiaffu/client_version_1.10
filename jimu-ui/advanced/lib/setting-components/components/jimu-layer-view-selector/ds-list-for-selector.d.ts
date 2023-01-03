/// <reference types="react" />
import { React, ImmutableArray, IntlShape } from 'jimu-core';
export interface SelectedDsJson {
    rootDataSourceId: string;
    dataSourceId: string;
}
interface DsListForSelectorProps {
    fromRootDsIds: ImmutableArray<string>;
    selectedDsIds: ImmutableArray<string>;
    onSelect?: (selectedDsJson: SelectedDsJson) => void;
}
export declare const DsListForSelector: React.FC<import("react-intl").WithIntlProps<DsListForSelectorProps & {
    intl: IntlShape;
}>> & {
    WrappedComponent: React.ComponentType<DsListForSelectorProps & {
        intl: IntlShape;
    }>;
};
export {};
