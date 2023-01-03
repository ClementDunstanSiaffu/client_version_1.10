import * as React from 'react';
import { ExportBase } from './export-base';
import { DataSource, DataRecordSet } from '../data-sources/data-source-interface';
export default class ExportGeoJSON extends ExportBase {
    isSupported(dataSet: DataRecordSet): Promise<boolean>;
    onExecute(dataSet: DataRecordSet): Promise<boolean | React.ReactElement>;
    doExport(dataSource: DataSource, fields?: string[]): Promise<boolean>;
}
