import { ThemeBody, ThemeColorationVariants, ThemeLink, ThemeAllColors, ThemeVariables, ThemeHeader, ThemeFooter } from 'jimu-core';
export declare const createColoration: (inputColoration: ThemeColorationVariants, colors: ThemeAllColors) => ThemeColorationVariants;
export declare const createBody: (input: ThemeBody, variables: Partial<ThemeVariables>) => ThemeHeader;
export declare const createHeader: (input: ThemeHeader, variables: Partial<ThemeVariables>) => ThemeHeader;
export declare const createFooter: (input: ThemeFooter, variables: Partial<ThemeVariables>) => ThemeFooter;
export declare const createLink: (input: ThemeLink, colors: ThemeAllColors) => ThemeLink;
