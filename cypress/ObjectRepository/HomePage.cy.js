class HomePageElements {

    static CreateAnAccount() {
        return cy.xpath("//a[contains(text(),'Create an Account')]");
    }

    static SignInLink() {
        return cy.xpath("//a[contains(text(),'Sign In')]");
    }

    static CustomerNameDropDown() {
        return cy.get('.action.switch');
    }

    static SignOut() {
        return cy.xpath("//a[contains(text(),'Sign Out')]");
    }

    static SignOutVerificationText() {
        return cy.xpath("//span[contains(text(),'You are signed out')]");
    }

    static UserName() {
        return cy.get('#email');
    }

    static Password() {
        return cy.get("input[name='login[password]']");
    }

    static SignInButton() {
        return cy.xpath("//span[contains(text(),'Sign In')]");
    }

    static Welcome() {
        return cy.get(".greet .logged-in");
    }

    static SearchBox() {
        return cy.get("#search");
    }

    static SearchIcon() {
        return cy.get(".action.search");
    }

    static ShowCart() {
        return cy.get(".showcart");
    }

    static ViewCart() {
        return cy.get("a.viewcart");
    }

}

export default HomePageElements;
