import baseTricentis from "../../support/pageObject/tricentis/baseTricentis"

describe('Verify login scenario', () => {
  const BaseTricentis = new baseTricentis()
    it('Success login', () => {
      cy.visit(Cypress.env('urlStaging'))
      cy.get('[data-test="username"]').type('standart_user')
      
    })
  })