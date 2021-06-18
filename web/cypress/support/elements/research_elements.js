/// <reference types="Cypress" />

class ResearchElements {

    get buttonCourse () {
        return cy.get('[data-type-button="cursos"]')
    }

    get courseList () {
        return cy.get('.card-prod')
    }

}

export default new ResearchElements();