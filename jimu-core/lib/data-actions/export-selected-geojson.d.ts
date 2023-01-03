import { ExportSelectedBase } from './export-selected-base';
import { DataRecordSet } from '../data-sources/data-source-interface';
export default class ExportSelectedGeoJSON extends ExportSelectedBase {
    isSupported(dataSet: DataRecordSet): Promise<boolean>;
    onExecute(dataSet: DataRecordSet): Promise<boolean>;
}
