

class ChekoutCompletePage{
    elements = {

        backButton: ()=> cy.get('#back-to-products')
        
    }

    clickBack(){

        cy.elements.backButton().click();

    }
}

export default new ChekoutCompletePage;