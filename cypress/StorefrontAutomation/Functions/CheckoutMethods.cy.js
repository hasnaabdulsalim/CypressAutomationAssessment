import CheckoutPageElements from '../../ObjectRepository/CheckoutPage.cy';

class CheckOutMethods {

  static addShippingAddress() {
    
    cy.fixture('TestData').then((data) => {
      CheckoutPageElements.ShippingPgHeading().should('exist');
      cy.get('body').then(function ($body) {
        // Check if shipping address already exists
        if ($body.find('.shipping-address-item').length = 0) {
          // No address – fill in the new shipping address form
          CheckoutPageElements.StreetAddress().should('exist').clear().type(data.StreetAddress);
          CheckoutPageElements.City().should('exist').clear().type(data.City);
          CheckoutPageElements.State().should('exist').select(1); // Select a state (e.g., Alabama)
          CheckoutPageElements.PostalCode().should('exist').clear().type(data.PostalCode);
          CheckoutPageElements.ChooseCountry().should('exist');
          CheckoutPageElements.PhoneNumber().should('exist').clear().type(data.PhoneNumber);
        } else {
          // Address exists – continue
        }
      });
      CheckoutPageElements.ShippingMethod().first().should('exist').click();
      CheckoutPageElements.NextButton().should('exist').click();
      cy.wait(2000);
      CheckoutPageElements.PaymentPgHeading().should('exist');

    });

  }
  static placeOrder()
  {
    CheckoutPageElements.PaymentPgHeading().should('be.visible');
    CheckoutPageElements.PlaceOrderButton().should('be.visible').click();
    cy.wait(4000);
  }
    
}

export default CheckOutMethods;
