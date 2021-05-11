/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";
import List from "./List";
const ListContainer = "[data-cy = List]";

describe("renders the home page ", () => {
	beforeEach(() => {
		mount(<List />);
	});

	it("renders List Component", () => {
		cy.get(ListContainer).should("exist");
	});
	it("renders List Component Children", () => {
		cy.wait(7000);

		cy.get(ListContainer).children().its("length").should("not.eq", 0);
		// });
	});
});
