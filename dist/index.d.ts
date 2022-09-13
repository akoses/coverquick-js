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
export interface resumeResponse {
    resume_id: string;
}
export interface classifyResponse {
    classifier_id: string;
}
export interface generateResponse {
    regeneration_id: string;
    cover_letter: string;
    questions: {
        question: string;
        answer: string;
    }[];
}
export interface matchResponse {
    Experience: {
        Skills: {
            match_count: number;
            match_total: number;
            matches: [string, string | null][];
        };
        Roles: [string, string][];
    };
    Education: string;
    YearsOfExperience: [string, string | null, string][];
}
export interface tailorResponse {
    name: string;
    bullets: tailorBulletResponse[];
}
export interface tailorResponses extends Array<tailorResponse> {
}
export interface tailorBulletResponse {
    bullet: string;
    keyword: string[];
    tailored_bullet: string;
}
export interface regenerateResponse {
    regeneration_id: string;
    cover_letter?: string;
    questions?: any[];
}
declare class CoverQuick {
    private _api_key;
    private config;
    private request;
    constructor(api_key: string);
    cacheResume(resume: Resume): Promise<resumeResponse>;
    updateResume(resume: Resume, resumeId: string): Promise<resumeResponse>;
    cache<T>(dataId: string): Promise<T>;
    classify(description: string): Promise<classifyResponse>;
    generate(resumeId: string, descriptionId: string, questions?: string[], experience_level?: number): Promise<generateResponse>;
    match(resumeId: string, descriptionId: string): Promise<matchResponse>;
    tailor(resumeId: string, descriptionId: string): Promise<tailorResponses>;
    tailorBullet(bullet: string, keywords: string[]): Promise<tailorBulletResponse>;
    regenerate(regenerationId: string, coverLetter: boolean, questions?: string[]): Promise<regenerateResponse>;
}
export default CoverQuick;
