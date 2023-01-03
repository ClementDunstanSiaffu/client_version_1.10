import { JimuSymbolType, JimuSymbol } from '../index';
export declare const getSymbolModeBySymbol: (symbol: JimuSymbol) => JimuSymbolType;
export declare const preserveDecimalPlaces: (num: number, decimalPlaces: number) => number;
export declare const convertSymbolColorToColorPickerValue: (symbolColor: __esri.Color) => string;
export declare const formatI18nOpacityPctInfo: (nls: string, opacity: string) => string;
