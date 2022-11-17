import Configuration from "./configuration";
import CoverQuickRequest from "./request";
import endpoints from "./endpoints";

export interface Resume {
	name: string;
	company: string;
	job_title: string;
	experience: Experience[]
	education: Education[]
	skills: Skills[]
}

export interface Experience {
	title: string
    company: string
    bullets: string[];
    project: boolean
	id: string
}

export interface Education {
	school: string
    major: string
    year: number
    level: number
}

export interface Skills {
	name: string;
	years_of_experience: number;
}


export interface ApplicationResponse {
	task_id: string;
	task_status: string;
}


export interface DocumentResponse {
	cover_letter:{
		task_id: string;
		task_status: string;
	}
	resume:{
		task_id: string;
		task_status: string;
	}
}

enum TaskStatus {
	SUCCESS = "SUCCESS",
	FAILED = "FAILURE",
}

export interface TaskResult {
	STATUS: TaskStatus;
}

export interface TaskResponse {
	task_id: string;
	task_status: string;
	task_result: TaskResult;
}

export interface JobDescriptionResponse {
	task_id: string;
	task_status: string;
}


export interface TailorResponse {
	name: string;
	id: string;
	bullets: TailorBulletResponse[];
}

export interface TailorResponses extends Array<TailorResponse> {}

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

class CoverQuick {
	private _api_key: string;
	private config: Configuration;
	private request: CoverQuickRequest;
	constructor(api_key: string = "", url:string="https://api.coverquick.co") {
	this._api_key = api_key;
	this.config = new Configuration(this._api_key, url);
	this.request = new CoverQuickRequest(this.config);
  }

  /**
   * @deprecated
   * @param resume 
   * @param job_description 
   * @param experience_level 
   * @param questions 
   * @param application_id 
   * @returns 
   */
  public async application(
	resume: Resume,
	job_description: string,
	experience_level: number,
	questions: string[] = [],
	application_id: string
):Promise<ApplicationResponse> {
let res = await this.request.call(endpoints.application.method, endpoints.application.path, {
	resume,
	job_description,
	experience_level,
	questions,
	application_id
});
return res.data as ApplicationResponse;
}

/**
 * @deprecated
 * @param bullet 
 * @param keyword 
 * @returns 
 */
public async tailorBullet(
	bullet: string,
	keyword: string
):Promise<TailorBulletResponse> {
let res = await this.request.call(endpoints.tailorBullet.method, endpoints.tailorBullet.path, {bullet, keyword});
return res.data as TailorBulletResponse;
}

  public async createJobDescription(description: string, jobId: string):Promise<JobDescriptionResponse> {
	let res = await this.request.call(endpoints.createJobDescription.method, endpoints.createJobDescription.path, {description, job_id: jobId});
	return res.data as JobDescriptionResponse;

  }

  public async createDocuments(content: Object, jobId: string, {
	coverLetter = true,
	resume = true,	
	jobTitle = "",
	companyName = "",
  }):Promise<DocumentResponse> {
	let res = await this.request.call(endpoints.createDocuments.method, endpoints.createDocuments.path, {
		content,
		job_id: jobId,
		cover_letter: coverLetter,
		resume,
		job_title: jobTitle,
		company_name: companyName,
	});
	return res.data as DocumentResponse;
  }
  
  public async task(task_id: string):Promise<TaskResponse> {
	let res = await this.request.call(endpoints.task(task_id).method, endpoints.task(task_id).path);
	return res.data as TaskResponse;
}

  public async regenerate(
		regenerationId: string,
		coverLetter: boolean,
		questions: string[] = []
  ):Promise<RegenerateResponse> {
	let res = await this.request.call(endpoints.regenerate.method, endpoints.regenerate.path, {regeneration_id: regenerationId, cover_letter: coverLetter, questions});
	return res.data as RegenerateResponse;
}
}
export default CoverQuick;