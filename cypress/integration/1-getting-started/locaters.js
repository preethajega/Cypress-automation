/// <reference types="cypress" />
describe('locating elements in ', () => {

    it('should validate the type of locaters', () => {

        cy.visit("https://www.flipkart.com/")
        cy.get("._3704LK").type("shoes");  //searchbar
        cy.wait(2000);
        cy.get('.L0Z3Pu').click();  //searchicon
        cy.wait(3000);
        // productlink
        cy.get("[src='https://rukminim1.flixcart.com/image/495/594/kg9qbgw0-0/shoe/b/5/d/pn-168-169-170-171-172-8-chevit-multicolor-original-imafwjjf3dzyg6wf.jpeg?q=50']");
        
        cy.wait(5000);
        cy.get('._2KpZ6l _2U9uOA _3v1-ww').click(); // addtocart 
        cy.get('#swatch-0-size > a').click(); //sizeof shoe
        cy.get('._2KpZ6l _2U9uOA _3v1-ww').click(); // addtocart 
        cy.wait(3000);
        cy.get('._2-ut7f _1WpvJ7').contains('₹471'); // validate the price


    });
    
});