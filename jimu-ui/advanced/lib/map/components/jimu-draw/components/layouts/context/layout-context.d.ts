/// <reference types="react" />
import { React } from 'jimu-core';
import { JimuDrawUIOptions } from '..';
export interface LayoutContextStates {
    uiOptions: JimuDrawUIOptions;
    disableSymbolSelector: boolean;
    isExpandSymbolList: boolean;
    symbolsWapperPositionRef: Element;
}
interface LayoutContexAction {
    type: string;
    payload: any;
}
export declare const actionType: {
    UIOptionsChanged: string;
    DisableSymbolSelectorChanged: string;
    IsExpandSymbolListChanged: string;
    SymbolsWapperPositionRefChanged: string;
};
export declare const UIOptionsChangedAction: (uiOptions: JimuDrawUIOptions) => {
    type: string;
    payload: JimuDrawUIOptions;
};
export declare const DisableSymbolSelectorChangedAction: (disableSymbolSelector: boolean) => {
    type: string;
    payload: boolean;
};
export declare const IsExpandSymbolListChangedAction: (isExpand: boolean) => {
    type: string;
    payload: boolean;
};
export declare const SymbolsWapperPositionRefChangedAction: (ref: Element) => {
    type: string;
    payload: Element;
};
export declare const init: (initStates: any) => LayoutContextStates;
export declare const reducer: (state: LayoutContextStates, action: LayoutContexAction) => {
    uiOptions: any;
    disableSymbolSelector: boolean;
    isExpandSymbolList: boolean;
    symbolsWapperPositionRef: Element;
} | {
    disableSymbolSelector: any;
    uiOptions: JimuDrawUIOptions;
    isExpandSymbolList: boolean;
    symbolsWapperPositionRef: Element;
} | {
    isExpandSymbolList: any;
    uiOptions: JimuDrawUIOptions;
    disableSymbolSelector: boolean;
    symbolsWapperPositionRef: Element;
} | {
    symbolsWapperPositionRef: any;
    uiOptions: JimuDrawUIOptions;
    disableSymbolSelector: boolean;
    isExpandSymbolList: boolean;
};
export declare const LayoutContext: React.Context<{
    layoutContextStates: LayoutContextStates;
    dispatchLayoutActions: React.Dispatch<LayoutContexAction>;
}>;
export declare const LayoutContextProvider: (props: any) => JSX.Element;
export {};
