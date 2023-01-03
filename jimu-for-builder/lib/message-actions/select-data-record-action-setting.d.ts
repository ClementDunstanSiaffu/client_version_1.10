/// <reference types="react" />
/** @jsx jsx */
import { React, ActionSettingProps, IMThemeVariables, ReactRedux } from 'jimu-core';
import { IMConfig } from './type';
declare const _default: ReactRedux.ConnectedComponent<React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & {
    theme?: IMThemeVariables;
}>, Omit<Pick<any, string | number | symbol> & {
    theme?: IMThemeVariables;
}, "dataSourcesInfo" | "dataSources" | "dispatch"> & ActionSettingProps<IMConfig> & ReactRedux.ConnectProps>;
export default _default;
