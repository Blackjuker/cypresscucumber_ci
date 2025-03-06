/// <reference types="cypress" />

import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('jajoute des produits', () => {
  // Write code here that turns the phrase above into concrete actions
  let nombreProduits = 4
  let listeProduits =[]
        productPage.elements.productTitle().each((produit, id)=>{
            if(id < nombreProduits){
                cy.wrap(produit).invoke("text").then((produitTexte) => {
                    productPage.ajouterProduitAuPanier(produitTexte.toLowerCase().replace(/\s+/g, "-"));
                    listeProduits.push(produitTexte);
                })  
            }
    })
})

When('je vais dans card', () => {
  // Write code here that turns the phrase above into concrete actions
  productPage.allerAuPanier();
})

Then('je retrouve les memes produits qui ont ete ajoutes', () => {
  // Write code here that turns the phrase above into concrete actions
  //cy.wrap(cartPage.getAddedProducts()).should('deep.equal', listeProduits);
})
