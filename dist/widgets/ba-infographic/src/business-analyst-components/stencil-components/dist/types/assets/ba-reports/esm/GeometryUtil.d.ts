export default class GeometryUtil {
    static getRings(lat: number, lon: number, units: string, values: any): {
        feature: {
            geometry: {
                rings: never[];
            };
            attributes: {
                RING: number;
                DESCRIPTION: string;
                latitude: number;
                longitude: number;
                name: string;
                shortName: string;
                description: string;
                symbol: {
                    color: number[];
                    outline: {
                        color: number[];
                        width: number;
                        type: string;
                        style: string;
                    };
                    type: string;
                    style: string;
                };
            };
        };
        latitude: number;
        longitude: number;
        location: {
            geometry: {
                x: number;
                y: number;
                spatialReference: {
                    wkid: number;
                };
            };
            symbol: {
                type: string;
                width: number;
                height: number;
                xoffset: number;
                yoffset: number;
                contentType: string;
                imageData: string;
            };
        };
        name: string;
        address: string;
        shortName: string;
        locationName: string;
        description: string;
    }[];
    static i18n(tag: string): string;
    static getAnalysisAreaRings(lat: number, lon: number, units: string, values: any, index: number): {
        feature: {
            geometry: {
                rings: never[];
            };
            attributes: {
                RING: number;
                DESCRIPTION: string;
                latitude: number;
                longitude: number;
                name: string;
                shortName: string;
                description: string;
                symbol: {
                    color: number[];
                    outline: {
                        color: number[];
                        width: number;
                        type: string;
                        style: string;
                    };
                    type: string;
                    style: string;
                };
            };
        };
        latitude: number;
        longitude: number;
        location: {
            geometry: {
                x: number;
                y: number;
                spatialReference: {
                    wkid: number;
                };
            };
            symbol: {
                type: string;
                width: number;
                height: number;
                xoffset: number;
                yoffset: number;
                contentType: string;
                imageData: string;
            };
        };
        name: string;
        address: string;
        shortName: string;
        locationName: string;
        description: string;
    };
    static getAnalysisAreasFromRings(data: any): string;
    static getAnalysisAreasFromPolygon(data: any): string;
    /**
     * Takes data returned from getBuffers for DT/WT and returns
     * json analysis areas
     * @param data
     * @return {string}
     */
    static getAnalysisAreasFromEnrichBuffers(data: any): string;
    static getDemoPolygon(): string;
    static _generateRing(lat: number, lon: number, units: string, radius: number): number[][];
}
