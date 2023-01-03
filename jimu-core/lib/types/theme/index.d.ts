import { ImmutableObject } from 'seamless-immutable';
import { BorderStyle } from 'jimu-ui';
import { Color, LineHeight, Size } from './common';
import { ThemeComponents } from './components';
import { ThemeArcGIS, ThemeArcGISComponents } from './arcgis';
export type { Color, Size as ThemeSize, Color as ThemeColor };
export * from './components';
export * from './arcgis';
export type { ThemeBoxStyleKeys, ThemeBoxStyles, ThemeBoxStylesByState } from './common';
export interface ThemeTypographyBase {
    fontFamilyBase?: string;
    fontSizeRoot?: Size;
    fontSizeBase?: Size;
    sizes?: {
        display1?: Size;
        display2?: Size;
        display3?: Size;
        display4?: Size;
        display5?: Size;
        display6?: Size;
        body1?: Size;
        body2?: Size;
        caption1?: Size;
        caption2?: Size;
    };
    weights?: {
        extraLight?: string;
        light?: string;
        medium?: string;
        bold?: string;
        extraBold?: string;
    };
    lineHeights?: {
        sm?: LineHeight;
        medium?: LineHeight;
        lg?: LineHeight;
    };
    colors?: {
        title?: Color;
        normal?: Color;
        caption?: Color;
        disabled?: Color;
    };
}
export interface ThemeFontStyleBase {
    fontFamily?: string;
    fontWeight?: string;
    fontSize?: Size;
    fontStyle?: string;
    lineHeight?: LineHeight;
    color?: Color;
}
/** @deprecated */
export declare enum ThemeFontVariantKeys {
    Display1 = "display1",
    Display2 = "display2",
    Display3 = "display3",
    Display4 = "display4",
    Display5 = "display5",
    Display6 = "display6",
    Body1 = "body1",
    Body2 = "body2",
    Caption1 = "caption1",
    Caption2 = "caption2"
}
export interface ThemeFontVariant extends ThemeFontStyleBase {
}
export declare type ThemeFontVariants = {
    [key in ThemeFontVariantKeys]?: ThemeFontVariant;
};
export interface ThemeTypography extends ThemeTypographyBase {
    variants?: ThemeFontVariants;
}
export declare enum ThemeCommonColorKeys {
    White = "white",
    Black = "black",
    Transparent = "transparent"
}
export declare enum ThemeThemeAlertColorKeys {
    Success = "success",
    Info = "info",
    Warning = "warning",
    Danger = "danger"
}
export declare enum ThemeThemeMainColorKeys {
    Primary = "primary",
    Secondary = "secondary",
    Light = "light",
    Dark = "dark"
}
export declare enum ThemeThemeColorKeys {
    Primary = "primary",
    Secondary = "secondary",
    Light = "light",
    Dark = "dark",
    Success = "success",
    Info = "info",
    Warning = "warning",
    Danger = "danger"
}
export declare type ThemeColorationType = 'minimal' | 'default';
export declare type ThemeColorationVariants = {
    [index in ThemeColorationType]?: {
        header: {
            color?: Color;
            bg?: Color;
        };
        body?: {
            color?: Color;
            bg?: Color;
        };
        footer?: {
            color?: Color;
            bg?: Color;
        };
    };
};
export declare type ThemeCommonColors = {
    [index in ThemeCommonColorKeys]?: Color;
};
export declare type ThemeThemeColors = {
    [index in ThemeThemeColorKeys]?: Color;
};
export interface ThemeColorPaletteItem {
    100?: Color;
    200?: Color;
    300?: Color;
    400?: Color;
    500?: Color;
    600?: Color;
    700?: Color;
    800?: Color;
    900?: Color;
}
export declare type PaletteLightnessRange = [number, number];
export declare type ThemeColorPalette = {
    [index in ThemeThemeColorKeys]?: ThemeColorPaletteItem;
};
export interface ThemeAllColors extends ThemeCommonColors, ThemeThemeColors {
    palette?: ThemeColorPalette;
    orgSharedColors?: SharedThemeElementsVariables;
    /** @deprecated use theme.colors.palette instead */
    getPalette?: () => IMThemeColorPalette;
    /** @deprecated use theme.colors.orgSharedColors instead */
    getOrgShareColors?: () => IMSharedThemeElementsVariables;
}
export interface ThemeBody extends ThemeFontStyleBase {
    color?: Color;
    bg?: Color;
}
export interface ThemeHeader {
    color?: Color;
    bg?: Color;
}
export interface ThemeFooter {
    color?: Color;
    bg?: Color;
}
export interface ThemeLink {
    color?: Color;
    decoration?: string;
    hover?: {
        color?: Color;
        decoration?: string;
    };
}
export interface ThemeSurface {
    bg?: Color;
    border?: BorderStyle;
    shadow?: string;
}
export interface ThemeSurfaces {
    1?: ThemeSurface;
    2?: ThemeSurface;
    3?: ThemeSurface;
}
export interface ThemeSizes {
    0?: Size;
    1?: Size;
    2?: Size;
    3?: Size;
    4?: Size;
    5?: Size;
}
export interface ThemeBorderRadiuses {
    none?: Size;
    sm?: Size;
    default?: Size;
    lg?: Size;
    circle?: Size;
    pill?: Size;
}
export interface ThemeBoxShadows {
    none?: string;
    default?: string;
    sm?: string;
    lg?: string;
}
export interface ThemeFocusedStyles {
    width?: string | number;
    color?: Color;
    offset?: string | number;
}
export interface SharedThemeElementsVariables {
    header?: {
        bg?: Color;
        color?: Color;
    };
    body?: {
        bg?: Color;
        color?: Color;
        link?: Color;
    };
    button?: {
        bg?: Color;
        color?: Color;
    };
}
export interface SharedThemeVariables extends SharedThemeElementsVariables {
    logo?: {
        small?: string;
        link?: string;
    };
    fonts?: {
        base?: {
            url?: string;
            family?: string;
        };
        heading?: {
            url?: string;
            family?: string;
        };
    };
}
export declare type IMThemeTypography = ImmutableObject<ThemeTypography>;
export declare type IMThemeThemeColors = ImmutableObject<ThemeThemeColors>;
export declare type IMThemeColorPalette = ImmutableObject<ThemeColorPalette>;
export declare type IMThemeAllColors = ImmutableObject<ThemeAllColors>;
export declare type IMThemeColorationVariants = ImmutableObject<ThemeColorationVariants>;
export declare type IMThemeFontStyleBase = ImmutableObject<ThemeFontStyleBase>;
export declare type IMThemeFontVariant = ImmutableObject<ThemeFontVariant>;
export declare type IMThemeFontVariants = ImmutableObject<ThemeFontVariants>;
export declare type IMThemeSizes = ImmutableObject<ThemeSizes>;
export declare type IMThemeBorder = ImmutableObject<BorderStyle>;
export declare type IMThemeBorderRadiuses = ImmutableObject<ThemeBorderRadiuses>;
export declare type IMThemeBoxShadows = ImmutableObject<ThemeBoxShadows>;
export declare type IMThemeFocusedStyles = ImmutableObject<ThemeFocusedStyles>;
export declare type IMThemeHeader = ImmutableObject<ThemeHeader>;
export declare type IMThemeFooter = ImmutableObject<ThemeFooter>;
export declare type IMThemeBody = ImmutableObject<ThemeBody>;
export declare type IMThemeLink = ImmutableObject<ThemeLink>;
export declare type IMThemeSurfaces = ImmutableObject<ThemeSurfaces>;
export declare type IMThemeComponents = ImmutableObject<ThemeComponents>;
export declare type IMThemeArcGIS = ImmutableObject<ThemeArcGIS>;
export declare type IMThemeArcGISComponents = ImmutableObject<ThemeArcGISComponents>;
export declare type IMSharedThemeElementsVariables = ImmutableObject<SharedThemeElementsVariables>;
export declare type IMSharedThemeVariables = ImmutableObject<SharedThemeVariables>;
/**
 * @deprecated Use `IMThemeVariables` instead.
 */
export interface ThemeVariables {
    darkTheme?: boolean;
    coloration?: ThemeColorationType;
    colorationVariants?: ThemeColorationVariants;
    typography?: ThemeTypography;
    colors?: ThemeAllColors;
    spacer?: Size;
    sizes?: ThemeSizes;
    gutters?: ThemeSizes;
    borderRadiuses?: ThemeBorderRadiuses;
    boxShadows?: ThemeBoxShadows;
    focusedStyles?: ThemeFocusedStyles;
    surfaces?: ThemeSurfaces;
    header?: ThemeHeader;
    footer?: ThemeFooter;
    body?: ThemeBody;
    link?: ThemeLink;
    border?: BorderStyle;
    components?: ThemeComponents;
    arcgis?: ThemeArcGIS;
}
export declare type IMThemeVariables = ImmutableObject<ThemeVariables>;
export interface ThemeInfo {
    name?: string;
    label?: string;
    uri?: string;
    colors?: IMThemeThemeColors;
    font?: IMThemeFontStyleBase;
    i18nLabel?: {
        [locale: string]: string;
    };
}
export declare type IMThemeInfo = ImmutableObject<ThemeInfo>;
