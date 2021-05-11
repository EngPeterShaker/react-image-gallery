const hostUrl = "http://localhost:3000";
describe("The application loads", () => {
	it("navigates to the / route", () => {
		cy.visit(hostUrl);
	});

	it("has the basic Todo list container", () => {
		cy.visit(hostUrl);
		cy.get("h3").contains("Learn React");
	});
});
