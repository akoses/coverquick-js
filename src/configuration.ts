import axios, { AxiosInstance } from 'axios';

export interface HeaderParams {
	  [key: string]: string;
}

class Configuration {
	private api_key: string;
	public  api_url: string;
	
	private config: AxiosInstance;
	constructor(api_key: string, url: string) {
		this.api_key = api_key;
		this.api_url = url;
		
		let headers:HeaderParams = {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${this.api_key}`
		}
		
		this.config = axios.create({
			baseURL: `${this.api_url}`,
			headers: headers,
			timeout: 10000,
		})
	}
	public getConfig() {
		return this.config;
	}

}

export default Configuration;