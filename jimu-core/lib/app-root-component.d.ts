/** @jsx jsx */
import * as React from 'react';
import { ImmutableObject, ImmutableArray } from 'seamless-immutable';
import { IMCustomThemeJson, PageJson, IMDialogJson } from './types/app-config';
import { PortalNeedToRegisterClinetId, LoadAppConfigError } from './types/state';
import { UrlParameters } from './types/url-parameters';
import { IntlShape } from 'react-intl';
import { LoadingType } from './types/common';
interface StateProps {
    dispatch?: any;
    appConfigLoaded: boolean;
    customTheme: IMCustomThemeJson;
    appPath: string;
    queryObject: UrlParameters;
    pages: ImmutableObject<{
        [pageId: string]: PageJson;
    }>;
    isRTL: boolean;
    isBusy: boolean;
    loadingType: LoadingType;
    dialogJson: IMDialogJson;
    currentDialogId: string;
    hasNewVersion: boolean;
    userLocaleChanged: boolean;
    hasPrivilege: boolean;
    privilegeError: string;
    loadAppConfigError: LoadAppConfigError;
    portalsNeedToRegisterClinetId: ImmutableArray<PortalNeedToRegisterClinetId>;
    appConfigVersion: string;
}
interface IntlProps {
    intl: IntlShape;
}
declare const _default: React.FC<import("react-intl").WithIntlProps<Omit<StateProps & IntlProps, "isRTL" | "hasNewVersion" | "appPath" | "queryObject" | "userLocaleChanged" | "hasPrivilege" | "privilegeError" | "loadAppConfigError" | "portalsNeedToRegisterClinetId" | "currentDialogId" | "isBusy" | "loadingType" | "pages" | "customTheme" | "dispatch" | "dialogJson" | "appConfigLoaded" | "appConfigVersion"> & IntlProps & import("react-redux").ConnectProps>> & {
    WrappedComponent: React.ComponentType<Omit<StateProps & IntlProps, "isRTL" | "hasNewVersion" | "appPath" | "queryObject" | "userLocaleChanged" | "hasPrivilege" | "privilegeError" | "loadAppConfigError" | "portalsNeedToRegisterClinetId" | "currentDialogId" | "isBusy" | "loadingType" | "pages" | "customTheme" | "dispatch" | "dialogJson" | "appConfigLoaded" | "appConfigVersion"> & IntlProps & import("react-redux").ConnectProps>;
};
export default _default;
