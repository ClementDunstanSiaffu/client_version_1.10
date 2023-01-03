import { TextFontStyle, BorderStyle } from 'jimu-ui';
declare type NumbericValueWithUnit = string;
export declare type Color = string;
export declare type Size = NumbericValueWithUnit | 0;
export declare type LineHeight = number | NumbericValueWithUnit;
export declare enum ThemeBoxStyleKeys {
    Color = "color",
    Background = "bg",
    Border = "border",
    BorderRadius = "borderRadius",
    Shadow = "shadow"
}
export declare type ThemeBoxStyles = {
    color?: Color;
    bg?: Color;
    border?: BorderStyle;
    borderRadius?: Size;
    shadow?: string;
    decoration?: string;
    fontWeight?: string;
} & Omit<TextFontStyle, 'size' | 'font' | 'color' | 'background' | 'letterspace' | 'linespace' | 'align'>;
export interface ThemeBoxStylesByState {
    default?: ThemeBoxStyles;
    hover?: ThemeBoxStyles;
    active?: ThemeBoxStyles;
    disabled?: ThemeBoxStyles & {
        opacity?: number;
    };
    focus?: ThemeBoxStyles;
}
export {};
