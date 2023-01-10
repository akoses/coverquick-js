declare const endpoints: {
    createJobDescription: {
        method: string;
        path: string;
    };
    createDocuments: {
        method: string;
        path: string;
    };
    createResume: {
        method: string;
        path: string;
    };
    task: (task_id: string) => {
        method: string;
        path: string;
    };
    createCoverLetter: {
        method: string;
        path: string;
    };
    createResumeCoverLetter: {
        method: string;
        path: string;
    };
    checkAPIVersion: {
        method: string;
        path: string;
    };
};
export default endpoints;
