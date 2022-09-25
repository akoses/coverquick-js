import axios, { AxiosInstance } from 'axios';

export interface HeaderParams {
	  [key: string]: string;
}

class Configuration {
	private api_key: string;
	public  api_url: string;
	public  api_version: string;

	private config: AxiosInstance;
	constructor(api_key: string, url: string, api_version: string) {
		this.api_key = api_key;
		this.api_url = url;
		this.api_version = api_version;
		let headers:HeaderParams = {
			'Content-Type': 'application/json',
		}
		if (api_key !== "") {
			headers['x-api-key'] = api_key;
		}
		this.config = axios.create({
			baseURL: `${this.api_url}/${this.api_version}`,
			headers: headers,
			timeout: 10000,
		})
	}
	public getConfig() {
		return this.config;
	}

}

export default Configuration;