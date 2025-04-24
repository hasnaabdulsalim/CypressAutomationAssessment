import PLPPageElements from "../../ObjectRepository/PLPPage.cy";

class PLPMethods {

    static addProductToCartFromPLP(productName) {
        PLPPageElements.ProductCardName().should('contain.text', productName)
        PLPPageElements.ProductFirstSize().first().click() // clicking on first size of the searched product
        PLPPageElements.ProductFirstColor().first().click() // clicking on first color of the searched product
        PLPPageElements.AddToCartButton().first().click({force: true}) // clicking on Add to Cart button
        cy.wait(3000) // wait for 3 seconds
    }

}

export default PLPMethods;
