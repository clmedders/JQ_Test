
describe("make sure site works", () => {
    beforeEach(() => {
        cy.visit("https://www.joshqueen.com/") 
    })
    it("page loads", () => {
        //cy.visit("https://www.joshqueen.com/") 
    })

    it("desktop nav should contain about link with about context", () =>{
        //create an array of path values in the nav
        const pathValues = [
            '/about', '/merch', '/contact',
        ]
        //loop through path values 
        //for each value find the header nav for desktop
        //from within the desktop nav find this values link 
        //clicking link should take me to the values page
        pathValues.forEach(value => {
            cy.get('.header-display-desktop').within(() => {
                cy.get(`[href="${value}"]`, {log: true}).click()
                cy.url().should('include', value)
            })
        });
       
        
        //console.log(link)
        //cy.get('[href="/merch"]')
        //cy.get('[href="/contact"]')
        //cy.contains('About').click()
        //cy.contains("Merch").click()
        //cy.contains("Contact").click()
    })


   it("goes to bottom", () => {
       cy.scrollTo("bottom")
       cy.contains('Tour dates')
   })

   it('scroll halfway', () => {
       cy.scrollTo("center")
   })

   it('contact form works', () => {
    cy.visit("https://www.joshqueen.com/contact")
    cy.get('[name="fname"]').type('john')
    cy.get('[name="lname"]').type('doe')
    cy.get('[name="email"]').type('john-doe@example.com')
    //cy.get('[class="field-element"]').type('this is a test')
   })
})
    