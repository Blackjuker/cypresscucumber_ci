@Login
Feature: Login to SauceDemo 
    Background:
        Given je suis sur la page "https://www.saucedemo.com/"

    @valid_credentials
    Scenario: Login avec username valide et password valide
    When je saisis le username "standard_user"
    And je saisis le password "secret_sauce"
    And je clique sur le bouton Login
    Then la page produits saffiche

    @invalid_credentials
    Scenario: Login avec username valide et password invalide
    When je saisis le username "standard_user"
    And je saisis le password "invalid_password"
    And je clique sur le bouton Login
    Then un message derreur est affiche

    @invalid_credentials
    Scenario: Login avec username invalide et password valide
    When je saisis le username "invalid_user"
    And je saisis le password "secret_sauce"
    And je clique sur le bouton Login
    Then un message derreur est affiche

    @invalid_credentials
    Scenario: Login avec username invalide et password invalide
    When je saisis le username "invalid_user"
    And je saisis le password "invalid_password"
    And je clique sur le bouton Login
    Then un message derreur est affiche

    