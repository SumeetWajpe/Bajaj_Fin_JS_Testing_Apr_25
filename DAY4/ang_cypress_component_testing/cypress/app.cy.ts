/// <reference types="cypress" />
import { AppComponent } from '../src/app/app.component';
describe('test suite for App component', () => {
  it('should instantiate (mount) App component', () => {
    // 1st way
    // cy.mount(AppComponent); // instantiation
    // cy.get('h1').should('contain', 'Hello, ang_cypress_component_testing');

    // 2nd way mocking dependencies
    // cy.mount(AppComponent, {
    //   declarations: [AppComponent],
    //   imports: [],
    //   providers: [],
    // }); // instantiation
    // cy.get('h1').should('contain', 'Hello, ang_cypress_component_testing');

    // 3rd way passing the model data
    cy.mount(AppComponent, {
      componentProperties: {
        title: 'Component Testing App !',
      },
    }); // instantiation
    cy.get('h1').should('contain', 'Component Testing App !');
  });
});
