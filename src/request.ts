import Configuration from './configuration';
import {AxiosRequestConfig, Axios, AxiosResponse} from 'axios';

class CoverQuickRequest extends Axios {
	private config: Configuration;

	constructor(config: Configuration) {
		super();
		this.config = config;
	}

	public get(path: string, config: AxiosRequestConfig = {}):Promise<any> {
		return this.config.getConfig().get(path, config);
	}

	public post<T = any, R = AxiosResponse<T, any>, D = any>(path: string, data: T, config: AxiosRequestConfig = {}):Promise<D> {
		return this.config.getConfig().post(path, data, config);
	}

	public put<T = any, R = AxiosResponse<T, any>, D = any>(path: string, data: T, config: AxiosRequestConfig = {}):Promise<D> {
		return this.config.getConfig().put(path, data, config);
	}

	public delete<T = any, R = AxiosResponse<T, any>>(path: string, config: AxiosRequestConfig = {}):Promise<T> {
		return this.config.getConfig().delete(path, config);
	}

	public call<T = any, R = AxiosResponse<T, any>>(method: string, path: string, data?: T, config?: AxiosRequestConfig) {
		switch (method) {
			case 'get':
				return this.get(path, config);
			case 'post':
				return this.post(path, data, config);
			case 'put':
				return this.put(path, data, config);
			case 'delete':
				return this.delete(path, config);
			default:
				throw new Error(`Unsupported method ${method}`);
		}
	}
	
}

export default CoverQuickRequest;