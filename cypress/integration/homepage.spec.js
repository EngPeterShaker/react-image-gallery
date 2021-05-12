import React from "react";
import { mount } from "@cypress/react";
import List from "../../src/components/List";
const ListContainer = "[data-cy = List]";

describe("renders the home page ", () => {
	// beforeAll(() => {
	// });
	// it("renders correctly", () => {
	// 	cy.get(".App").should("exist");
	// });

	it("renders value", () => {
		// cy.visit("http://localhost:3000");
		// cy.visit("http://localhost:3000");
		mount(<List />);
		cy.get(ListContainer).should("exist");
		// cy.contains(ListContainer, "X");
	});
});
