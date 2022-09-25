import axios, { AxiosInstance } from 'axios';

class Configuration {
	private api_key: string;
	public  api_url: string;
	public  api_version: string;

	private config: AxiosInstance;
	constructor(api_key: string, url: string, api_version: string) {
		this.api_key = api_key;
		this.api_url = url;
		this.api_version = api_version;
		this.config = axios.create({
			baseURL: `${this.api_url}/${this.api_version}`,
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': this.api_key
			},
			timeout: 10000,
		})
	}
	public getConfig() {
		return this.config;
	}

}

export default Configuration;