import {resumeSample} from "./cache.test";
import {strict as assert} from "node:assert";
import {describe, it} from "node:test";
import CoverQuick from "../src";
let API_KEY = process.env.COVERQUICK_API_KEY;
const coverQuick = new CoverQuick(API_KEY as string);

describe(
	"Test Generate functionality",
	() => {
	it("should generate a resume", async () => {
		let res = await coverQuick.cacheResume(resumeSample)
		let resume_id = res.resume_id;
		let res2 = await coverQuick.classify("Build a new feature for the CoverQuick platform");
		let classifier_id = res2.classifier_id
		let res3 = coverQuick.generate(resume_id, classifier_id, [
			'Why you are the best candidate for this position',
		]);
		assert.doesNotReject(res3);
	})
	it("Should regenerate a resume stuff", async () => {
		let res = await coverQuick.cacheResume(resumeSample)
		let resume_id = res.resume_id;
		let res2 = await coverQuick.classify("Build a new feature for the CoverQuick platform");
		let classifier_id = res2.classifier_id
		let res3 = await coverQuick.generate(resume_id, classifier_id, [
			'Why you are the best candidate for this position',
		]);
		let regeneration_id = res3.regeneration_id;
		let res4 = coverQuick.regenerate(
			regeneration_id,
			true,
			[
				'Why you are the best candidate for this position',
			]
		)
		assert.doesNotReject(res4);
	})
}
	
)