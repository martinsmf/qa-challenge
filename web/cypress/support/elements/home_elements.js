/// <reference types="Cypress" />

class HomeElements {

    get inputSearch () {
        return cy.get('.layout-header-inner .search-input-control')
    }

    get buttonSearch () {
        return cy.get('.layout-header-inner .search-input-icon')
    }

}

export default new HomeElements();