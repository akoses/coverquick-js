export interface Resume {
    name: string;
    company: string;
    job_title: string;
    experience: Experience[];
    education: Education[];
    skills: Skills[];
}
export interface Experience {
    title: string;
    company: string;
    bullets: string[];
    project: boolean;
    id: string;
}
export interface Education {
    school: string;
    major: string;
    year: number;
    level: number;
}
export interface Skills {
    name: string;
    years_of_experience: number;
}
export interface ApplicationResponse {
    task_id: string;
    task_status: string;
}
declare enum TaskStatus {
    SUCCESS = "SUCCESS",
    FAILED = "FAILURE"
}
export interface TaskResult {
    STATUS: TaskStatus;
}
export interface TaskResponse {
    task_id: string;
    task_status: string;
    task_result: TaskResult;
}
export interface TailorResponse {
    name: string;
    id: string;
    bullets: TailorBulletResponse[];
}
export interface TailorResponses extends Array<TailorResponse> {
}
export interface TailorBulletResponse {
    bullet: string;
    keyword: string;
    tailored_bullet: string;
}
export interface RegenerateResponse {
    regeneration_id: string;
    cover_letter?: string;
    questions?: any[];
}
declare class CoverQuick {
    private _api_key;
    private config;
    private request;
    constructor(api_key?: string, url?: string);
    application(resume: Resume, job_description: string, experience_level: number, questions: string[] | undefined, application_id: string): Promise<ApplicationResponse>;
    task(task_id: string): Promise<TaskResponse>;
    tailorBullet(bullet: string, keyword: string): Promise<TailorBulletResponse>;
    regenerate(regenerationId: string, coverLetter: boolean, questions?: string[]): Promise<RegenerateResponse>;
}
export default CoverQuick;
