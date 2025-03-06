@Card
Feature: Ajouter des produits au panier
    
    Background:
        Given je suis sur la page "https://www.saucedemo.com/"
        When je saisis le username "standard_user"
        And je saisis le password "secret_sauce"
        And je clique sur le bouton Login
        Then la page produits saffiche 


    Scenario: Vérifier les produits s'ils sont ajoutés dans panier
        When jajoute des produits
        And je vais dans card
        Then je retrouve les memes produits qui ont ete ajoutes
