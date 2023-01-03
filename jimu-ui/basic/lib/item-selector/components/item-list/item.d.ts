/// <reference types="react" />
import { React, IntlShape } from 'jimu-core';
import { IItemWithPortalUrl, ItemSelectorMode } from '../../types';
interface Props {
    item: IItemWithPortalUrl;
    hideSingleLayer: boolean;
    portalUrl: string;
    mode: ItemSelectorMode;
    onToggleDetail: (evt: React.MouseEvent<HTMLElement>, item: IItemWithPortalUrl) => void;
    onAdd: (evt: React.MouseEvent<HTMLElement>, item: IItemWithPortalUrl) => void;
    onRemove: (evt: React.MouseEvent<HTMLElement>, item: IItemWithPortalUrl) => void;
    isSelectable: (item: IItemWithPortalUrl) => Promise<boolean>;
    selected: boolean;
    partSelected: boolean;
    disableRemove: boolean;
    intl: IntlShape;
    infoBtnRef: React.RefObject<HTMLButtonElement>;
}
interface State {
    dataComponentsUtils: any;
    isLoading: boolean;
}
export default class Item extends React.PureComponent<Props, State> {
    __unmount: boolean;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onItemClicked: (e: any) => Promise<void>;
    onItemKeyDown: (e: any) => void;
    onToggleDetail: (e: any) => void;
    render(): JSX.Element;
}
export {};
