import loginPage from '../pages/login.page';
import ProductsPage from '../pages/products.page';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
let selectedProduct;

Given('je suis sur {string}', function (url) {
  cy.visit(url);
});

When('j-e saisis le username {string}', function (username) {
  loginPage.saisirUsername(username);
});
When('je saisi le password {string}', function (password) {
  loginPage.saisirPassword(password)
});

When('je clique sur le bouton {string}', function () {
  loginPage.cliqueSurLoginButton();

});

Then('je suis redirigé au dashbord', function () {
  cy.url().should('include', '/inventory.html'); 
});

Then('je verifie la liste des produits', function () {
  ProductsPage.elements.productTitle().should('have.length.greaterThan', 0);
});

//Tri par nom AZ
When('je trie les produits par nom', function () {
  ProductsPage.selectionnerTriPar('az'); 
});

Then('je vérifie que les produits sont triés par nom', function () {
  ProductsPage.elements.productTitle().then(($products) => {
    const productNames = $products.toArray().map((el) => el.innerText);
    const sortedProductNames = [...productNames].sort((a, b) => a.localeCompare(b));
    expect(productNames).to.deep.equal(sortedProductNames);
  });
});

//Tri par prix bas-haut
When('je trie les produits par prix', () => {
  ProductsPage.selectionnerTriPar('lohi');
});

Then('je vérifie que les produits sont triés par prix', () => {
  ProductsPage.elements.productPrice().then(($prices) => {
    const productPrices = $prices.toArray().map((el) => parseFloat(el.innerText.replace('$', '')));
    const sortedProductPrices = [...productPrices].sort((a, b) => a - b);
    expect(productPrices).to.deep.equal(sortedProductPrices);
  });
});

//Addtocart
When('je clique sur {string}', (s) => {
  ProductsPage.selectRandomProduct().then((randomProduct) => {
    selectedProduct = randomProduct; // Stocker le produit sélectionné
      ProductsPage.recupererNomProduit(randomProduct).then((nomProduit) => {
      // Formater le nom du produit pour correspondre à l'attribut data-test
      const nomProduitFormate = nomProduit.toLowerCase().replace(/\s+/g, '-');
      ProductsPage.ajouterProduitAuPanier(nomProduitFormate);
    });
  });
});

Then('le produit est ajouté au panier', () => {
  ProductsPage.verifierProduitAjoute();
})

//SupprimerProduit 
When('je supprime le produit', () => {
  ProductsPage.selectRandomProduct().then((randomProduct) => {
    ProductsPage.recupererNomProduit(selectedProduct).then((nomProduit) => {
      const nomProduitFormate = nomProduit.toLowerCase().replace(/\s+/g, '-');
      ProductsPage.retirerProduitDuPanier(nomProduitFormate);
    });
  });})

Then('le produit est bien supprimé du panier', () => {
  ProductsPage.verifierProduitSupprime();
})
