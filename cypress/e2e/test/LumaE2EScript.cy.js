import HomePageMethods from '../../StorefrontAutomation/Functions/HomePageMethods.cy.js';
import CartMethods from '../../StorefrontAutomation/Functions/CartMethods.cy.js';
import CheckOutMethods from '../../StorefrontAutomation/Functions/CheckoutMethods.cy.js';
import OrderConfirmationMethods from '../../StorefrontAutomation/Functions/OrderConfirmationMethods.cy.js';
import PDPMethods from "../../StorefrontAutomation/Functions/PDPMethods.cy";
import WishlistMethods from "../../StorefrontAutomation/Functions/WishlistMethods.cy";

describe('TestSuite', function () {

    let userdata;

    it('RegistrationFlowLoginValidation', function () {

        // Registering to application
        HomePageMethods.registerApplication();
        // Logging out from application
        HomePageMethods.logoutApplication();
        // Login to the application using the registered email and password
        HomePageMethods.loginApplication(userdata.EmailAddress, userdata.password);

    });

    it('PlaceOrderMultipleProducts', function () {

        // Login to the application using the provided email and password
        HomePageMethods.loginApplication(userdata.email, userdata.password);
        const productName = [userdata.ProductNameOne, userdata.ProductNameTwo];
        // Adding multiple products to cart
        HomePageMethods.addMultipleProductsToCart(productName, 2);
        // Go to the cart page
        HomePageMethods.goToCart();
        // Validate the cart, ensuring the specified product(s) are present, also price calculation
        CartMethods.validateCart(productName);
        // Proceed to checkout from the cart
        CartMethods.checkoutFromCart();
        // Add a shipping address during checkout
        CheckOutMethods.addShippingAddress();
        // Place the order
        CheckOutMethods.placeOrder();
        // Confirm the order and complete the checkout process
        OrderConfirmationMethods.orderConfirm();
        // Retrieve and display the order number
        OrderConfirmationMethods.OrderNum();

    });

    it('WishlistProductAddCheckout', function () {

        // Login to the application using the provided email and password
        HomePageMethods.loginApplication(userdata.email, userdata.password);
        // Search for a product on the homepage and validate search
        HomePageMethods.searchProductGoPDP(userdata.ProductNameOne);
        // Adding a product to wishlist from PLP
        PDPMethods.addProductToWishlistFromPDP(userdata.ProductNameOne);
        // Adding products to cart from Wishlist
        WishlistMethods.addProductsToCartFromWishlist();

    });

    it('ProductSearchAndValidate', function () {

        // Login to the application using the provided email and password
        HomePageMethods.loginApplication(userdata.email, userdata.password);
        // Search for a product on the homepage and validate search
        HomePageMethods.searchProduct(userdata.ProductNameOne);

    });

    before(function () {
        // runs once before all tests in the block
        cy.fixture('TestData').then(function (data) {
            userdata = data;
        });
    });
});
