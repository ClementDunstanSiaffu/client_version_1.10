/// <reference types="react" />
/** @jsx jsx */
import { React, ReactRedux, jsx, LayoutItemConstructorProps, IMSizeModeLayoutJson, LayoutTransformFunc } from 'jimu-core';
import { LayoutProps, StateToLayoutProps, PageContextProps } from 'jimu-layouts/layout-runtime';
import { DropHandlers } from '../../builder/types';
import { SideType } from './types';
declare class GridLayout extends React.PureComponent<LayoutProps & StateToLayoutProps> implements DropHandlers {
    fakeLayouts: IMSizeModeLayoutJson;
    tipRef: React.RefObject<HTMLDivElement>;
    layoutTransform: LayoutTransformFunc;
    pageContext: PageContextProps;
    constructor(props: any);
    findExtension(): void;
    handleDragOver(): void;
    handleDragEnter(): void;
    handleDragLeave(): void;
    handleDrop(draggingItem: LayoutItemConstructorProps, containerRect: ClientRect, itemRect: ClientRect): void;
    handleDropAtSide(draggingItem: LayoutItemConstructorProps, side: SideType): void;
    handleTemplateSelected: (templateGridJson: any) => Promise<void>;
    handlePageTemplateSelected: (templatePageJson: any) => void;
    highlight: (side: SideType) => void;
    clearHighlight: (side: SideType) => void;
    render(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof GridLayout, Omit<React.ClassAttributes<GridLayout> & LayoutProps & StateToLayoutProps, "browserSizeMode" | "mainSizeMode" | "layout"> & LayoutProps & ReactRedux.ConnectProps>;
export default _default;
