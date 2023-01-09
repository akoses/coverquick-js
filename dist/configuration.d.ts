import { AxiosInstance } from 'axios';
export interface HeaderParams {
    [key: string]: string;
}
declare class Configuration {
    private api_key;
    api_url: string;
    private version;
    private config;
    constructor(api_key: string, url: string, version?: string);
    getConfig(): AxiosInstance;
}
export default Configuration;
