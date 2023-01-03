export declare type InfographicBufferType = 'ring' | 'drivetime' | 'walktime';
export declare type InfographicBufferUnits = 'miles' | 'kilometers' | 'minutes';
export declare type ViewModeType = 'full' | 'stack' | 'slides' | 'stack-all';
export declare type LocationType = {
    lat: number;
    lon: number;
};
declare type IFrameObject = {
    id: string;
    container: any;
    instance: any;
};
export default class InfographicCard {
    fixForLint: string;
    _iFrame: IFrameObject;
    private _idPrefix;
    username: string;
    token: string;
    environment: string;
    reportId: string;
    langCode: string;
    sourceCountry: string;
    bufferType: InfographicBufferType;
    bufferUnits: InfographicBufferUnits;
    bufferSizes: number[];
    _containerShadowRoot: any;
    reportLocation: LocationType;
    reportGeometry: any;
    reportShowHeader: boolean;
    viewMode: ViewModeType;
    reportHeaderButtonPrint: boolean;
    reportHeaderButtonExcel: boolean;
    reportHeaderButtonZoomLevel: boolean;
    reportHeaderButtonFullscreen: boolean;
    reportHeaderButtonImage: boolean;
    reportHeaderButtonPdf: boolean;
    reportHeaderButtonDynHtml: boolean;
    reportColorBackground: string;
    reportColorHeader: string;
    reportColorHeaderText: string;
    runReportOnClick: boolean;
    showSearch: boolean;
    constructor(username: string, token: string, env: string, options: string);
    setShadowRoot(root: any): void;
    /**
     * resetOptions - returns all options to their defaults
     */
    resetOptions(): void;
    /** setOptions
     *    Sets one or more config and display options.  Only the options that are
     *    found in the options argument get changed by default.   If the 'reset'
     *    flag is set 'true' then all the options will be reset back to their
     *    defaults before setting values found in 'options'.
     *
     * @param options   JSON string with only the options to be changed
     * @param reset     boolean, reset options to default before applying 'options'
     */
    setOptions(options: string, reset?: boolean): boolean;
    private _createInfographicPlayerStyleOptions;
    _validateSetup(): boolean;
    _checkBuffersAssignDefaults(): void;
    /** regenerateContent
     *    Rebuilds the infographic Card using current settings
     *
     * @param suggested   boolean, if true = will NOT render unless infographic has
     *                    already been rendered before
     */
    regenerateContent(suggested?: boolean): Promise<void>;
    _validateReportGeometry(data: any): boolean;
    /** _getReportGeometryAnalysisAreas
     *
     *  Take the reportGeometry JS object and generates geometry json for
     *  Drivetimes, Walktimes, or Rings
     */
    _getReportGeometryAnalysisAreas(): Promise<string>;
    _checkBuffers(): void;
    generateNotReadyHtml(): string;
    loadInfographic(id: string, container: any, location: LocationType, geometry: any, reportId: string): Promise<void>;
    updateInfographic(): void;
    /**  setReportLocation
     *      Updates the report location (lat/lon) for the report. The also
     *      forces a refresh
     *
     * @param loc see LocationType
     */
    setReportLocation(loc: LocationType): void;
    /**  setReportGeometry
     *      Updates the report geometry for the report and
     *      forces a refresh
     *
     * @param loc geometry object
     */
    setReportGeometry(geometry: any): void;
    /** generateBuffers
     *    Generates drivetime or walktime buffers using the InfographicCard properties
     *
     *    Result: geometry is saved into this InfographicCard's reportGeometry
     *    Return: object = {
     *      success:boolean,
     *      error:string
     *    }
     */
    generateBuffers(): Promise<{
        value: any;
        units: any;
        rings: any;
    }[] | {
        success: boolean;
        error: string;
    } | {
        error: string;
        success?: undefined;
    } | null | undefined>;
}
export {};
