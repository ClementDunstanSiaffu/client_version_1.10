/// <reference types="react" />
import { ThemeModule } from '../type';
interface GlobalStyleProps {
    isRTL?: boolean;
    module: ThemeModule;
    module2?: ThemeModule;
}
export declare const GlobalStyle: (props: GlobalStyleProps) => JSX.Element;
export {};
