/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ReactRedux, LayoutTransformFunc, IMLayoutJson } from 'jimu-core';
import { LayoutProps, StateToLayoutProps } from '../../types';
declare class FixedLayoutViewer extends React.PureComponent<LayoutProps & StateToLayoutProps> {
    layoutTransform: LayoutTransformFunc;
    createItem(layout: IMLayoutJson, itemId: string, index: number, transformed: boolean): jsx.JSX.Element;
    render(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof FixedLayoutViewer, Omit<React.ClassAttributes<FixedLayoutViewer> & LayoutProps & StateToLayoutProps, "browserSizeMode" | "mainSizeMode" | "layout"> & LayoutProps & ReactRedux.ConnectProps>;
export default _default;
