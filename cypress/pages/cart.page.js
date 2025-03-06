class cartPage {
    elements = {
        checkoutButton: () => cy.get('#checkout'),
        cartButton: () => cy.get('#shopping_cart_container'),
        badgeButton: () => cy.get('[data-test="shopping-cart-badge"]'),
        continueButton: () => cy.get('#continue-shopping'),
        removeButton: () => cy.get('#remove-sauce-labs-backpack"')
        
    }
  clickContinueButton(){
   this.elements.continueButton().click();
  }
  clickqueCartbutton(){
       this.elements.checkoutButton().click();
  }

  clickCheckoutButton(){
    this.elements.checkoutButton().click();
  }
  clickRemoveButton(){
    this.elements.removeButton().click();
  }
  getBadgeElement() {
    return this.elements.badgeButton();
} 
}
export default new cartPage(); 


