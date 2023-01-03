/// <reference types="react" />
import { React } from 'jimu-core';
import { FontFamilyValue } from 'jimu-ui';
interface Props {
    className?: string;
    style?: React.CSSProperties;
    font?: FontFamilyValue;
    'aria-label'?: string;
    onChange?: (font: string) => void;
}
export declare const FontFamily: (props: Props) => React.ReactElement;
export {};
