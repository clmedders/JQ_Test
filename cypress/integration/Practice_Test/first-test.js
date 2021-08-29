describe("make sure site works", () => {
    beforeEach(() => {
        cy.visit("https://www.joshqueen.com/") 
    })
    it("page loads", () => {
        cy.visit("https://www.joshqueen.com/") 
    })

    it("contains and clicks", () =>{
        cy.contains("About").click()
        cy.contains("Merch").click()
        cy.contains("Contact").click()
    })

   it("goes to bottom", () => {
       cy.scrollTo("bottom")
   })
   it('contact form works', () => {
    cy.visit("https://www.joshqueen.com/contact")
    cy.contains("Email").click("right").type("john-doe@example.com")
    cy.contains("Message").click("right").type("This to to see if it works")
   })
})
    