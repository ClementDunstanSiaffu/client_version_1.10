/// <reference types="react" />
/** @jsx jsx */
import { React, jsx } from 'jimu-core';
export declare type JimuSymbol = JimuPointSymbol | JimuPolylineSymbol | JimuPolygonSymbol;
export declare type JimuPointSymbol = (__esri.SimpleMarkerSymbol | __esri.PictureMarkerSymbol | __esri.PointSymbol3D);
export declare type JimuPolylineSymbol = (__esri.SimpleLineSymbol | __esri.LineSymbol3D);
export declare type JimuPolygonSymbol = (__esri.SimpleFillSymbol | __esri.PolygonSymbol3D);
export declare enum JimuSymbolType {
    Point = "Point",
    Polyline = "Polyline",
    Polygon = "Polygon"
}
interface Props {
    className?: string;
    symbol?: JimuSymbol;
    jimuSymbolType: JimuSymbolType;
    onPointSymbolChanged?: (symbol: JimuPointSymbol) => void;
    onPolylineSymbolChanged?: (symbol: JimuPolylineSymbol) => void;
    onPolygonSymbolChanged?: (symbol: JimuPolygonSymbol) => void;
    isShow?: boolean;
    onA11yReFocus?: () => void;
}
export declare const SymbolList: React.MemoExoticComponent<(props: Props) => jsx.JSX.Element>;
export {};
