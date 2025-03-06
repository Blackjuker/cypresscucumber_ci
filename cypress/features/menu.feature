@Menu
Feature: Menu et déconnexion 
    
    Background:
        Given je suis sur la page "https://www.saucedemo.com/"
        When je saisis le username "standard_user"
        And je saisis le password "secret_sauce"
        And je clique sur le bouton Login
        Then la page produits saffiche 

    Scenario: je clique sur le menu et je me déconnecte
        When je clique sur menu
        And je clique sur deconnexion
        Then je suis sur la page de connexion
