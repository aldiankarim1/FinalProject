import loginPage from "../../support/PageObject/itera/Login"
const dataLogin = require('../../fixtures/itera/Login.json')
const dataSignUp = require('../../fixtures/itera/SignUp.json')

describe('Login Case', () => {

    const LoginPage = new loginPage()
    beforeEach(() => {
        cy.visit("/")
        cy.get(LoginPage.link_login).should('be.visible').click()
        
    })

    it('Login Success', () => {
        cy.url().should('eq', dataLogin.url_login)
        cy.get(LoginPage.title_login).should('have.text', dataLogin.text_login)
        cy.get(LoginPage.form_username).should('be.visible').type(dataSignUp.username_already_exist)
        cy.get(LoginPage.form_password).should('be.visible').type(dataSignUp.password_valid)
        cy.get(LoginPage.btn_login).should('be.visible').click()
        cy.get(LoginPage.title_dashboard).should('have.text', dataLogin.text_dashboard)
        cy.get(LoginPage.title_welcome).should('have.text', dataLogin.title_welcome + dataSignUp.username_already_exist)
        cy.get(LoginPage.title_customer_details).should('have.text', dataLogin.title_customer_details)
        cy.url().should('eq', dataLogin.url_dashboard)
    })

    it('Login failed with wrong username', () => {
        cy.url().should('eq', dataLogin.url_login)
        cy.get(LoginPage.title_login).should('have.text', dataLogin.text_login)
        cy.get(LoginPage.form_username).should('be.visible').type(dataSignUp.usernmae_invalid)
        cy.get(LoginPage.form_password).should('be.visible').type(dataSignUp.password_valid)
        cy.get(LoginPage.btn_login).should('be.visible').click()
        cy.get(LoginPage.alert_wrong_username).should('have.text', dataLogin.title_wrong_username)
        cy.url().should('eq', dataLogin.url_gagal_login)
    })

    it('Login failed with wrong password', () => {
        cy.url().should('eq', dataLogin.url_login)
        cy.get(LoginPage.title_login).should('have.text', dataLogin.text_login)
        cy.get(LoginPage.form_username).should('be.visible').type(dataSignUp.usernmae_invalid)
        cy.get(LoginPage.form_password).should('be.visible').type(dataSignUp.password_invalid)
        cy.get(LoginPage.btn_login).should('be.visible').click()
        cy.get(LoginPage.alert_wrong_username).should('have.text', dataLogin.title_wrong_username)
        cy.url().should('eq', dataLogin.url_gagal_login)
    })

    it('Login failed password blank', () => {
        cy.url().should('eq', dataLogin.url_login)
        cy.get(LoginPage.title_login).should('have.text', dataLogin.text_login)
        cy.get(LoginPage.form_username).should('be.visible').type(dataSignUp.usernmae_invalid)
        // cy.get(LoginPage.form_password).should('be.visible').type(dataSignUp.password_invalid)
        cy.get(LoginPage.btn_login).should('be.visible').click()
        cy.get(LoginPage.alert_wrong_username).should('have.text', dataLogin.title_wrong_username)
        cy.get(LoginPage.alert_wrong_blank_password).should('have.text', dataLogin.title_blank_password)
        cy.url().should('eq', dataLogin.url_gagal_login)
    })

    it('Login failed username blank', () => {
        cy.url().should('eq', dataLogin.url_login)
        cy.get(LoginPage.title_login).should('have.text', dataLogin.text_login)
        // cy.get(LoginPage.form_username).should('be.visible').type(dataSignUp.usernmae_invalid)
        cy.get(LoginPage.form_password).should('be.visible').type(dataSignUp.password_valid)
        cy.get(LoginPage.btn_login).should('be.visible').click()
        cy.get(LoginPage.alert_wrong_username).should('have.text', dataLogin.title_wrong_username)
        cy.get(LoginPage.alert_wrong_blank_username).should('have.text', dataLogin.title_blank_username)
        cy.url().should('eq', dataLogin.url_gagal_login)
    })

    it('Input valid username and password then logout', () => {
        cy.url().should('eq', dataLogin.url_login)
        cy.get(LoginPage.title_login).should('have.text', dataLogin.text_login)
        cy.get(LoginPage.form_username).should('be.visible').type(dataSignUp.username_already_exist)
        cy.get(LoginPage.form_password).should('be.visible').type(dataSignUp.password_valid)
        cy.get(LoginPage.btn_login).should('be.visible').click()
        cy.get(LoginPage.title_dashboard).should('have.text', dataLogin.text_dashboard)
        cy.get(LoginPage.title_welcome).should('have.text', dataLogin.title_welcome + dataSignUp.username_already_exist)
        cy.get(LoginPage.title_customer_details).should('have.text', dataLogin.title_customer_details)
        cy.url().should('eq', dataLogin.url_dashboard)
        cy.get(LoginPage.btn_logout).should('be.visible').click()
        cy.url().should('eq', dataLogin.url_login)
    })

    it('Input valid username and password then click btn clear', () => {
        cy.url().should('eq', dataLogin.url_login)
        cy.get(LoginPage.title_login).should('have.text', dataLogin.text_login)
        cy.get(LoginPage.form_username).should('be.visible').type(dataSignUp.username_already_exist)
        cy.get(LoginPage.form_password).should('be.visible').type(dataSignUp.password_valid)
        cy.get(LoginPage.btn_clear).should('be.visible').click()
    })
})