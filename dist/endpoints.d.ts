declare const endpoints: {
    cacheResume: {
        method: string;
        path: string;
    };
    updateResume: (resumeId: string) => {
        method: string;
        path: string;
    };
    cache: (dataId: string) => {
        method: string;
        path: string;
    };
    classify: {
        method: string;
        path: string;
    };
    generate: {
        method: string;
        path: string;
    };
    match: {
        method: string;
        path: string;
    };
    tailor: {
        method: string;
        path: string;
    };
    tailorBullet: {
        method: string;
        path: string;
    };
    regenerate: {
        method: string;
        path: string;
    };
};
export default endpoints;
