/// <reference types="Cypress" />

class CourserDetalisElementes {

    get installmentsPriceDetails () {
        return cy.get('.cur-details-shopping-installments')
    }

    get price () {
        return cy.get('.cur-details-shopping .cur-details-shopping-price')
    }

    get courseContent () {
        return cy.get('.cur-demo')
    }
}

export default new CourserDetalisElementes();