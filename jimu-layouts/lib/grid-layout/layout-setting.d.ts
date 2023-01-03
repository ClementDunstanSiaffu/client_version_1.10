/// <reference types="react" />
/** @jsx jsx */
import { React, ReactRedux, IMSizeModeLayoutJson, IMThemeVariables } from 'jimu-core';
interface Props {
    layouts: IMSizeModeLayoutJson;
    appTheme: IMThemeVariables;
    formatMessage: (id: string) => string;
}
interface StateToProps {
    layoutSetting: any;
}
declare class _Setting extends React.PureComponent<Props & StateToProps> {
    handlePaddingChange: (value: any) => void;
    handleSettingChange: (prop: string, value: any) => void;
    getLayoutIds(): string[];
    render(): JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof _Setting, Omit<React.ClassAttributes<_Setting> & Props & StateToProps, "layoutSetting"> & Props & ReactRedux.ConnectProps>;
export default _default;
