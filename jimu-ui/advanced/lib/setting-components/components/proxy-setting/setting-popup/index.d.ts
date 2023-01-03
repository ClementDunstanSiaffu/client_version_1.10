/** @jsx jsx */
import { React, IntlShape, IMThemeVariables, ReactRedux } from 'jimu-core';
export interface ProxySettingPopupProps {
    isOpen: boolean;
    className?: string;
    onFinish: () => Promise<void>;
    onCancel: () => void;
    onToggle: () => void;
}
interface ExtraProps {
    intl: IntlShape;
    theme: IMThemeVariables;
}
export declare const ProxySettingPopup: ReactRedux.ConnectedComponent<import("@emotion/styled").StyledComponent<Pick<Omit<ProxySettingPopupProps & ExtraProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}, "children" | "forwardedRef" | keyof ProxySettingPopupProps> & {
    theme?: IMThemeVariables;
}, {}, {}>, Omit<Pick<Omit<ProxySettingPopupProps & ExtraProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}, "children" | "forwardedRef" | keyof ProxySettingPopupProps> & {
    theme?: IMThemeVariables;
}, never> & ProxySettingPopupProps & ReactRedux.ConnectProps>;
export {};
