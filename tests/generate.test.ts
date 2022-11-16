import {strict as assert} from "node:assert";
import {describe, it} from "node:test";
import CoverQuick from "../src";
let API_KEY = process.env.COVERQUICK_API_KEY;
const coverQuick = new CoverQuick(API_KEY as string);

describe(
	"Test Generate functionality",
	() => {
	it("Should regenerate a resume stuff", async () => {
		
		let regeneration_id = "test"
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