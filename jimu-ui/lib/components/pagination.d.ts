/// <reference types="react" />
/** @jsx jsx */
import { React, IntlShape, jsx } from 'jimu-core';
import { PaginationProps as BSPaginationProps } from 'reactstrap/lib/Pagination';
/** Type for the `size` prop of the Pagination component. */
export declare type PaginationSize = 'default' | 'sm' | 'lg';
/** Type for the `type` prop of the previous/next Button component. */
export declare type PrevNextButtonType = 'default' | 'tertiary';
export interface PaginationProps extends BSPaginationProps {
    /**
     * Defines the size of the Pagination.
     * @default default
    */
    size?: PaginationSize;
    /**
     * Total page number
     */
    totalPage: number;
    /**
     * Current page number
     */
    current: number;
    /**
     * Items of per page
     */
    pageSize?: number;
    /**
     * Max items number of per page
     */
    maxPageSize?: number;
    /**
     * If `true`, the Pagination will be disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Specify the sizeChanger selections
     * @default []
     */
    pageSizeOptions?: number[];
    /**
     * If `true`, will show pagination input
     * @default false
     */
    showQuickJumper?: boolean;
    /**
     * If `true`, will show page size select
     * @default false
     */
    showSizeChanger?: boolean;
    /**
     * If `true`, will show simple pager
     * @default false
     */
    simple?: boolean;
    /**
     * Type for the the previous/next Button component.
     * @default default
     */
    buttonType?: PrevNextButtonType;
    /**
     * Callback fires when the page is changed.
     */
    onChangePage?: (current: number) => void;
    /**
     * Callback fires when the page size is changed.
     */
    onPageSizeChange?: (current: number) => void;
}
interface ExtraProps {
    /**
     * @ignore
     */
    intl: IntlShape;
}
interface State {
    goToPageNumber?: number;
    isOpenPageSelect?: boolean;
}
/**
 * The `Pagination` component is a set of presentational components for building pagination UI.
 *
 * ```ts
 * import { Pagination } from 'jimu-ui'
 * ```
 */
export declare class _Pagination extends React.PureComponent<PaginationProps & ExtraProps, State> {
    constructor(props: any);
    static defaultProps: {
        pageSizeOptions: any[];
        buttonType: string;
    };
    handleSwitchPage: (current: number) => void;
    handleSwitchToPrePage: (evt: any) => void;
    handleSwitchToNextPage: (evt: any) => void;
    formatMessage: (id: string, values?: {
        [key: string]: any;
    }) => string;
    renderPaginationItems(current: number, totalPage: number): any[];
    renderSimplePagination: (current: number, totalPage: number) => jsx.JSX.Element;
    renderPrevButton: (current: number) => jsx.JSX.Element;
    renderNextButton: (current: number, totalPage: number) => jsx.JSX.Element;
    renderPageInput: () => jsx.JSX.Element;
    handleGoToPageNumberChange: (pageNumber: number) => void;
    getDropdownMenuStyle: () => import("jimu-core").SerializedStyles;
    renderPageSelect: () => jsx.JSX.Element;
    togglePageSelect: () => void;
    render(): jsx.JSX.Element;
}
export declare const Pagination: import("@emotion/styled").StyledComponent<Pick<Omit<any, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}, string | number | symbol> & {
    theme?: import("jimu-core").IMThemeVariables;
}, {}, {}>;
export {};
