import loginPage from "../../support/PageObject/itera/Login"
import dashboardPage from "../../support/PageObject/itera/Dashboard"
const dataLogin = require('../../fixtures/itera/Login.json')
const dataSignUp = require('../../fixtures/itera/SignUp.json')
const dataDashboard = require('../../fixtures/itera/Dashboard.json')

describe('Dasboard Case', () => {

    const LoginPage = new loginPage()
    const DashboardPage = new dashboardPage()
    beforeEach(() => {
        cy.visit("/")
        cy.get(LoginPage.link_login).should('be.visible').click()
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

    it.skip('Create User', () => {
        cy.get(DashboardPage.btn_dasborad_create_user).click()
        cy.url().should('eq', dataDashboard.url_create_user)
        cy.get(DashboardPage.form_name).should('be.visible').type(dataDashboard.name)
        cy.get(DashboardPage.form_company).should('be.visible').type(dataDashboard.company)
        cy.get(DashboardPage.form_address).should('be.visible').type(dataDashboard.address)
        cy.get(DashboardPage.form_city).should('be.visible').type(dataDashboard.city)
        cy.get(DashboardPage.form_phone).should('be.visible').type(dataDashboard.phone)
        cy.get(DashboardPage.form_email).should('be.visible').type(dataDashboard.email)
        cy.url().should('eq', 'https://itera-qa.azurewebsites.net/Customer/Create')
        cy.get(DashboardPage.btn_create_user).should('be.visible').click()
        cy.url().should('eq', dataLogin.url_dashboard)
    })

    it.skip('Search Data', () => {
        cy.get(DashboardPage.form_searching).should('be.visible').type(dataSignUp.email)
        cy.get(DashboardPage.btn_searching).should('be.visible').click()
        cy.get(DashboardPage.btn_edit).should('be.visible').click()
    })

    it.skip('Edit Data', () => {
        cy.get(DashboardPage.form_searching).should('be.visible').type(dataSignUp.email)
        cy.get(DashboardPage.btn_searching).should('be.visible').click()
        cy.get(DashboardPage.btn_edit).should('be.visible').click()
        cy.get(DashboardPage.form_address).clear()
        cy.get('.col-md-offset-2 > .btn').should('be.visible').click()
    })

    it.skip('Details Data', () => {
        cy.get(DashboardPage.form_searching).should('be.visible').type(dataSignUp.email)
        cy.get(DashboardPage.btn_searching).should('be.visible').click()
        cy.get(DashboardPage.btn_details).should('be.visible').click()
        cy.get(DashboardPage.btn_link).should('be.visible').click()
        cy.url().should('eq', dataLogin.url_dashboard)
    })

    it.skip('Delete Data', () => {
        cy.get(DashboardPage.form_searching).should('be.visible').type(dataSignUp.email)
        cy.get(DashboardPage.btn_searching).should('be.visible').click()
        cy.get(DashboardPage.btn_delete).should('be.visible').click()
        cy.get(DashboardPage.btn_confirm_delete).should('be.visible').click()
        cy.url().should('eq', dataLogin.url_dashboard)
    })

    it('Search Data yang tidak ada', () => {
        cy.get(DashboardPage.form_searching).should('be.visible').type('Karim')
        cy.get(DashboardPage.btn_searching).should('be.visible').click()
    })
})