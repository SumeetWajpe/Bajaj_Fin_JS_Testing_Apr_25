class LoginPage {
  elements = {
    usernameInput: () => cy.get("#input-email"),
    pwdInput: () => cy.get("#input-password"),
    loginBtn: () => cy.get("form > .btn"),
  };

  login() {
    this.elements.usernameInput().type("aniketadmin@gmail.com");
    this.elements.pwdInput().type("admin@1");
    this.elements.loginBtn().click();
  }
}

module.exports = new LoginPage();
