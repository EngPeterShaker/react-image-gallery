/// <reference types="cypress" />

import getRandomInt from "../../src/utils/getRandomInt";

describe("Unit Test Application Code", function () {
	before(() => {
		// check if the import worked correctly
		expect(getRandomInt, "getRandomInt").to.be.a("function");
	});

	context("math.js", function () {
		it("can add numbers", function () {
			expect(getRandomInt(0, 2)).to.be.lessThan(3);
		});
	});
});
