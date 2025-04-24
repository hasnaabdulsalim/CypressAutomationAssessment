class WishlistPageElements {

    static AddSuccessMessage() {
        return cy.get(".message-success");
    }

    static WishlistPageHeading() {
        return cy.get(".page-title .base");
    }

    static ProductCardName() {
        return cy.get(".product-item-link");
    }

    static AddAllToCartButton(){
        return cy.get("[data-role='all-tocart']");
    }

}

export default WishlistPageElements;