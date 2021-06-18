/// <reference types="Cypress" />

class ResearchElements {

    get buttonCourse () {
        return cy.get('[data-type-button="cursos"]')
    }
    get courseList () {
        return cy.get('.card-prod')
    }
    courseOfList (target) {
        return cy.contains('.card-prod .card-prod-title a', target)
    }
    installmentsPrice (target) {
        return cy.contains('.card-prod', target)
    }
}

export default new ResearchElements();