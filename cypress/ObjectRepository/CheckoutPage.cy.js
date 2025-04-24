class CheckoutPageElements {

    static ShippingPgHeading() {
        return cy.xpath("(//*[contains(text(),'Shipping Address')])[1]");
    }

    static StreetAddress() {
        return cy.get("input[name='street[0]']");
    }

    static City() {
        return cy.get("input[name='city']");
    }

    static State() {
        return cy.get("select[name='region_id']");
    }

    static PostalCode() {
        return cy.get("[name='postcode']");
    }

    static ChooseCountry() {
        return cy.get("select[name='country_id']");
    }

    static PhoneNumber() {
        return cy.get("input[name='telephone']");
    }

    static ShippingMethod() {
        return cy.get(".radio");
    }

    static NextButton() {
        return cy.get("button.continue");
    }

    static PaymentPgHeading() {
        return cy.xpath("//*[contains(text(),'Payment Method')]");
    }

    static PlaceOrderButton() {
        return cy.get("button.checkout");
    }
}

export default CheckoutPageElements;