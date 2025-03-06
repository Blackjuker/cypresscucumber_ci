class ProductsPage {
  elements = {
    productPrice: () => cy.get(".inventory_item_price"),
    productItems: () => cy.get(".inventory_item"),
    productTitle: () => cy.get(".inventory_item_name"),
    addToCartButton: () => cy.get(".btn_inventory"),
    cartNumbre: () => cy.get(".shopping_cart_badge"),
    cartIcon: () => cy.get(".shopping_cart_link"),
    productDetailTitle: () => cy.get(".inventory_details_name"),
    sortDropdown: () => cy.get(".product_sort_container"),
    ajouterAuPanierBouton: (nomProduit) => cy.get(`[data-test="add-to-cart-${nomProduit}"]`),
    retirerDuPanierBouton: (nomProduit) => cy.get(`[data-test="remove-${nomProduit}"]`),
  };

  cliquerSurProduit(nomProduit) {
    this.elements.productTitle().contains(nomProduit).click();
  }

  ajouterProduitAuPanier(nomProduit) {
    this.elements.ajouterAuPanierBouton(nomProduit).click();
  }

  retirerProduitDuPanier(nomProduit) {
    this.elements.retirerDuPanierBouton(nomProduit).click();
  }

  verifierProduitAjoute() {
    this.elements.cartNumbre().should("be.visible");
  }
  verifierProduitSupprime() {
    this.elements.cartNumbre().should("not.exist");
  }
  allerAuPanier() {
    this.elements.cartIcon().click();
  }

  selectionnerTriPar(valeur) {
    this.elements.sortDropdown().select(valeur);
  }

  verifierTriSelectionne(valeur) {
    this.elements.sortDropdown().should("have.value", valeur);
  }
  selectRandomProduct() {
    return this.elements.productItems().then((products) => {
      const randomIndex = Math.floor(Math.random() * products.length);
      return cy.wrap(products[randomIndex]);
    });
  }
  recupererNomProduit(product) {
    return cy.wrap(product).find(".inventory_item_name").invoke('text').then(text => text.trim());
  }
  verifierDetailProduit(nomProduit) {
    this.elements.productDetailTitle().should('be.visible').and('have.text', nomProduit);
  }
}


export default new ProductsPage();
