export interface DocumentResponse {
    taskId: string;
    taskStatus: string;
    taskResult: TaskResult;
}
export declare type TaskResult = any;
export interface TaskResponse {
    task_id: string;
    task_status: string;
    task_result: TaskResult;
}
export interface JobDescriptionResponse {
    status: string;
}
declare class CoverQuick {
    private _api_key;
    private config;
    private request;
    constructor(api_key?: string, url?: string, version?: string);
    /**
     * @param description
     * @param jobId
     * @returns JobDescriptionResponse
     * @memberof CoverQuick
     */
    createJobDescription(description: string, jobId: string): Promise<JobDescriptionResponse>;
    checkAPIVersion(): Promise<string>;
    /**
     * @param content
     * @param jobId
     * @param jobTitle
     * @param companyName
     * @param type
     */
    createResume(content: Object, jobId: string, { jobTitle, companyName, type, indicesState, jobDescription }: {
        jobTitle?: string | undefined;
        companyName?: string | undefined;
        type?: string | undefined;
        indicesState?: {} | undefined;
        jobDescription?: string | undefined;
    }): Promise<DocumentResponse>;
    /**
     * @param content
     * @param jobId
     * @param jobTitle
     * @param companyName
     * @param type
     * @returns
    */
    createCoverLetter(content: Object, jobId: string, { jobTitle, companyName, type, name, jobDescription }: {
        jobTitle?: string | undefined;
        companyName?: string | undefined;
        type?: string | undefined;
        name?: string | undefined;
        jobDescription?: string | undefined;
    }): Promise<DocumentResponse>;
    task(task_id: string): Promise<TaskResponse>;
    /**
     * @deprecated
     * @param content
     * @param jobId
     * @param coverLetter
     * @param resume
     * @param jobTitle
     * @param companyName
     * @param type
     * @param indicesState
     * @returns
     */
    createDocuments(content: Object, jobId: string, { coverLetter, resume, jobTitle, companyName, type, name, indicesState }: {
        coverLetter?: boolean | undefined;
        resume?: boolean | undefined;
        jobTitle?: string | undefined;
        companyName?: string | undefined;
        type?: string | undefined;
        name?: string | undefined;
        indicesState?: {} | undefined;
    }): Promise<DocumentResponse>;
}
export default CoverQuick;
