import { DataAction, RegisterDataActionOptions, BatchDataAction, DummnyBatchDataAction } from './base-data-action';
import { DataRecordSet } from './data-sources/data-source-interface';
import { IMWidgetJson } from './types/app-config';
import { ImmutableArray } from 'seamless-immutable';
export default class DataActionManager {
    static instance: DataActionManager;
    static getInstance(): DataActionManager;
    private actions;
    private batchActions;
    private actionClassPromises;
    getActions(): DataAction[];
    getBatchActions(): BatchDataAction[];
    getSupportedActions(widgetId: string, dataSet: DataRecordSet): Promise<{
        [key: string]: DataAction[];
    }>;
    getSupportedBatchActions(widgetId: string, dataSets: DataRecordSet[]): Promise<{
        [key: string]: BatchDataAction[];
    }>;
    private _getSupportedActions;
    private getAllWidgetsInSameRootContainer;
    /**
     * This method works for both action and batch action
     * @param actionIdentify format is `${widgetName}.${actionName}`
     * @param excludedActions
     */
    isActionExcluded(actionIdentify: string, excludedActions?: string[] | ImmutableArray<string>): boolean;
    /**
     * Register both the DataAction and BatchDataAction for a widget
     */
    registerWidgetActions(widgetJson: IMWidgetJson): Promise<Array<DataAction | BatchDataAction>>;
    registerAction(options: RegisterDataActionOptions): Promise<DataAction>;
    registerBatchAction(options: RegisterDataActionOptions): Promise<DummnyBatchDataAction>;
    _registerAction(options: RegisterDataActionOptions, isBatch: boolean): Promise<DataAction | BatchDataAction>;
    destroyWidgetActions(widgetId: string): void;
    private loadActionClass;
    private testActionSupportData;
    private testBatchActionSupportData;
}
