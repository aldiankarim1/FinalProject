import baseTricentis from "../../support/pageObject/tricentis/baseTricentis"

describe('Verify login scenario', () => {
  const BaseTricentis = new baseTricentis()
    it('Success login', () => {
      cy.visit('/')
      cy.get('.ico-login').should('be.visible').click()
      cy.get(BaseTricentis.email).type('elvanisa@getnada.com')
      cy.get(BaseTricentis.password).type('elva123')
      cy.get('form > .buttons > .button-1').click()
      cy.get('.header-links > ul > :nth-child(1) > .account').should('contain.text', 'elvanisa@getnada.com')
      cy.url().should('include', 'https://demowebshop.tricentis.com') 
    })
  })