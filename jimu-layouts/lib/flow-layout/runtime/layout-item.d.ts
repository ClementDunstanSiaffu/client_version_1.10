/// <reference types="react" />
/** @jsx jsx */
import { React, ReactRedux, IMLayoutItemJson, jsx, SerializedStyles } from 'jimu-core';
import { LayoutItemProps, FlowLayoutItemSetting } from '../../types';
import { StateToFlowItemProps } from '../layout-utils';
interface OwnProps {
    index: number;
    layoutItem: IMLayoutItemJson;
    gutter: number;
}
declare class FlowLayoutItem extends React.PureComponent<LayoutItemProps & StateToFlowItemProps & OwnProps> {
    calHeight(itemSetting: FlowLayoutItemSetting): string;
    getStyle(itemSetting: FlowLayoutItemSetting): [SerializedStyles, string];
    render(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof FlowLayoutItem, Omit<React.ClassAttributes<FlowLayoutItem> & LayoutItemProps & StateToFlowItemProps & OwnProps, "selected" | "padding" | "isEmpty"> & LayoutItemProps & OwnProps & ReactRedux.ConnectProps>;
export default _default;
