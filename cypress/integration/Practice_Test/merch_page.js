/// <reference types="Cypress" />

describe('check merch page and that items can be selected and added to cart', () => {
  beforeEach(() => {
		//page should load fully 
		cy.visit("https://www.joshqueen.com/merch")
    cy.url().should('include', 'merch')
	})
  it('album can be added to cart',() => {
    // from the merch page each item can be selected 
    // after that each item can be added to cart 
    // verfiy that item has been added to cart 
    cy.get('[href="/merch/p/album-82pwe"]').click()
    cy.get('[class="product-quantity-input"]')
    cy.get('[class="sqs-add-to-cart-button-inner"]').click()
    cy.get('[class="icon icon--cart"]').click()
    cy.url().should('include', 'cart')
  })
  // // it('hand written lyrics can be added to cart',() => {
  // //   // from the merch page each item can be selected 
  // //   // after that each item can be added to cart 
  // //   // verfiy that item has been added to cart 
  // //   cy.get('[href="/merch/p/poster-hcjnk"]').click()
  // //   cy.get('[class="variant-select-wrapper"]').click()
  // //   cy.get('[class="product-quantity-input"]')
  // //   cy.get('[class="sqs-add-to-cart-button-inner"]').click()
  // //   cy.get('[class="icon icon--cart"]').click()
  // //   cy.url().should('include', 'cart')
  // })
  it('album notes can be added to cart',() => {
    // from the merch page each item can be selected 
    // after that each item can be added to cart 
    // verfiy that item has been added to cart 
    cy.get('[href="/merch/p/t-shirt-zcxh2"]').click()
    cy.get('[class="product-quantity-input"]')
    cy.get('[class="sqs-add-to-cart-button-inner"]').click()
    cy.get('[class="icon icon--cart"]').click()
    cy.url().should('include', 'cart')
  })
 it('logo goes back to home page', () => {
   cy.get('[class="header-announcement-bar-wrapper"]').click()
   cy.url().should('include', 'joshqueen')
 })
})
