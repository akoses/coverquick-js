"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Configuration {
    constructor(api_key, url, version = 'v1') {
        this.api_key = api_key;
        this.api_url = url;
        this.version = version;
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.api_key}`
        };
        this.config = axios_1.default.create({
            baseURL: `${this.api_url}/${this.version}`,
            headers: headers,
            timeout: 10000,
        });
    }
    getConfig() {
        return this.config;
    }
}
exports.default = Configuration;
