"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const endpoints = {
    cacheResume: {
        method: "post",
        path: "/cache/resume"
    },
    updateResume: (resumeId) => {
        return { method: "put",
            path: `/cache/resume/${resumeId}`
        };
    },
    cache: (dataId) => {
        return {
            method: "get",
            path: `/cache/${dataId}`
        };
    },
    classify: {
        method: "post",
        path: "/classify"
    },
    generate: {
        method: "post",
        path: "/generate"
    },
    match: {
        method: "post",
        path: "/match"
    },
    tailor: {
        method: "post",
        path: "/tailor"
    },
    tailorBullet: {
        method: "post",
        path: "/tailor/bullet"
    },
    regenerate: {
        method: "post",
        path: "/regenerate"
    }
};
exports.default = endpoints;
