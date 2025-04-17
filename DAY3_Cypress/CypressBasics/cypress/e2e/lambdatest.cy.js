/// <reference types="Cypress" />
import loginPage from "../pages/loginPage";

describe("test suite for lambdatest.io", () => {
  before(function () {
    cy.fixture("login").as("loginData");

    // cy.fixture("login").then(function (data) {
    //   this.loginData = data;
    // });
  });

  it("should login successfully", function () {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
    );
    //cy.log(this.loginData);

    loginPage.login(this.loginData.name, this.loginData.pwd); // comes from loginPage.js
    cy.url().should(
      "eq",
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/account",
    );
  });
  // 1st way in .then()
  // cy.fixture("login").then(data => {
  //   cy.log(data);
  //   cy.get("#input-email").type(data.name);
  //   cy.get("#input-password").type(data.pwd);
  //   cy.get("form > .btn").click();
  //   cy.url().should(
  //     "eq",
  //     "https://ecommerce-playground.lambdatest.io/index.php?route=account/account",
  //   );
  // });
});
