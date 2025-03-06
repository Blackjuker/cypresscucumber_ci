class CheckoutInformationPage {

    elements={
        firstNameInput: ()=> cy.get("[data-test='firstName']"),
        lastNameInput: ()=> cy.get("[data-test='lastName']"),
        postalCodeInput: ()=> cy.get("[data-test='postalCode']"),
        continueButton: ()=> cy.get("[data-test='continue']")
    }

    enterFirstName(firstName) {
        this.elements.firstNameInput().clear().type(firstName)
    }

    enterLastName(lastName) {
        this.elements.lastNameInput().clear().type(lastName)
    }

    enterPostalCode(postalCode) {
        this.elements.postalCodeInput().clear().type(postalCode)
    }

    clickContinue() {
        this.elements.continueButton().click()
    }

    completeCheckoutInformation( firstName, lastName, postalCode ) {
        this.enterFirstName(firstName)
        this.enterLastName(lastName)
        this.enterPostalCode(postalCode)
        this.clickContinue()
      }

}

export default new CheckoutInformationPage()