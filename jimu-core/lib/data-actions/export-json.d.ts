import * as React from 'react';
import { ExportBase } from './export-base';
import { DataSource, DataRecordSet } from '../data-sources/data-source-interface';
export default class ExportJson extends ExportBase {
    onExecute(dataSet: DataRecordSet): Promise<boolean | React.ReactElement>;
    doExport(dataSource: DataSource, fields?: string[]): Promise<boolean>;
}
