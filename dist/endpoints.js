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
    task: (task_id) => ({
        method: 'get',
        path: '/task/' + task_id
    }),
    regenerate: {
        method: "post",
        path: "/regenerate"
    },
    application: {
        method: 'post',
        path: '/application'
    },
    tailorBullet: {
        method: "post",
        path: "/tailor/bullet"
    },
};
exports.default = endpoints;
