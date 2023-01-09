"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const endpoints = {
    createJobDescription: {
        method: 'post',
        path: '/description'
    },
    createDocuments: {
        method: 'post',
        path: '/documents'
    },
    createResume: {
        method: 'post',
        path: '/resume'
    },
    task: (task_id) => ({
        method: 'get',
        path: '/task/' + task_id
    }),
    createCoverLetter: {
        method: "post",
        path: "/cover-letter"
    },
    checkAPIVersion: {
        method: "get",
        path: "/"
    }
};
exports.default = endpoints;
