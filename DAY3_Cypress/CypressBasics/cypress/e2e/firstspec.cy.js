describe("first test suite", () => {
  it("should visit the flipkart app", () => {
    cy.visit("https://www.flipkart.com/");
  });

  it("should search for a product in flipkart",()=>{
    cy.visit("https://www.flipkart.com/");
    cy.get("input.Pke_EE").type("iphone");

  })

//   it("should navitage to pokedex angular app", () => {
//     cy.visit("http://localhost:4200/");
//   });
});
