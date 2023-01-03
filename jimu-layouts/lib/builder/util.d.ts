import { LayoutInfo, LayoutItemConstructorProps } from 'jimu-core';
export declare function canDropAtPlaceholder(draggingItem: LayoutItemConstructorProps): boolean;
export declare function dropAtPlaceholder(placeholderLayoutInfo: LayoutInfo, draggingItem: LayoutItemConstructorProps): void;
export declare function addWidgetInPlaceholder(placeholderLayoutInfo: LayoutInfo, uri: string): Promise<void>;
