@detail 
Feature: Détails du produit

Background:
  Given je suis sur la page "https://www.saucedemo.com/"
  When je saisis le username "standard_user"
    And je saisis le password "secret_sauce"
    And je clique sur le bouton Login
    Then la page produits saffiche
  Scenario: Vérifier que les détails du produit sont identiques avant et après le clic
    When il sélectionne un produit aléatoire
    And il clique sur ce produit
    Then la page de détail du produit s'affiche avec le bon nom

