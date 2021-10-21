/// <reference types="cypress"/>

describe('validating UI elements', () => {

    it('should verify the login & radio buttons of application', () => {

        cy.visit("http://demo.guru99.com/test/newtours/") //visit url
        cy.url().should('include','test')// get the url & verifying include text

        cy.get("input[name=userName]").should('be.visible').should('be.enabled').type('preetha') 
        cy.get(" input[name=password]").should('be.visible').should('be.enabled').type('preetha') 
        cy.get("input[name=submit]").should('be.visible').click() //signin

        // opening flight tab 
        cy.get("a[href='reservation.php']").click() //click the flights page
        cy.title().should('eq','Find a Flight: Mercury Tours:') // title verification

        // intracting with radio buttons
        cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked')
        cy.get('input[value="oneway"]').should('be.visible').should('not.be.checked').click()
        cy.get('[name="findFlights"]').should('be.visible').click()
        cy.title().should('eq','Find a Flight: Mercury Tours:')

        cy.get('[src="images/home.gif"]').click()


    });

});