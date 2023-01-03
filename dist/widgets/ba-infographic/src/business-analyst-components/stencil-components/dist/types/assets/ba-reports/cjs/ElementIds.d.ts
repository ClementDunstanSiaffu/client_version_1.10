/** ElementIds
 *
 *  This class supports multiple elements or components of the same type in
 *  a session.  It creates unique element/component IDs based on a unique
 *  prefix.
 */
export declare type ElementIdInfo = {
    counter: number;
    id: string;
};
export default class ElementIds {
    static prefixes: {};
    static generateId(prefix: string): ElementIdInfo;
    static hasPrefix(s: string, prefix: string): boolean;
}
