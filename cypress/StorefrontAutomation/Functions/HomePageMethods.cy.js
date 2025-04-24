import HomePageElements from '../../ObjectRepository/HomePage.cy.js';
import PLPPageElements from '../../ObjectRepository/PLPPage.cy.js';
import CreateAccountPageElements from "../../ObjectRepository/CreateAccountPage.cy";
import PLPMethods from "./PLPMethods.cy";
import PDPPageElements from "../../ObjectRepository/PDPPage.cy";

class HomePageMethods {

    static registerApplication() {

        // Generate a random email
        const randomStr = Math.random().toString(36).substring(2, 8); // random 6-character string
        const email = `cypresstest${randomStr}@example.com`;

        cy.fixture('TestData').then((data) => {
            // Update the TestData object with the generated email
            const updatedData = { ...data, EmailAddress: email };
            // Write the updated object back to TestData.json
            cy.writeFile('cypress/fixtures/TestData.json', updatedData);

            cy.visit(Cypress.env('url'));
            cy.title().should('eq', "Home Page");
            HomePageElements.CreateAnAccount().first().click();
            CreateAccountPageElements.CustomerCreatePageTitle().should('be.visible');
            CreateAccountPageElements.FirstName().type(data.FirstName);
            CreateAccountPageElements.LastName().type(data.LastName);
            CreateAccountPageElements.EmailAddress().type(data.EmailAddress);
            CreateAccountPageElements.Password().first().type(data.password);
            CreateAccountPageElements.ConfirmPassword().type(data.password);
            CreateAccountPageElements.CreateAccountButton().first().click();
            cy.wait(3000); // wait for 3 seconds
            CreateAccountPageElements.CreateAccountSuccessMessage().should('be.visible');
        });
    }

    static logoutApplication() {
        HomePageElements.CustomerNameDropDown().first().click();
        HomePageElements.SignOut().first().click();
        HomePageElements.SignOutVerificationText().should('be.visible');
        HomePageElements.SignInLink().should('be.visible');
    }

    static loginApplication(user, pass) {
        cy.visit(Cypress.env('url'));
        HomePageElements.SignInLink().first().click();
        HomePageElements.UserName().first().type(user);
        HomePageElements.Password().first().type(pass);
        HomePageElements.SignInButton().first().click();
        cy.wait(6000); // wait for 6 seconds
        HomePageElements.Welcome().first().should('be.visible');
    }

    static addMultipleProductsToCart(productNames, count) {

        for (let i = 0; i < count; i++) {
            // Search for the specified product on the homepage
            this.searchProduct(productNames[i]);
            // Add the product to the cart from the Product Listing Page (PLP)
            PLPMethods.addProductToCartFromPLP(productNames[i]);
        }

    }

    static searchProduct(item) {

        HomePageElements.SearchBox().should('be.visible').clear().type(item);
        HomePageElements.SearchIcon().should('be.visible').click();
        cy.wait(2000); // wait for 2 seconds
        PLPPageElements.ProductCardName().first().should('exist').should('contain.text', item);

    }

    static searchProductGoPDP(item) {

        this.searchProduct(item);
        PLPPageElements.ProductCardName().first().click();
        PDPPageElements.ProductName().should('exist').should('contain.text', item);

    }

    static goToCart() {
        HomePageElements.ShowCart().click()
        HomePageElements.ViewCart().click()
    }

}

export default HomePageMethods;
