/// <reference types="react" />
import { React, ImmutableArray, Expression, IntlShape, UseDataSource } from 'jimu-core';
import { UrlInputResult } from 'jimu-ui';
import { IMLinkParam, OpenTypes } from '../../../types';
interface Props {
    linkParam: IMLinkParam;
    originLinkParam: IMLinkParam;
    onLinkParamChange: any;
    intl: IntlShape;
    openTypes: ImmutableArray<OpenTypes>;
    widgetId?: string;
    useDataSources?: ImmutableArray<UseDataSource>;
}
interface State {
    isExpPopupOpen: boolean;
    url: string;
}
export default class WebaddressLinkContent extends React.PureComponent<Props, State> {
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    getInitLinkParam: () => IMLinkParam;
    webAddressInputChange: (res: UrlInputResult) => void;
    webAddressExpressionChange: (e: Expression) => void;
    openExpPopup: () => void;
    closeExpPopup: () => void;
    getDefaultExp: () => Expression;
    onUrlChange: (res: UrlInputResult) => void;
    render(): JSX.Element;
}
export {};
