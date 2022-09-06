import { strict as assert } from 'node:assert';
import {resumeSample} from "./cache.test";
import  {describe, it} from "node:test";
import CoverQuick from "../src";
import dotenv from "dotenv";
dotenv.config();
let API_KEY = process.env.COVERQUICK_API_KEY;
const coverQuick = new CoverQuick(API_KEY as string);

describe(
	"Test Match functionality",
	() => {
	it("should match a resume", async () => {
		let res = await coverQuick.cacheResume(resumeSample)
		let resume_id = res.resume_id;
		let res2 = await coverQuick.classify("Build a new feature for the CoverQuick platform");
		let classifier_id = res2.classifier_id
		let res3 = await coverQuick.match(
			resume_id,
			classifier_id,
		)
		assert.notEqual(res3.Education, undefined);
		assert.notEqual(res3['Years of Experience'], undefined);
	})
}
	
)
