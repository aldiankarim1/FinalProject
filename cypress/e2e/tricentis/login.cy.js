describe('Verify login scenario', () => {
    it('Success login', () => {
      cy.visit('https://itera-qa.azurewebsites.net/')
      


      cy.get('.ico-login').should('be.visible').click()
      cy.get('#Email').type('elvanisa@getnada.com')
      cy.get('#Password').type('elva123')
      cy.get('form > .buttons > .button-1').click()
      cy.get('.header-links > ul > :nth-child(1) > .account').should('contain.text', 'elvanisa@getnada.com')
      cy.url().should('include', 'https://demowebshop.tricentis.com') 
    })
  })