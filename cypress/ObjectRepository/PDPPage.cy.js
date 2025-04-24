class PDPPageElements
{
    static ProductName() {
        return cy.get(".product-info-main .base");
    }

    static ProductFirstSize() {
        return cy.get('div[attribute-code="size"] div[index="0"]');
    }

    static ProductFirstColor() {
            return cy.get('div[attribute-code="color"] div[index="0"]');
    }

    static AddToWishlistButton() {
        return cy.get(".product-addto-links .towishlist");
    }
}

export default PDPPageElements;