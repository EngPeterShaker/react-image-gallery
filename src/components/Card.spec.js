/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";
import Card from "./Card";
const CardContainer = "[data-cy = Card]";

const itemData = {
	id: 2,
	name: "Ervin Howell",
	username: "Antonette",
	email: "Shanna@melissa.tv",
	address: {
		street: "Victor Plains",
		suite: "Suite 879",
		city: "Wisokyburgh",
		zipcode: "90566-7771",
		geo: {
			lat: "-43.9509",
			lng: "-34.4618",
		},
	},
	company: {
		bs: "revolutionize end-to-end systems",
		catchPhrase: "User-centric fault-tolerant solution",
		name: "Keebler LLC",
	},
};

describe("renders the Card Component", () => {
	beforeEach(() => {
		mount(
			<Card
				handleOpenOverlay={() => {}}
				itemData={itemData}
				imageSrc={""}
				index={5}
			/>
		);
	});

	it("renders Component correctly", () => {
		cy.get(CardContainer).should("exist");
	});
	it("renders Card Component text", () => {
		cy.get(CardContainer)
			.get(".card__content--company")
			.should("have.text", itemData.company.name);
	});
});
