Feature: Produits

  Background:
    Given je suis sur la page "https://www.saucedemo.com/"
    When je saisis le username "standard_user"
    And je saisi le password "secret_sauce"
    And je clique sur le bouton "login-button"
    Then je suis redirigé au dashbord

  @VerificationList
  Scenario: Verification de list de produits
    Then je verifie la liste des produits

  @Tri1
  
  Scenario: Verification du tri des produits par nom
    When je trie les produits par nom
    Then je vérifie que les produits sont triés par nom

  @Tri2
  Scenario: Verification du tri des produits par prix (bas à haut)
    When je trie les produits par prix
    Then je vérifie que les produits sont triés par prix

  @AddToCart
  Scenario: Ajout d'un produit au panier
    When je clique sur "Add to cart"
    Then le produit est ajouté au panier

  @RemoveProduct
  Scenario: Suppression d'un produit du panier
    When je clique sur "Add to cart"
    And je supprime le produit
    Then le produit est bien supprimé du panier
