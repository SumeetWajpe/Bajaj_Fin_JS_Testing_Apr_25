class LoginPage {
  elements = {
    usernameInput: () => cy.get("#input-email"),
    pwdInput: () => cy.get("#input-password"),
    loginBtn: () => cy.get("form > .btn"),
  };

  login(uname, pwd) {
    this.elements.usernameInput().type(uname);
    this.elements.pwdInput().type(pwd);
    this.elements.loginBtn().click();
  }
}

module.exports = new LoginPage();
