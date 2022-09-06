import {resumeSample} from "./cache.test";
import {strict as assert} from "node:assert";
import {describe, it} from "node:test";
import CoverQuick from "../src";
let API_KEY = process.env.COVERQUICK_API_KEY;
const coverQuick = new CoverQuick(API_KEY as string);

describe(
	"Test Tailor functionality",
	() => {
	it("should tailor a resume", async () => {
		let res = await coverQuick.cacheResume(resumeSample)
		let resume_id = res.resume_id;
		let res2 = await coverQuick.classify("Build a new feature for the CoverQuick platform");
		let classifier_id = res2.classifier_id
		let res3 = coverQuick.tailor(resume_id, classifier_id);
		assert.doesNotReject(res3);
	})

	it("Should tailor a resume bullet point", async () => {
		let res =  coverQuick.tailorBullet(
			"Build a new feature for the CoverQuick platform",
			["JavaScript", "Python", "C++"]
		)
		assert.doesNotReject(res);
	})
}
	
)
