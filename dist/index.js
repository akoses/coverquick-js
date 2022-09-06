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
[];
class CoverQuick {
    constructor(api_key) {
        this._api_key = api_key;
        this.config = new configuration_1.default(this._api_key);
        this.request = new request_1.default(this.config);
    }
    cacheResume(resume) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.cacheResume.method, endpoints_1.default.cacheResume.path, resume);
            return res.data;
        });
    }
    updateResume(resume, resumeId) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.updateResume(resumeId).method, endpoints_1.default.updateResume(resumeId).path, resume);
            return res.data;
        });
    }
    cache(dataId) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.cache(dataId).method, endpoints_1.default.cache(dataId).path);
            return res.data;
        });
    }
    classify(description) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.classify.method, endpoints_1.default.classify.path, { description });
            return res.data;
        });
    }
    generate(resumeId, descriptionId, questions = []) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.generate.method, endpoints_1.default.generate.path, { resume_id: resumeId, classifier_id: descriptionId, questions });
            return res.data;
        });
    }
    match(resumeId, descriptionId) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.match.method, endpoints_1.default.match.path, { resume_id: resumeId, classifier_id: descriptionId });
            return res.data;
        });
    }
    tailor(resumeId, descriptionId) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.tailor.method, endpoints_1.default.tailor.path, { resume_id: resumeId, classifier_id: descriptionId });
            return res.data;
        });
    }
    tailorBullet(bullet, keywords) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.tailorBullet.method, endpoints_1.default.tailorBullet.path, { bullet, keywords });
            return res.data;
        });
    }
    regenerate(regenerationId, coverLetter, questions = []) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.regenerate.method, endpoints_1.default.regenerate.path, { regeneration_id: regenerationId, cover_letter: coverLetter, questions });
            return res.data;
        });
    }
}
exports.default = CoverQuick;
