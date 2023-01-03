/** @jsx jsx */
import { jsx, ImmutableObject } from 'jimu-core';
import { BorderStyle, FourSidesUnit } from 'jimu-ui';
export interface ThemeBorderSectionProps {
    /**
     * The value of this component, including the border color, line style and width
     */
    border?: BorderStyle;
    borderRadius?: FourSidesUnit | ImmutableObject<FourSidesUnit>;
    /**
     * Invoked when the border value changes.
     */
    onBorderChange?: (value: BorderStyle) => void;
    onBorderRasiusChange?: (value: FourSidesUnit | ImmutableObject<FourSidesUnit>) => void;
    /**
     * Defines the class names added to the element.
     */
    className?: string;
}
export declare function ThemeBorderSection(props: ThemeBorderSectionProps): jsx.JSX.Element;
