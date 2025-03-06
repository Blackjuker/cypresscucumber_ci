class MenuPage{
    elements={
        menuBoutton : () => cy.get("#react-burger-menu-btn"),
        allItem : () => cy.get("#inventory_sidebar_link"),  
        logOut : () => cy.get("#logout_sidebar_link"),
        resetAppState : () => cy.get("#reset_sidebar_link"),

    };

    sasirSurMenuButton() {
        this.elements.menuBoutton().click();
    }
    saisirAllItem(){
        this.elements.allItem().click();

    }
    saisirLogOut(){
        this.elements.logOut().click();
    }
    saisirResstAppState(){
        this.elements.resetAppState().click();
    }



}
export default new MenuPage();