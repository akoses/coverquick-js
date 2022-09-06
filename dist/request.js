"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class CoverQuickRequest extends axios_1.Axios {
    constructor(config) {
        super();
        this.config = config;
    }
    get(path, config = {}) {
        return this.config.getConfig().get(path, config);
    }
    post(path, data, config = {}) {
        return this.config.getConfig().post(path, data, config);
    }
    put(path, data, config = {}) {
        return this.config.getConfig().put(path, data, config);
    }
    delete(path, config = {}) {
        return this.config.getConfig().delete(path, config);
    }
    call(method, path, data, config) {
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
exports.default = CoverQuickRequest;
