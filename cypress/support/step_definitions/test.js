import { Given } from "cypress-cucumber-preprocessor/steps";

Given("test me", () => {
    cy.visit("https://google.com");
})