describe('Dana', () => {
    it('Test ', () => {
        cy.visit('https://dev.nicepay.co.id/nicepay/redirect/v2/payment?tXid=IONPAYTEST00202305091730482798')
        cy.get('#creditcard > .mx-auto > .v-list-item').should('be.visible').click()
        cy.get('#card-number').type("5111111111111111")
        cy.get('#expirationdate').should('be.visible').type('0139')
        cy.get('#securitycode').should('be.visible').type('101')
        // cy.get('#submit_button_cc').should('be.visible').click()
    })

    it.skip('Test Dana', () => {
        cy.visit('https://m.dana.id/m/portal/cashier/checkout?bizNo=20230509111212800110166935679224868&timestamp=1683619752979&originSourcePlatform=IPG&mid=216620000126609957022&did=216650000136165624022&sign=PD7cVcDuvYSz32GBCNGEJBuS%2FFKD8NIY6TwPLftKpfXvCBUXYx40X%2Fe1Nl1A2ISjlnYVgublWjoExI4bs3vu9t%2Bh32zJgRbh4N1cD1FIIQT5Lj%2FTxEMEtIQ8ByF%2B1eU7It7xwXY6xjMUJZDrYgHKqs29q6taj%2BtZF1cbhDe%2FLnTlORF7bEbMG7Dvv2cy0UQtKqTqPPpuR%2F0AOkRUozW3Wyl2F7hWhtiXfjyGtSPhchEJqlVP8Cex%2BqxSU4xow5j%2FibVpl%2F%2BRhE7CQ08NPzlZXi%2B0U7m4k53FjKGqwC0cZXUd7xBpHBi2E2dx%2Bj9WkxL%2FJW%2B%2BoSsGejiO56sj3wCZ4A%3D%3D&forceToH5=false')
        cy.get('.desktop-input > .txt-input-phone-number-field').should('be.visible').type("87786370441")
        cy.wa
        cy.get('.agreement__button > .btn-continue').click()
        // cy.visit('https://m.dana.id/d/ipg/new/ipgLogin')
    })
})