import { IMSqlExpression, SqlResult, SqlExpression } from '../../types/sql-expression';
import { IntlShape } from 'react-intl';
import { VirtualDateType } from '../../utils/date-utils';
import { DataSource } from '../../data-sources/data-source-interface';
/**
 * @ignore
 * Get real date or date extent by a virtual date.
 */
export declare function getRealDateByVirtualDate(virtualDate: VirtualDateType, intl: any): Date | Date[];
/**
 * Get ArcGIS SQL and a user-friendly displaySQL from a SQL Expression.
 * `sql` could be used to query on a ArcGIS service.
 * `displaySQL` could be used for UI.
 * intl is just used for UT.
 */
export declare function getArcGISSQL(sqlExprObj: IMSqlExpression, dataSource: DataSource, intl?: IntlShape): SqlResult;
/**
 * @ignore
 */
export declare function parserSQL(sql: string): SqlExpression;
export declare function containsNonLatinCharacter(string: any): boolean;
/**
 * @ignore
 * Get Local time offset from UTC.
 */
export declare function getTimeOffset(): number;
