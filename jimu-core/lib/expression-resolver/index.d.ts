import { Expression, IMExpression } from '../types/expression';
import { groupPartsByFunction } from './utils';
import { RepeatedDataSource } from '../repeat-data-source-context';
import { DataRecord } from '../data-sources/data-source-interface';
export { groupPartsByFunction as groupExpressionPartsByFunction };
export * from './types';
export declare function resolveExpression(expression: Expression | IMExpression, records: {
    [dataSourceId: string]: DataRecord[];
}, repeatedDataSource: RepeatedDataSource | RepeatedDataSource[]): Promise<string>;
