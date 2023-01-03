interface DeepmergeOptions {
    clone?: boolean;
}
export declare const deepmerge: <T>(target: T, source: unknown, options?: DeepmergeOptions) => T;
export {};
