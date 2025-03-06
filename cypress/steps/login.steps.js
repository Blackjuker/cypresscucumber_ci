/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/login.page";
import productPage from "../pages/products.page";


Given("je suis sur la page {string}", (s) => {
        cy.visit(s);
    

})

When('je saisis le password {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
  loginPage.saisirPassword(s)
  
})
When('je clique sur le bouton Login', () => {
  // Write code here that turns the phrase above into concrete actions
  loginPage.cliqueSurLoginButton()
})


When('je saisis le username {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
  loginPage.saisirUsername(s)
  
})

Then('la page produits saffiche', () => {
  // Write code here that turns the phrase above into concrete actions
  productPage.elements.productTitle().should("be.visible")
})

Then('un message derreur est affiche', () => {
  // Write code here that turns the phrase above into concrete actions
  loginPage.elements.errorMessage().should("be.visible")
})

