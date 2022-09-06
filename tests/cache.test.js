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
exports.resumeSample = void 0;
const node_assert_1 = require("node:assert");
const node_test_1 = require("node:test");
const src_1 = __importDefault(require("../src"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let API_KEY = process.env.COVERQUICK_API_KEY;
const coverQuick = new src_1.default(API_KEY);
exports.resumeSample = {
    name: "John Doe",
    company: "CoverQuick",
    job_title: "Software Engineer",
    experience: [
        {
            title: "Software Engineer",
            company: "CoverQuick",
            bullets: [
                "Built a new feature for the CoverQuick platform",
            ],
            project: false,
        }
    ],
    education: [
        {
            school: "University of California, Berkeley",
            major: "Computer Science",
            year: 2019,
            level: 1,
        }
    ],
    skills: [
        {
            name: "JavaScript",
            years_of_experience: 2,
        }
    ]
};
(0, node_test_1.describe)("Test caching functionality", () => {
    (0, node_test_1.it)("should cache a resume", () => __awaiter(void 0, void 0, void 0, function* () {
        node_assert_1.strict.doesNotReject(coverQuick.cacheResume(exports.resumeSample));
    }));
    (0, node_test_1.it)("should update a resume", () => __awaiter(void 0, void 0, void 0, function* () {
        let res = yield coverQuick.cacheResume(exports.resumeSample);
        exports.resumeSample.name = "Jane Doe";
        node_assert_1.strict.doesNotReject(coverQuick.updateResume(exports.resumeSample, res.resume_id));
    }));
    (0, node_test_1.it)("should get a cache random object", () => __awaiter(void 0, void 0, void 0, function* () {
        node_assert_1.strict.doesNotReject(coverQuick.cache('hello world'));
    }));
});
