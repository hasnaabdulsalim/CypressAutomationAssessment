import OrderConfirmationPageElements from '../../ObjectRepository/OrderConfirmation.cy';

class OrderConfirmationMethods {

    static orderConfirm() {
        cy.wait(2000);
        OrderConfirmationPageElements.OrderConfirmationMessage().should('be.visible');
    }

    static OrderNum() {
        OrderConfirmationPageElements.OrderNumberCapture().should('exist').then(($value) => {
            let text1 = $value.text()
            cy.wrap(text1).as('OrderNumber')
        });
    }
}

export default OrderConfirmationMethods;
