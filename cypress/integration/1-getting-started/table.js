/// <reference types ="cypress"/>

describe('validating a application by web tables', () => { 

    it('validating a Test Table' , () => {
        
        cy.visit('http://testautomationpractice.blogspot.com/')

          //checking a value presented in table anyware
        cy.get("table[name='BookTable']").contains('td','Master In Selenium').should('be.visible')

          //checking a specific value presence in rows & coloumn
        cy.get('[name="BookTable"]>tbody>tr:nth-child(5)>td:nth-child(3)').contains('Selenium').should('be.visible')

        // verify the author amod who wrotes a Master in java
        cy.get('tbody>tr>td:nth-child(2)').each(($name,index,$list) => {
            const text = $name.text()
            if(text.includes('Amod'))
            {
                cy.get('[name="BookTable"]>tbody>tr>td:nth-child(1)').eq(index).then(function(bname)
                {
                     const bookname = bname.text()
                     expect(bookname).to.equal('Master In Java')
                })
            }
        })



    });
});


