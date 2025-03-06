/// <reference types="cypress" />

import { When } from "cypress-cucumber-preprocessor/steps";
import menuPage from "../pages/menu.page";
import loginPage from "../pages/login.page";


When('je clique sur menu', ()=>{
    menuPage.sasirSurMenuButton()

})

Then('je suis sur la page de connexion', () => {
  // Write code here that turns the phrase above into concrete actions
  cy.get(".login_logo").should("be.visible");
})
When('je clique sur deconnexion', () => {
  // Write code here that turns the phrase above into concrete actions
  menuPage.saisirLogOut()
})
