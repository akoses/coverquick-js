"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __importDefault(require("./configuration"));
const request_1 = __importDefault(require("./request"));
const endpoints_1 = __importDefault(require("./endpoints"));
class CoverQuick {
    constructor(api_key = "", url = "https://api.coverquick.co", version = "v1") {
        this._api_key = api_key;
        this.config = new configuration_1.default(this._api_key, url, version);
        this.request = new request_1.default(this.config);
    }
    /**
     * @param description
     * @param jobId
     * @returns JobDescriptionResponse
     * @memberof CoverQuick
     */
    createJobDescription(description, jobId) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.createJobDescription.method, endpoints_1.default.createJobDescription.path, { description, job_id: jobId });
            return res.data;
        });
    }
    checkAPIVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.request.call(endpoints_1.default.checkAPIVersion.method, endpoints_1.default.checkAPIVersion.path);
                return res.data;
            }
            catch (e) {
                return "unknown";
            }
        });
    }
    /**
     * @param content
     * @param jobId
     * @param jobTitle
     * @param companyName
     * @param type
     */
    createResume(content, jobId, { jobTitle = "", companyName = "", type = "", indicesState = {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.createResume.method, endpoints_1.default.createResume.path, {
                content,
                job_id: jobId,
                job_title: jobTitle,
                company_name: companyName,
                type,
                indices_state: indicesState,
                task_id: jobId + "_resume",
            });
            return res.data;
        });
    }
    /**
     * @param content
     * @param jobId
     * @param jobTitle
     * @param companyName
     * @param type
     * @returns
    */
    createCoverLetter(content, jobId, { jobTitle = "", companyName = "", type = "", }) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.createCoverLetter.method, endpoints_1.default.createCoverLetter.path, {
                content,
                job_id: jobId,
                job_title: jobTitle,
                company_name: companyName,
                type,
                task_id: jobId + "_cover_letter",
            });
            return res.data;
        });
    }
    task(task_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.task(task_id).method, endpoints_1.default.task(task_id).path);
            return res.data;
        });
    }
    /**
     * @deprecated
     * @param content
     * @param jobId
     * @param coverLetter
     * @param resume
     * @param jobTitle
     * @param companyName
     * @param type
     * @param indicesState
     * @returns
     */
    createDocuments(content, jobId, { coverLetter = true, resume = true, jobTitle = "", companyName = "", type = "", indicesState = {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.createDocuments.method, endpoints_1.default.createDocuments.path, {
                content,
                job_id: jobId,
                cover_letter: coverLetter,
                resume,
                job_title: jobTitle,
                company_name: companyName,
                type,
                indices_state: indicesState
            });
            return res.data;
        });
    }
}
exports.default = CoverQuick;
