/// <reference types="react" />
import { React, IntlShape, ImmutableArray, AllDataSourceTypes } from 'jimu-core';
interface Props {
    toUseTypes: ImmutableArray<AllDataSourceTypes>;
    selectedTypes: ImmutableArray<AllDataSourceTypes>;
    hideAllOptionOfTypeDropdown: boolean;
    intl: IntlShape;
    onTypeSelected: (types: ImmutableArray<AllDataSourceTypes>) => void;
}
export default class DsTypes extends React.PureComponent<Props, unknown> {
    __unmount: boolean;
    getWhetherDisableSelectionType: (types: ImmutableArray<AllDataSourceTypes>) => boolean;
    onTypeSelected: (e: any) => void;
    render(): JSX.Element;
}
export {};
