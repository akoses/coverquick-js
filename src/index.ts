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

export interface resumeResponse {
	resume_id: string;
}

export interface classifyResponse {
	classifier_id: string;
}

export interface generateResponse {
	regeneration_id: string;
	cover_letter: string;
	questions: {question: string, answer: string}[];
}

export interface matchResponse {
	Experience: {
        Skills: {
			match_count: number;
			match_total: number;
			matches: [string, string | null][];
		}
        Roles: [string, string][]
    }
    Education: string,
    YearsOfExperience: [string, string | null, string][]
}


export interface tailorResponse {
	name: string;
	id: string;
	bullets: tailorBulletResponse[];
}

export interface tailorResponses extends Array<tailorResponse> {}

export interface tailorBulletResponse {
	bullet: string;
	keyword: string;
	tailored_bullet: string;
	
}

export interface regenerateResponse {
	regeneration_id: string;
	cover_letter?: string;
	questions?: any[];
}

class CoverQuick {
	private _api_key: string;
	private config: Configuration;
	private request: CoverQuickRequest;

	constructor(api_key: string) {
	this._api_key = api_key;
	this.config = new Configuration(this._api_key);
	this.request = new CoverQuickRequest(this.config);
  }

  public async cacheResume(
	resume: Resume
  ):Promise<resumeResponse> {
	
	let res = await this.request.call(endpoints.cacheResume.method, endpoints.cacheResume.path, resume);
	return res.data as resumeResponse;
  }

  public async updateResume(resume: Resume, resumeId: string): Promise<resumeResponse> {
	
	let res = await this.request.call(endpoints.updateResume(resumeId).method, endpoints.updateResume(resumeId).path, resume);
	return res.data as resumeResponse;
  }

  public async cache<T>(
	dataId: string
  ) {
	let res = await this.request.call(endpoints.cache(dataId).method, endpoints.cache(dataId).path);
	return res.data as T;
  }

  public async classify(
	description: string
  ):Promise<classifyResponse> {
	let res = await this.request.call(endpoints.classify.method, endpoints.classify.path, {description});
	return res.data as classifyResponse;
}

  public async generate(
		resumeId: string,
		descriptionId: string, 
		questions: string[] = [],
		experience_level: number = 1,
  ):Promise<generateResponse> {
	let res = await this.request.call(endpoints.generate.method, endpoints.generate.path, {resume_id:resumeId, classifier_id: descriptionId, questions, experience_level:experience_level});
	return res.data as generateResponse;
}

  public async match (
		resumeId: string,
		descriptionId: string
  ):Promise<matchResponse> {
	let res = await this.request.call(endpoints.match.method, endpoints.match.path, {resume_id:resumeId, classifier_id: descriptionId})
	return res.data as matchResponse;
  }

  public async tailor (
		resumeId: string,
		descriptionId: string
  ):Promise<tailorResponses> {
	let res = await this.request.call(endpoints.tailor.method, endpoints.tailor.path, {resume_id:resumeId, classifier_id: descriptionId});
	return res.data as tailorResponses;
}
  
  public async tailorBullet(
		bullet: string,
		keyword: string
  ):Promise<tailorBulletResponse> {
	let res = await this.request.call(endpoints.tailorBullet.method, endpoints.tailorBullet.path, {bullet, keyword});
	return res.data as tailorBulletResponse;
}

  public async regenerate(
		regenerationId: string,
		coverLetter: boolean,
		questions: string[] = []
  ):Promise<regenerateResponse> {
	let res = await this.request.call(endpoints.regenerate.method, endpoints.regenerate.path, {regeneration_id: regenerationId, cover_letter: coverLetter, questions});
	return res.data as regenerateResponse;
}
}
export default CoverQuick;