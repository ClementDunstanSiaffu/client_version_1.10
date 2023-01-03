/** @jsx jsx */
import { React, IntlShape, ReactRedux } from 'jimu-core';
import { DataSourceListProps } from '../../types';
interface ExtraProps {
    intl: IntlShape;
}
export declare const DataSourceList: import("@emotion/styled").StyledComponent<(Omit<import("react-intl").WithIntlProps<DataSourceListProps & ExtraProps>, never> & DataSourceListProps & ReactRedux.ConnectProps) | (Omit<import("react-intl").WithIntlProps<DataSourceListProps & ExtraProps>, never> & DataSourceListProps & ReactRedux.ConnectProps & {
    children?: React.ReactNode;
}), {}, {}>;
export {};
