/// <reference types="cypress"/>

describe('validating a UI elements of register form', () => {
    
    it('should validate the Hobbies check box', () => {

        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check(['Cricket','Hockey'])
    });

    it('should validate the skils dropdown', () => {
        cy.get('select[ng-model="Skill"]').select('Adobe Photoshop').should('have.value','Adobe Photoshop')

    });

    it('should select the multiple languages from language scrolldown box',() => {
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('Catalan').click()
        cy.get('.ui-corner-all').contains('Bulgarian').click()
        cy.get('.ui-corner-all').contains('Danish').click()
        cy.get('.ui-corner-all').contains('Filipino').click()
        cy.get('.ui-corner-all').contains('English').click()
    });

    it('should select the country from coomon box', () => {
        cy.get('span.selection > span').click({force:true})
        cy.get('[type="search"]').type('india')
        cy.get('[type="search"]').type('{enter}')

    });
});