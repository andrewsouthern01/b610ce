/// <reference types="cypress" />

const john = {
  username: "John",
  email: "john@example.com",
  password: "Z6#6%xfLTarZ9U",
};
const julie = {
  username: "Julie",
  email: "julie@example.com",
  password: "L%e$xZHC4QKP@F",
};

describe("Feature: Read status for messages", () => {
  it("setup", () => {
    cy.signup(john.username, john.email, john.password);
    cy.logout();
    cy.signup(julie.username, julie.email, julie.password);
    cy.logout();
  })
  it("sends message in a new conversation", () => {
    cy.login(john.username, john.password);

    cy.get("input[name=search]").type("Julie");
    cy.contains("Julie").click();

    cy.get("input[name=text]").type("First message{enter}");
    cy.get("input[name=text]").type("Second message{enter}");
    cy.get("input[name=text]").type("Third message{enter}");

    cy.contains("First message");
    cy.contains("Second message");
    cy.contains("Third message");
    cy.logout()
  });
  it('displays number of new messages', () => {
    cy.login(julie.username, julie.password)
    cy.contains(3)
    cy.contains("John").click();
    cy.logout()
    cy.login(john.username, john.password)
  })

})