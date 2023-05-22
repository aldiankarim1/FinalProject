import baseTricentis from "../../support/pageObject/tricentis/baseTricentis"
import registerPage from "../../support/pageObject/tricentis/registerPage"
const registerInput = require("../../fixtures/tricentis/register.json")

describe('Verify register scenario', () => {
  const BaseTricentis = new baseTricentis()
  const RegisterPage = new registerPage()
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.klik(RegisterPage.registerMenu)
    //cy.get(RegisterPage.registerMenu).click()
  })
  it('C123 Failed Register Empty Fields', () => {
    cy.get(RegisterPage.registerBtn).should('be.visible').click()
    cy.get(RegisterPage.lastNameRequired).should('contain.text','Last name is required.')
    cy.get(RegisterPage.emailRequired).should('contain.text','Email is required.')
  })
  it('C124 Failed Register using Existing Email', () => {
    cy.klik(RegisterPage.genderMale)
    //cy.get(RegisterPage.genderMale).should('be.visible').click()
    cy.get(RegisterPage.firstName).should('be.visible').type(registerInput.firstName)
    cy.get(RegisterPage.lastName).should('be.visible').type(registerInput.lastName)
    cy.get(BaseTricentis.email).should('be.visible').type(registerInput.emailExisted)
    cy.get(BaseTricentis.password).should('be.visible').type(registerInput.passwordValid)
    cy.get(RegisterPage.confirmPassword).should('be.visible').type(registerInput.confirm_password_valid)
    cy.klik(RegisterPage.registerBtn)
    //cy.get(RegisterPage.registerBtn).should('be.visible').click()
    cy.get(RegisterPage.errorMessage).should('contain.text', registerInput.message_email_exist)
  })
  it('Sucess Register using New Email', () => {
    cy.get(RegisterPage.genderMale).should('be.visible').click()
    RegisterPage.inputFirstName(registerInput.firstName)
    RegisterPage.inputLastName()
    cy.ketik(BaseTricentis.email, `${Date.now()}@gmail.com`)
    //cy.get(BaseTricentis.email).should('be.visible').type(`${Date.now()}@gmail.com`)
    cy.ketik(BaseTricentis.password, registerInput.passwordValid)
    //cy.get(BaseTricentis.password).should('be.visible').type('Password12345')
    cy.ketik(RegisterPage.confirmPassword, registerInput.confirm_password_valid)
    //cy.get(RegisterPage.confirmPassword).should('be.visible').type('Password12345')
    cy.get(RegisterPage.registerBtn).should('be.visible').click()
    cy.get(RegisterPage.successMessage).should('be.visible').contains('Your registration completed')
  })
})