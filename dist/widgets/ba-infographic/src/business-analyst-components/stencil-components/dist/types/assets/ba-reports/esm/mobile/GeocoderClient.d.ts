export default class GeocoderClient {
    private token;
    private geocoderUrl;
    constructor(token: string, geocoderUrl?: string);
    /**
     * Provides quick search suggestions by single-line text and optional parameters.
     * See https://developers.arcgis.com/rest/geocode/api-reference/geocoding-suggest.htm
     *
     * @param text
     * @param options Optional parameters:
     *    location - origin point used to prefer geocoding candidates; string in format "x,y" (e.g., "-117.196,34.056")
     */
    suggest(text: string, options?: any): Promise<any>;
    /**
     * Geocodes location by single-line address and optional parameters.
     * See https://developers.arcgis.com/rest/geocode/api-reference/geocoding-find-address-candidates.htm
     *
     * @param text Location to be geocoded
     * @param options Optional parameters:
     *    location - origin point used to prefer geocoding candidates; string in format "x,y" (e.g., "-117.196,34.056")
     *    magicKey - key returned from 'suggest' operation for 'text' input; string
     *    maxLocations - maximum number of locations to be returned; number, default is 10
     *    outFields - list of fields to be returned as attributes; string (e.g., "Region,City,Phone")
     */
    geocode(text: string, options?: any): Promise<any>;
    private _request;
}
