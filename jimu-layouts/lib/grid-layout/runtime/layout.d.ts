/// <reference types="react" />
/** @jsx jsx */
import { React, ReactRedux, jsx, LayoutTransformFunc } from 'jimu-core';
import { LayoutProps, StateToLayoutProps } from '../../types';
declare class GridLayout extends React.PureComponent<LayoutProps & StateToLayoutProps> {
    layoutTransform: LayoutTransformFunc;
    findExtension(): void;
    render(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof GridLayout, Omit<React.ClassAttributes<GridLayout> & LayoutProps & StateToLayoutProps, "browserSizeMode" | "mainSizeMode" | "layout"> & LayoutProps & ReactRedux.ConnectProps>;
export default _default;
