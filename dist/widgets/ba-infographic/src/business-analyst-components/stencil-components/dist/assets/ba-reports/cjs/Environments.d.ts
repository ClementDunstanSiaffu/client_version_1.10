export default class Environments {
    private static _env;
    static setEnvironment(env: string): void;
    static getEnvironment(): string;
    private static getPortalBase;
    /**
     * Returns appropriate request URL for the subdomain
     *
     * @param subDomain - one of 'geocode', 'arcgis', or 'geoenrich'
     */
    static getUrl(subDomain: string): string;
}
