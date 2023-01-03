import { MeasurementsRuntimeInfo, ArealUnits, LinearUnits, MModes } from '../../../measurements/constraints';
import { MeasurementsNls } from '../../../measurements/utils/m-label-nls-hooks';
import { CreatToolActions } from '..';
import { ProjectionTools } from '../../../measurements/utils/projection-converter-provider';
export declare const isAddMResults: (measurementsRuntimeInfo: MeasurementsRuntimeInfo) => boolean;
export declare const addMResults: (mode: MModes, graphics: __esri.Graphic[], measurementsLayer: __esri.FeatureLayer, measurementsRuntimeInfo: MeasurementsRuntimeInfo, IsDeletingFlag: boolean, geometryEngine: __esri.geometryEngine, coordinateFormatter: __esri.coordinateFormatter, projectionTools: ProjectionTools, Graphic: __esri.GraphicConstructor, i18nFormatNumber: any, MEASUREMENTS_NLS: MeasurementsNls, isUpdate: boolean) => Promise<void>;
export declare const updateMResults: (graphics: __esri.Graphic[], measurementsLayer: __esri.FeatureLayer, measurementsRuntimeInfo: MeasurementsRuntimeInfo, IsDeletingFlag: boolean, geometryEngine: __esri.geometryEngine, coordinateFormatter: __esri.coordinateFormatter, projectionTools: ProjectionTools, Graphic: __esri.GraphicConstructor, i18nFormatNumber: any, MEASUREMENTS_NLS: MeasurementsNls) => Promise<void>;
export declare const getMResultsFeatures: (graphic: __esri.Graphic, measurementsLayer: __esri.FeatureLayer) => Promise<__esri.FeatureSet>;
export declare const clearMResultsByUuids: (graphics: __esri.Graphic[], measurementsLayer: __esri.FeatureLayer) => Promise<void>;
export declare const clearAllMResults: (measurementsLayer: __esri.FeatureLayer) => void;
export declare const geodesicLength: (geometry: __esri.Geometry, linearUnit: LinearUnits, geometryEngine: __esri.geometryEngine) => number;
export declare const geodesicArea: (geometry: __esri.Geometry, arealUnit: ArealUnits, geometryEngine: __esri.geometryEngine) => number;
export declare const planarLength: (geometry: __esri.Geometry, linearUnit: LinearUnits, geometryEngine: __esri.geometryEngine) => number;
export declare const planarArea: (geometry: __esri.Geometry, arealUnit: ArealUnits, geometryEngine: __esri.geometryEngine) => number;
export declare const _getMModesByActivedTool: (currentActiveToolState: CreatToolActions) => MModes;
export declare const getMModesByGraphic: (graphic: __esri.Graphic) => MModes;
