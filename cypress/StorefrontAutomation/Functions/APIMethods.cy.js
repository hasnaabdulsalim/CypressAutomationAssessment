class APIMethods {

    static getUniqueId() {
        APIMethods.getToken()
        cy.get('@token').then((value) => {
            cy.log('token is: ' + value)
      
          

        cy.request({
            method: 'POST',
            url: 'https://ocean.webapi-stg.shopsphere.com/api/v1/products/search?page=0&size=24',
            headers: {
                'Authorization': 'Bearer '+value,
            },
            body: {
                searchTerm: 'Liverpool F.C. 2021/22 Stadium Home Women T-shirts',
                attributes: []
            }
        }).then((response) => {
            const uniqueId = response.body.data.responseObjects[0].uniqueId;
            cy.log('Unique ID: ' + uniqueId)
            cy.wrap(uniqueId).as('uniqueId');
        });
    });

    }
    static getToken() {

        cy.request({
            method: 'POST',
            url: 'https://auth-stg.shopsphere.com/v1/auth/token',
            body: {
              serviceUrl: 'ocean.webapi-stg.shopsphere.com',
              grantType: 'Anonymous',
              appId: 'MozCom'
            }
          }).then((response) => {
            const token = response.body.data.token;
            // Use the token as needed in your test
            // For example, you can log it to the Cypress console
           // cy.log('Token:', token);
            cy.wrap(token).as('token');
          });
    }
}

export default APIMethods;