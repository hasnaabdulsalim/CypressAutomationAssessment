import PDPPageElements from "../../ObjectRepository/PDPPage.cy";
import WishlistPageElements from "../../ObjectRepository/WishlistPage.cy";

class PDPMethods {

    static addProductToWishlistFromPDP(productName) {
        PDPPageElements.ProductName().should('contain.text', productName)
        PDPPageElements.ProductFirstSize().first().click() // clicking on first size of the searched product
        PDPPageElements.ProductFirstColor().first().click() // clicking on first color of the searched product
        PDPPageElements.AddToWishlistButton().first().click({force: true}) // clicking on Add to Wishlist button
        cy.wait(3000) // wait for 3 seconds
        WishlistPageElements.AddSuccessMessage().should('exist');
        // Checking the cart page title
        WishlistPageElements.WishlistPageHeading().should('exist').should('contain.text', 'My Wish List');
        WishlistPageElements.ProductCardName().should('contain.text', productName);
    }

}

export default PDPMethods;
