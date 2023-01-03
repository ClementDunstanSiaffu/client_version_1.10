import { BaseAnimation } from './base';
import { AnimationProps, AnimationDirection } from '../types';
export declare class FloatIn extends BaseAnimation {
    direction: AnimationDirection;
    constructor(option?: any);
    initProps(): AnimationProps;
    from(): {
        x: number;
        y: number;
    };
    animateProps(): AnimationProps;
}
