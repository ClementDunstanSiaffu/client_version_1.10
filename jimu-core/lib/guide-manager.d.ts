import * as React from 'react';
declare type GuideComponent = React.ComponentType<any>;
export default class GuideManager {
    private guideModules;
    private static instance;
    static getInstance(): GuideManager;
    registerGuideModule(entryName: string, guideModule: GuideComponent): void;
    getGuideModule(entryName: string): Promise<GuideComponent>;
}
export {};
