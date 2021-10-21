/// <reference types ="cypress"/>

describe('validating a backward,forward of an application', () => {
    it('should verfiy the aplication by moving backward', () => {
        cy.visit('https://www.flipkart.com/')//homepage
        cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')

        cy.get('[alt="Fashion"]').click({force:true})//fashionpage
        cy.title().should('eq','Fashion Big Diwali Sale Trendy 2021 Store Online - Buy Fashion Big Diwali Sale Trendy 2021 Online at Best Price in India | Flipkart.com')
        
        cy.go('back')
        cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')

        cy.go('forward')
        cy.title().should('eq','Fashion Big Diwali Sale Trendy 2021 Store Online - Buy Fashion Big Diwali Sale Trendy 2021 Online at Best Price in India | Flipkart.com')

        cy.go(-1) // back
        cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')

        cy.go(1) // forward
        cy.title().should('eq','Fashion Big Diwali Sale Trendy 2021 Store Online - Buy Fashion Big Diwali Sale Trendy 2021 Online at Best Price in India | Flipkart.com')

        cy.reload()

    });
});