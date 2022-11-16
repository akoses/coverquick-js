import { strict as assert } from 'node:assert';
import  {describe, it} from "node:test";
import CoverQuick from "../src";
import dotenv from "dotenv";
dotenv.config();
let API_KEY = process.env.COVERQUICK_API_KEY;
const coverQuick = new CoverQuick(API_KEY as string);


export let resumeSample = {
	
	name: "John Doe",
	company: "CoverQuick",
	job_title: "Software Engineer",
	experience: [
		{	
			id:"1",
			title: "Software Engineer",
			company: "CoverQuick",
			bullets: [
				"Built a new feature for the CoverQuick platform",
			],
			project: false,
		}
	],
	education: [
		{
			school: "University of California, Berkeley",
			major: "Computer Science",
			year: 2019,
			level: 1,
		}
	],
	skills: [
		{
			name: "JavaScript",
			years_of_experience: 2,
		}
	]
	
}

export const defaultResume = {
	header:{
		fullName: '',
		phoneNumber: '',
		email: '',
		linkedin: '',
		github: '',
		personalWebsite: '',
		role: '',
		contact: {
			city: '',
			state: '',
			country: ''
		}
	},
	summary: {
		text: '',
		visible: false
	},
	education: {
		education: []
	},
	experience: {
		experience: [],
	},
	volunteer:{
		volunteer: [],
	},
	skills: {
		skills: [],
	},
	certifications: {
		certifications: [],
	},
	projects: {
		projects: [],
	},
	awards:{
		awards: [],
	},
	references:{
		references: [],
	},
	publications:{
		publications: [],
	},
	accomplishments:{
		text: '',
		visible: false
	}

}

describe(
	"Test documents and tasks", 
	() => {
	it("should create a job description", async () => {
		assert.doesNotReject(coverQuick.createJobDescription(
			"Software Engineer",
			"test-id"
		));
	});
	it("Should test the task endpoint", async () => {
		assert.doesNotReject(coverQuick.task("test-id"));
	})
	
	it("Should create documents", async () => {
		assert.doesNotReject(coverQuick.createDocuments(
			defaultResume, "job-1", {}))
	})

})