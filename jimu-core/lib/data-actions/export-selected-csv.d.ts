import { DataRecordSet } from '../data-sources/data-source-interface';
import { ExportSelectedBase } from './export-selected-base';
export default class ExportSelectedCSV extends ExportSelectedBase {
    onExecute(dataSet: DataRecordSet): Promise<boolean>;
}
