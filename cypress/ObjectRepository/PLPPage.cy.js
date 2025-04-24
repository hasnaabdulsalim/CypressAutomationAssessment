class PLPPageElements {

    static ProductCardName() {
        return cy.get(".product-item-link");
    }

    static ProductFirstSize() {
        return cy.get('div[attribute-code="size"] div[index="0"]');
    }

    static ProductFirstColor() {
        return cy.get('div[attribute-code="color"] div[index="0"]');
    }

    static AddToCartButton() {
        return cy.get(".action.tocart.primary");
    }

    static AddToWishlistButton() {
        return cy.get(".action.towishlist");
    }

}

export default PLPPageElements;