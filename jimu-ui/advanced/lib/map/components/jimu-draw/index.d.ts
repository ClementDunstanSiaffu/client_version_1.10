/// <reference types="react" />
/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import type { JimuDrawProps } from './contexts-bridge';
import { Arrangement } from './components/layouts';
import { JimuDrawCreationMode, DrawingElevationMode3D } from './components/sketch';
import type { JimuDrawingOptions, JimuDrawCreatedDescriptor, DrawingUpdatedDescriptor } from './components/sketch';
import { useMeasurementsUnitsInfos } from './components/measurements';
import type { MeasurementsUnitsInfo, MeasurementsPropsInfo } from './components/measurements';
export { JimuDrawProps, JimuDrawingOptions, JimuDrawCreationMode, Arrangement, DrawingElevationMode3D, JimuDrawCreatedDescriptor, DrawingUpdatedDescriptor, useMeasurementsUnitsInfos };
export type { MeasurementsPropsInfo, MeasurementsUnitsInfo };
export declare const JimuDraw: React.MemoExoticComponent<(props: JimuDrawProps) => jsx.JSX.Element>;
