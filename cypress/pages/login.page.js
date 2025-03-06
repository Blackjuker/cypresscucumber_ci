class LoginPage {
    elements = {
        username: () => cy.get('#user-name'),
        password: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test=error]')
    }

    saisirUsername(username) {
        this.elements.username().clear().type(username)
    }

    saisirPassword(password) {
        this.elements.password().type(password)
    }

    cliqueSurLoginButton(){
        this.elements.loginButton().click()
    }

    login(username, password) {
        this.saisirUsername(username)
        this.saisirPassword(password)
        this.cliqueSurLoginButton()
    }



}

export default new LoginPage();