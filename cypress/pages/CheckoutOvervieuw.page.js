class CheckoutOvervieuwPage {
    elements = {
        productTitle: () => cy.get(".inventory_item_name"),
        item_total: () => cy.get(`.summary_subtotal_label`),
        tax: () => cy.get(`.summary_tax_label`),
        price_total: () => cy.get(`.summary_total_label`),
        buttonfinish: () => cy.get('#finish'),
        buttoncancel: () => cy.get('#cancel')
    };
    cliquersurleButtonfinish() {
        this.elements.buttonfinish().click();
    }

    cliquersurleButtoncancel() {
        this.elements.buttoncancel().click();
    }
    verifierleprix() {
        this.elements.price_total().should("be.visible");
    }
}
export default new CheckoutOvervieuwPage();