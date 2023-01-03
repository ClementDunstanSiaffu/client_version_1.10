import { ThemeSize, ThemeSizes } from 'jimu-core';
export declare const spacer: ThemeSize;
export declare const sizes: ThemeSizes;
export declare function calculateSizes(newSpacer?: ThemeSize): ThemeSizes;
export declare const gutters: ThemeSizes;
export declare function calculateGutters(newSpacer?: ThemeSize): ThemeSizes;
export declare const createSizes: (spacer: string, options?: ThemeSizes) => ThemeSizes;
export declare const createGutters: (spacer: string, options?: ThemeSizes) => ThemeSizes;
