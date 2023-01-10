import Configuration from "./configuration";
import CoverQuickRequest from "./request";
import endpoints from "./endpoints";

export interface DocumentResponse {
	taskId: string;
	taskStatus: string;
}

export type TaskResult = any;

export interface TaskResponse {
	taskId: string;
	taskStatus: string;
	taskResult: TaskResult;
}

export interface JobDescriptionResponse {
	status: string;
}

class CoverQuick {
	private _api_key: string;
	private config: Configuration;
	private request: CoverQuickRequest;
	constructor(api_key: string = "", url:string="https://api.coverquick.co", version:string="v1") {
	this._api_key = api_key;
	this.config = new Configuration(this._api_key, url, version);
	this.request = new CoverQuickRequest(this.config);
  }


  /**
   * @param description 
   * @param jobId
   * @returns JobDescriptionResponse
   * @memberof CoverQuick
   */
  public async createJobDescription(description: string, jobId: string):Promise<JobDescriptionResponse> {
	let res = await this.request.call(endpoints.createJobDescription.method, endpoints.createJobDescription.path, {description, job_id: jobId});
	return res.data as JobDescriptionResponse;
  }

  public async checkAPIVersion():Promise<string> {
	try {
		let res = await this.request.call(endpoints.checkAPIVersion.method, endpoints.checkAPIVersion.path);
		return res.data as string;
	}
	catch(e) {
		return "unknown";
	}
  }

  /**
   * @param content
   * @param jobId
   * @param jobTitle
   * @param companyName
   * @param type
   */
  public async createResume(content: Object, jobId: string, {
	jobTitle = "",
	companyName = "",
	type = "",
	indicesState = {},
	jobDescription = ""
  }):Promise<DocumentResponse> {
	let res = await this.request.call(endpoints.createResume.method, endpoints.createResume.path, {
		content,
		job_id: jobId,
		job_title: jobTitle,
		company_name: companyName,
		type,
		indices_state: indicesState,
		task_id: jobId + "_resume",
		job_description: jobDescription,
	});
	return res.data as DocumentResponse;
  }

/**
 * @param content
 * @param jobId
 * @param jobTitle
 * @param companyName
 * @param type
 * @returns 
*/  
public async createCoverLetter(content: Object, jobId: string, {
	jobTitle = "",
	companyName = "",
	name = "",
	jobDescription = ""
  }):Promise<DocumentResponse> {
	let res = await this.request.call(endpoints.createCoverLetter.method, endpoints.createCoverLetter.path, {
		content,
		job_id: jobId,
		job_title: jobTitle,
		company_name: companyName,
		name,
		job_description: jobDescription,
		task_id: jobId + "_cover_letter",
	});
	return res.data as DocumentResponse;
  }


  /**
 * @param content
 * @param jobId
 * @param jobTitle
 * @param companyName
 * @param type
 * @returns 
*/  
public async createResumeCoverLetter(content: Object, jobId: string, {
	jobTitle = "",
	companyName = "",
	name = "",
	jobDescription = "",
	type = "",
	indicesState = {}
  }):Promise<DocumentResponse> {
	let res = await this.request.call(endpoints.createResumeCoverLetter.method, endpoints.createResumeCoverLetter.path, {
		resume: {
			content,
			job_id: jobId,
			job_title: jobTitle,
			company_name: companyName,
			type,
			indices_state: indicesState,
			task_id: jobId + "_resume_cover_letter",
			job_description: jobDescription,
		},
		cover_letter: {
			content,
			job_id: jobId,
			job_title: jobTitle,
			company_name: companyName,
			name,
			job_description: jobDescription,
			task_id: jobId + "_resume_cover_letter",
		}
	});
	return res.data as DocumentResponse;
  }
  
  public async task(task_id: string):Promise<TaskResponse> {
	let res = await this.request.call(endpoints.task(task_id).method, endpoints.task(task_id).path);
	return res.data as TaskResponse;
}


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
  public async createDocuments(content: Object, jobId: string, {
	coverLetter = true,
	resume = true,	
	jobTitle = "",
	companyName = "",
	type = "",
	name = "",
	indicesState = {}
  }):Promise<DocumentResponse> {
	let res = await this.request.call(endpoints.createDocuments.method, endpoints.createDocuments.path, {
		content,
		job_id: jobId,
		cover_letter: coverLetter,
		resume,
		name,
		job_title: jobTitle,
		company_name: companyName,
		type,
		indices_state: indicesState
	});
	return res.data as DocumentResponse;
  }

}
export default CoverQuick;