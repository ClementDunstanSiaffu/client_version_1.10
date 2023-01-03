import { ThemeAllColors, ThemeBoxShadows, ThemeSurfaces } from 'jimu-core';
export declare const shadows: ThemeBoxShadows;
export declare const crateShadows: (inputShadows?: ThemeBoxShadows) => {
    none?: string;
    default?: string;
    sm?: string;
    lg?: string;
};
export declare const createSurfaces: (inputSurfaces: ThemeSurfaces, shadows: ThemeBoxShadows, colors: ThemeAllColors) => ThemeSurfaces;
