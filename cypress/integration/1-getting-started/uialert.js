///<reference types="cypress"/>

describe('validating a alert box', () => {
  /*  it('verifinf alertbox' ,() =>{

        cy.visit('https://mail.rediff.com/cgi-bin/login.cgi')
        cy.get('[title="Sign in"]').click()
        
        //to capture the alert message in cypress use below method
       // syntax for alert cy.on('event',(variable to capture a alert text) =>{});
        cy.on('window:alert',(str) =>{
            expect(str).be.equal('Please enter a valid user name')
        })
    });*/

      it('should validate the alert box like confirm or cancel', () => {
          cy.visit('http://testautomationpractice.blogspot.com/')
          cy.get('[onclick="myFunction()"]').click()
          cy.on('window:confirm',(str) =>{
            expect(str).be.equal('Press a button!')
        })


      });
});
