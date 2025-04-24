class OrderConfirmationPageElements
{
    static OrderConfirmationMessage()
    {
        return cy.xpath("//span[contains(text(),'Thank you for your purchase!')]");
    }

    static OrderNumberCapture()
    {
        return cy.get(".order-number");
    }

}
export default OrderConfirmationPageElements;