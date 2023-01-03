declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: any;
  }
}

declare module 'esri/widgets/CoordinateConversion/support/formatUtils' {
  export function generateDefaultFormats(parameter: any);
}
declare module 'esri/widgets/CoordinateConversion/support/coordinateConversionUtils' {
  export interface ToGeoCoordinateStringParameters {
    location: __esri.Point;
    formatName: string;
    geometryServicePromise: Promise<__esriGeometryService>;
  }
  // { coordinate: string; spatialReference: SpatialReference; formatName: string; geometryServicePromise: Promise<any>; }
  export function fromGeoCoordinateString(parameters: any);
}

/// API extension
declare namespace __esri {
  export interface SceneView {
    /// esri/views/3d/state/ViewState
    state?: {
      camera: any
      cameraController: any
      isGlobal: boolean
      isLocal: boolean
    }
    /// esri/views/3d/support/RenderCoordsHelper
    renderCoordsHelper?: {
      worldUpAtPosition: function
    }
  }

  export interface CoordinateConversionViewModel {
    pause: function;
    messages: null;
  }

  export interface Format {
    _project: function
  }

  export interface FormatProperties {
    getConversionStrategy?: () => 'server' | 'client';
  }

  export interface ConversionInfo {
    convert?: (point: __esri.Point) => Promise<__esri.Position>;
    reverseConvert?: (input: string) => Promise<__esri.AddressCandidate>;
  }
}