/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import productsPage from "../pages/products.page";



let nomProduitSelectionne;


When("il sélectionne un produit aléatoire", () => {
  productsPage.selectRandomProduct().then((product) => {
    productsPage.recupererNomProduit(product).then((nomProduit) => {
      nomProduitSelectionne = nomProduit; // On stocke le nom du produit sélectionné
    });
  });
});

When("il clique sur ce produit", () => {
  productsPage.cliquerSurProduit(nomProduitSelectionne);
});


Then("la page de détail du produit s'affiche avec le bon nom", () => {
  productsPage.verifierDetailProduit(nomProduitSelectionne);
});