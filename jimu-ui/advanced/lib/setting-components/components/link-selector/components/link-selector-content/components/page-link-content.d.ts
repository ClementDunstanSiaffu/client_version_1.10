/// <reference types="react" />
import { React, IMAppConfig, IntlShape, ImmutableArray } from 'jimu-core';
import { IMLinkParam, OpenTypes } from '../../../types';
interface Props {
    linkParam: IMLinkParam;
    originLinkParam: IMLinkParam;
    onLinkParamChange: any;
    appConfig: IMAppConfig;
    intl: IntlShape;
    openTypes: ImmutableArray<OpenTypes>;
}
export default class PageLinkContent extends React.PureComponent<Props, unknown> {
    componentDidMount(): void;
    getInitLinkParam: () => IMLinkParam;
    setLinkParam: (newSelectItem: any) => void;
    render(): JSX.Element;
}
export {};
