class CartPageElements {

    static CartPageHeading() {
        return cy.get(".page-title .base");
    }

    static TextContains(data) {
        return cy.xpath("(//*[contains(text(),'" + data + "')])[1]");
    }

    static CartItems() {
        return cy.get('.cart.item');
    }

    static CartItemPrice = '.price';
    static CartItemQuantity = 'input.input-text.qty';

    static DisplayedTotalPrice(){
        return cy.get('.grand.totals .price');
    }

    static CheckoutButton() {
        return cy.xpath("//span[contains(text(),'Proceed to Checkout')]");
    }

}

export default CartPageElements;