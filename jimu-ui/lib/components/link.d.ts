/// <reference types="react" />
/** @jsx jsx */
import { IMUrlParameters, React, LinkTo } from 'jimu-core';
import { ButtonProps, ButtonType } from './button';
export * from './_link-tip';
export interface LinkProps extends Omit<ButtonProps, 'tag' | 'type' | 'href' | 'onChange'> {
    /**
     * Custom html element to use as the link element.
     * `button` tag does not work when `to` property exists.
     * @default "a"
     */
    tag?: React.ElementType;
    /**
     * Sets button type to one of the pre-defined button types that are used for different purposes, such as `default` and `primary`.
     * @default link
     */
    type?: ButtonType;
    /**
     * Callback fired when the root element is clicked.
     */
    onClick?: (evt: React.MouseEvent<HTMLLinkElement>) => void;
    /**
     * Whether to replace current url directly.
     * @default false
     */
    replace?: boolean;
    /**
     * The link result.
     */
    to?: LinkTo;
    /**
     * URL query paramaters.
     */
    queryObject?: IMUrlParameters;
    /**
     * Reference to the link element.
     */
    innerRef?: React.Ref<HTMLButtonElement>;
    className?: string;
    style?: React.CSSProperties;
    /**
     * Custom style.
     * @deprecated
     */
    customStyle?: customStyle;
    /**
     * Theme style for ButtonProps purpose.
     * @deprecated after extending the button props
     */
    themeStyle?: ButtonProps;
}
interface customStyle {
    style?: React.CSSProperties;
    hoverStyle?: React.CSSProperties;
    visitedStyle?: React.CSSProperties;
}
/**
 * The `Link` component provides an interactive reference to an external or internal resource.
 *
 * ```ts
 * import { Link } from 'jimu-ui'
 * ```
 */
export declare const _Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLButtonElement>>;
/**
 * The `Link` component provides an interactive reference to an external or internal resource.
 *
 * ```ts
 * import { Link } from 'jimu-ui'
 * ```
 */
export declare const Link: import("@emotion/styled").StyledComponent<LinkProps & React.RefAttributes<HTMLButtonElement>, {}, {}>;
