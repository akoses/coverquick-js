import axios, { AxiosInstance } from 'axios';

export interface HeaderParams {
	  [key: string]: string;
}

class Configuration {
	private api_key: string;
	public  api_url: string;
	private version: string;
	
	private config: AxiosInstance;
	constructor(api_key: string, url: string, version: string = 'v1') {
		this.api_key = api_key;
		this.api_url = url;
		this.version = version;
		
		let headers:HeaderParams = {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.api_key}`
		}
		
		this.config = axios.create({
			baseURL: `${this.api_url}/${this.version}`,
			headers: headers,
			timeout: 10000,
		})
	}
	public getConfig() {
		return this.config;
	}

}

export default Configuration;