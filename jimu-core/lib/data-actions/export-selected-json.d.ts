import { ExportSelectedBase } from './export-selected-base';
import { DataRecordSet } from '../data-sources/data-source-interface';
export default class ExportSelectedJson extends ExportSelectedBase {
    onExecute(dataSet: DataRecordSet): Promise<boolean>;
}
