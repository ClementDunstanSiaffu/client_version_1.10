/// <reference types="react" />
import { React, ReactRedux } from 'jimu-core';
import { LayoutProps, StateToLayoutProps } from '../types';
declare class LayoutEntry extends React.PureComponent<LayoutProps & StateToLayoutProps> {
    render(): JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof LayoutEntry, Omit<React.ClassAttributes<LayoutEntry> & LayoutProps & StateToLayoutProps, "browserSizeMode" | "mainSizeMode" | "layout"> & LayoutProps & ReactRedux.ConnectProps>;
export default _default;
