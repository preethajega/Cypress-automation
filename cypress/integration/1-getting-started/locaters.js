/// <reference types="cypress" />
describe('locating elements in ', () => {

    it('should validate the type of locaters', () => {

        cy.visit("https://www.flipkart.com/")
        cy.get("._3704LK").type("shoes");  //searchbar
        cy.wait(2000);
        cy.get('.L0Z3Pu').click();  //searchicon
        cy.wait(3000);
        // productlink
        /*cy.get("img[src*='https://rukminim1.flixcart.com/image/495/594/kmwcuq80/shoe/w/u']").click();*/
        cy.get('[data-id="SHOGFPAZSUAMGMKG"] > ._1xHGtK > ._2UzuFa > :nth-child(1) > :nth-child(1) > ._3ywSr_ > ._312yBx > ._2r_T1I').click()
        cy.wait(5000);
        cy.get('button[xpath=1]').click(); // addtocart 
        cy.get('a[xpath=1]').click(); //sizeof shoe
        cy.get('button[xpath=1]').click(); // addtocart 
        cy.wait(3000);
        cy.get('span[css=1]').contains('₹299'); // validate the price


    });
    
});