import Configuration from './configuration';
import { AxiosRequestConfig, Axios, AxiosResponse } from 'axios';
declare class CoverQuickRequest extends Axios {
    private config;
    constructor(config: Configuration);
    get(path: string, config?: AxiosRequestConfig): Promise<any>;
    post<T = any, R = AxiosResponse<T, any>, D = any>(path: string, data: T, config?: AxiosRequestConfig): Promise<D>;
    put<T = any, R = AxiosResponse<T, any>, D = any>(path: string, data: T, config?: AxiosRequestConfig): Promise<D>;
    delete<T = any, R = AxiosResponse<T, any>>(path: string, config?: AxiosRequestConfig): Promise<T>;
    call<T = any, R = AxiosResponse<T, any>>(method: string, path: string, data?: T, config?: AxiosRequestConfig): Promise<any>;
}
export default CoverQuickRequest;
