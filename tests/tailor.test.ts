import {resumeSample} from "./application.test";
import {strict as assert} from "node:assert";
import {describe, it} from "node:test";
import CoverQuick from "../src";
let API_KEY = process.env.COVERQUICK_API_KEY;
const coverQuick = new CoverQuick(API_KEY as string);

describe(
	"Test Tailor functionality",
	() => {


	it("Should tailor a resume bullet point", async () => {
		let res =  coverQuick.tailorBullet(
			"Build a new feature for the CoverQuick platform",
			"Exciting new feature"
		)
		assert.doesNotReject(res);
	})
}
	
)