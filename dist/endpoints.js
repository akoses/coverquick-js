"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const endpoints = {
    application: {
        method: 'post',
        path: '/application'
    },
    task: (task_id) => ({
        method: 'get',
        path: '/task/' + task_id
    }),
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
