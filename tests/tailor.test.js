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
const cache_test_1 = require("./cache.test");
const node_assert_1 = require("node:assert");
const node_test_1 = require("node:test");
const src_1 = __importDefault(require("../src"));
let API_KEY = process.env.COVERQUICK_API_KEY;
const coverQuick = new src_1.default(API_KEY);
(0, node_test_1.describe)("Test Tailor functionality", () => {
    (0, node_test_1.it)("should tailor a resume", () => __awaiter(void 0, void 0, void 0, function* () {
        let res = yield coverQuick.cacheResume(cache_test_1.resumeSample);
        let resume_id = res.resume_id;
        let res2 = yield coverQuick.classify("Build a new feature for the CoverQuick platform");
        let classifier_id = res2.classifier_id;
        let res3 = coverQuick.tailor(resume_id, classifier_id);
        node_assert_1.strict.doesNotReject(res3);
    }));
    (0, node_test_1.it)("Should tailor a resume bullet point", () => __awaiter(void 0, void 0, void 0, function* () {
        let res = coverQuick.tailorBullet("Build a new feature for the CoverQuick platform", ["JavaScript", "Python", "C++"]);
        node_assert_1.strict.doesNotReject(res);
    }));
});
