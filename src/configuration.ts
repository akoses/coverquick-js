import axios, { AxiosInstance } from 'axios';

class Configuration {
	private api_key: string;
	public  api_url: string;
	public  api_version: string;

	private config: AxiosInstance;
	constructor(api_key: string) {
		this.api_key = api_key;
		this.api_url = 'https://api.coverquick.co';
		this.api_version = 'beta';
		this.config = axios.create({
			baseURL: `${this.api_url}/${this.api_version}`,
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': this.api_key
			},
			timeout: 30000,

		})
	}
	public getConfig() {
		return this.config;
	}

}

export default Configuration;