/// <reference types="Cypress" />

describe('check about page', () => {
  // go to about page and make sure page loads
  it('make sure page loads', () => {
    cy.visit('https://www.joshqueen.com/about')
    cy.url().should('include', 'about')
  })
})



