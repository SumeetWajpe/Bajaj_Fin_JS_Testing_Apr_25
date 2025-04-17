/// <reference types="Cypress" />
describe("test suite for lambdatest.io", () => {
  it("should login successfully", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
    );

    cy.fixture("login").then(data => {
      cy.log(data);
      cy.get("#input-email").type(data.name);
      cy.get("#input-password").type(data.pwd);
      cy.get("form > .btn").click();
      cy.url().should(
        "eq",
        "https://ecommerce-playground.lambdatest.io/index.php?route=account/account",
      );
    });
  });
});
