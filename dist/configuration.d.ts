import { AxiosInstance } from 'axios';
declare class Configuration {
    private api_key;
    api_url: string;
    api_version: string;
    private config;
    constructor(api_key: string, url: string, api_version: string);
    getConfig(): AxiosInstance;
}
export default Configuration;
