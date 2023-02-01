import { ResumeProps, IndicesStateProps } from "./types";
export interface DocumentResponse {
    taskId: string;
    taskStatus: string;
}
export interface CoverLetterResponse {
    coverLetter: string;
    status: string;
    questions: string[];
    regenerationId: string;
}
export interface ResumeResponse {
    resume: {
        content: ResumeProps;
        indicesState: IndicesStateProps;
    };
    status: string;
}
export interface ResumeCoverLetterResponse {
    resume: ResumeResponse;
    coverLetter: CoverLetterResponse;
}
export declare type TaskResult = any;
export interface TaskResponse {
    taskId: string;
    taskStatus: string;
    taskResult: TaskResult;
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
    }): Promise<ResumeResponse>;
    /**
     * @param content
     * @param jobId
     * @param jobTitle
     * @param companyName
     * @param type
     * @returns
    */
    createCoverLetter(content: Object, jobId: string, { jobTitle, companyName, name, jobDescription }: {
        jobTitle?: string | undefined;
        companyName?: string | undefined;
        name?: string | undefined;
        jobDescription?: string | undefined;
    }): Promise<CoverLetterResponse>;
    /**
   * @param content
   * @param jobId
   * @param jobTitle
   * @param companyName
   * @param type
   * @returns
  */
    createResumeCoverLetter(content: Object, jobId: string, { jobTitle, companyName, name, jobDescription, type, indicesState }: {
        jobTitle?: string | undefined;
        companyName?: string | undefined;
        name?: string | undefined;
        jobDescription?: string | undefined;
        type?: string | undefined;
        indicesState?: {} | undefined;
    }): Promise<ResumeCoverLetterResponse>;
    /**
     * @deprecated
     * @param task_id
     * @returns
     */
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
