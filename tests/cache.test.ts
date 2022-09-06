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

describe(
	"Test caching functionality", 
	() => {
	it("should cache a resume", async () => {
		
		assert.doesNotReject(coverQuick.cacheResume(resumeSample));
	});

	it("should update a resume", async () => {
		let res = await coverQuick.cacheResume(resumeSample)
		resumeSample.name = "Jane Doe";
		
		assert.doesNotReject(coverQuick.updateResume(resumeSample, res.resume_id));
	})

	it("should get a cache random object", async () => {
		
		assert.doesNotReject(coverQuick.cache<{}>('hello world'))
	})
}
)

