const registerInput = require("../../../fixtures/tricentis/register.json")

class registerPage {
    registerMenu = '.ico-register'
    registerBtn = '#register-button'
    genderMale = '#gender-male'
    firstName = '#FirstName'
    lastName = '#LastName'
    confirmPassword = '#ConfirmPassword'
    successMessage = '.result'
    errorMessage = '.validation-summary-errors > ul > li'
    lastNameRequired = ':nth-child(3) > .field-validation-error > span'
    emailRequired = ':nth-child(4) > .field-validation-error > span'

    inputFirstName(first_name){
        cy.get(this.firstName)
        .should('be.visible')
        .type(first_name)
    }

    inputLastName(){
        cy.get(this.lastName)
        .should('be.visible')
        .type(registerInput.lastName)
    }
}
export default registerPage;