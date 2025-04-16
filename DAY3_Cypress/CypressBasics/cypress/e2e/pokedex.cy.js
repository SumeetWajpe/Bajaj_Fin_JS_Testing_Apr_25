/// <reference types="Cypress" />
describe("suite for pokedex", () => {
  it("searches for pokemons", () => {
    cy.visit("http://localhost:4200/home");
    cy.get("#search_pokemon").type("bu");
    cy.wait(2000);
    //cy.get(".pokemon-content").should("have.length", 2);
    cy.get("app-pokemon-item")
      .find(".pokemon-content")
      .should("have.length", 2);
    // cy.get(".main-title").should(
    //   "have.text",
    //   " Search for any Pokemon that exists on the planet ",
    // );
    // console.log(cy.get(".main-title").text());

    // write a command such that we select the first item and then click on it
    cy.get("app-pokemon-item").find(".pokemon-content").first().click();
    // cy.get(".pokemon-content").first().click();
  });
});
