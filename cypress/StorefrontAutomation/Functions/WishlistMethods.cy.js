import WishlistPageElements from "../../ObjectRepository/WishlistPage.cy";

class WishlistMethods {

    static addProductsToCartFromWishlist(){
        WishlistPageElements.AddAllToCartButton().should('exist').click();
        WishlistPageElements.AddSuccessMessage().should('exist');
    }

}

export default WishlistMethods;
