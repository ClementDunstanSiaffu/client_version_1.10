import * as React from 'react';
import { ExportToItemBase } from './export-item-base';
import { DataRecordSet } from '../data-sources/data-source-interface';
export default class ExportToItem extends ExportToItemBase {
    onExecute(dataSet: DataRecordSet): Promise<boolean | React.ReactElement>;
    handleConfirm(name: string, folderId: string, dataSet: DataRecordSet): Promise<boolean>;
}
