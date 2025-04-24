class CreateAccountPageElements {

    static CustomerCreatePageTitle() {
        return cy.xpath("//span[contains(text(),'Create New Customer Account')]");
    }

    static FirstName() {
        return cy.get('#firstname');
    }

    static LastName() {
        return cy.get('#lastname');
    }

    static EmailAddress() {
        return cy.get('#email_address');
    }

    static Password() {
        return cy.get("#password");
    }

    static ConfirmPassword() {
        return cy.get("#password-confirmation");
    }

    static CreateAccountButton() {
        return cy.xpath("//span[contains(text(),'Create an Account')]");
    }

    static CreateAccountSuccessMessage() {
        return cy.xpath("//div[contains(text(),'Thank you for registering with Main Website Store.')]");
    }

}

export default CreateAccountPageElements;