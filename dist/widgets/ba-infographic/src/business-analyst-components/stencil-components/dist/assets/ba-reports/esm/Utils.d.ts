export default class Utils {
    /** hasText
     *
     *  Returns true if a string contains 1 or more characters that are not whitespace
     *
     * @param s = string
     */
    static hasText(s: string): boolean;
    /** removeChildren
     *
     *  Removes all child dom elements from the parent element
     *
     * @param parent  = DOM element
     */
    static removeChildren: (parent: any) => void;
    static fixId(id: string): string;
}
