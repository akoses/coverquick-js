declare const endpoints: {
    createJobDescription: {
        method: string;
        path: string;
    };
    createDocuments: {
        method: string;
        path: string;
    };
    task: (task_id: string) => {
        method: string;
        path: string;
    };
    regenerate: {
        method: string;
        path: string;
    };
    application: {
        method: string;
        path: string;
    };
    tailorBullet: {
        method: string;
        path: string;
    };
};
export default endpoints;
