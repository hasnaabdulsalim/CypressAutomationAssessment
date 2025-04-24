import CartPageElements from '../../ObjectRepository/CartPage.cy.js';

class CartMethods {

    static validateCart(productName) {

        // Checking the cart page title
        CartPageElements.CartPageHeading().should('exist').should('contain.text', 'Shopping Cart');
        // Verifying the product(s) present in the cart
        for (let i = 0; i < productName.length; i++) {
            CartPageElements.TextContains(productName[i]).should('exist');
        }

        /* Product price calculation check in the cart */

        // Arrays to hold product prices and quantities
        const prices = [];
        const quantities = [];

        // Loop through each item in the cart
        CartPageElements.CartItems().each(function ($el) {
            // Get the price text, remove any currency symbols, and store in prices array
            cy.wrap($el).find(CartPageElements.CartItemPrice).first().invoke('text').then(function (priceText) {
                const price = parseFloat(priceText.replace(/[^0-9.]/g, '')); // remove $ or any non-numeric characters
                prices.push(price);
            });

            // Get the quantity input value and store in quantities array
            cy.wrap($el).find(CartPageElements.CartItemQuantity).invoke('val').then(function (qtyText) {
                const qty = parseInt(qtyText); // convert quantity to integer
                quantities.push(qty);
            });
        });

        // Wait to ensure price and quantity arrays are filled before calculation
        cy.wait(1000).then(function () {
            let calculatedTotal = 0;
            // Calculate total based on each item’s price * quantity
            for (let i = 0; i < prices.length; i++) {
                calculatedTotal += prices[i] * quantities[i];
            }

            // Compare with displayed total
            CartPageElements.DisplayedTotalPrice().invoke('text').then(function (displayedTotalText) {
                const displayedTotal = parseFloat(displayedTotalText.replace(/[^0-9.]/g, ''));
                expect(calculatedTotal).to.be.closeTo(displayedTotal, 0.01); // allows for rounding differences
            });
        });

    }

    static checkoutFromCart() {
        CartPageElements.CheckoutButton().click()
        cy.wait(3000); // wait for 3 seconds
    }

}

export default CartMethods;
