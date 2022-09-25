"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Configuration {
    constructor(api_key, url, api_version) {
        this.api_key = api_key;
        this.api_url = url;
        this.api_version = api_version;
        this.config = axios_1.default.create({
            baseURL: `${this.api_url}/${this.api_version}`,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.api_key
            },
            timeout: 10000,
        });
    }
    getConfig() {
        return this.config;
    }
}
exports.default = Configuration;
