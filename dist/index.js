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
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["SUCCESS"] = "SUCCESS";
    TaskStatus["FAILED"] = "FAILURE";
})(TaskStatus || (TaskStatus = {}));
class CoverQuick {
    constructor(api_key = "", url = "https://api.coverquick.co") {
        this._api_key = api_key;
        this.config = new configuration_1.default(this._api_key, url);
        this.request = new request_1.default(this.config);
    }
    application(resume, job_description, experience_level, questions = [], application_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.application.method, endpoints_1.default.application.path, {
                resume,
                job_description,
                experience_level,
                questions,
                application_id
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
    tailorBullet(bullet, keyword) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.request.call(endpoints_1.default.tailorBullet.method, endpoints_1.default.tailorBullet.path, { bullet, keyword });
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
