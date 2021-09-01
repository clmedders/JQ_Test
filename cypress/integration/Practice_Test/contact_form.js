describe('contact form can be filled out and is working', () => {
    //contact form should be able to be filled out 
    // page should be visted and loaded 
    // should be able to type name, email and message in fields provided 
    // will not do submit since I dont have access to the form on the back end

    it('contact form is working', () => {
        cy.visit("https://www.joshqueen.com/contact")
        cy.url().should('include', 'contact')
        cy.get('[name="fname"]').type('john')//.should('have.text', 'john')
        cy.get('[name="lname"]').type('doe')//.should('have.text', 'doe')
        cy.get('[name="email"]').type('john-doe@example.com')//.should('include.text', '@example.com')
        cy.get('[id=textarea-yui_3_17_2_1_1553888888520_3747-field]').type('this is a test')//.should('include.text', "this is") //dont know how i figured this out but adjusted format to name it in the DOM
    })
})

