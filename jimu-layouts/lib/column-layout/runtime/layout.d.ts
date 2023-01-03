/// <reference types="react" />
/** @jsx jsx */
import { React, ReactRedux, jsx } from 'jimu-core';
import { LayoutProps, StateToLayoutProps, ColumnLayoutSetting } from '../../types';
declare class Layout extends React.PureComponent<LayoutProps & StateToLayoutProps> {
    createItem(itemId: string, index: number, layoutSetting: ColumnLayoutSetting): jsx.JSX.Element;
    render(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof Layout, Omit<React.ClassAttributes<Layout> & LayoutProps & StateToLayoutProps, "browserSizeMode" | "mainSizeMode" | "layout"> & LayoutProps & ReactRedux.ConnectProps>;
export default _default;
