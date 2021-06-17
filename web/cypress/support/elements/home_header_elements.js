/// <reference types="Cypress" />

class HomeHeaderElements {

    get inputSearch () {
        return cy.get('.layout-header-inner .search-input-control')
    }

    get buttonSearch () {
        return cy.get('.layout-header-inner .search-input-icon')
    }

    searchLink (target) {
        return cy.contains('.nav-header-links a', target)
    }

    get headerTitle () {
        return cy.get('.page-header-title')
    }

    get modalChatoPraCaralho () {
        return cy.get('.getsitecontrol-container')
    }



}

export default new HomeHeaderElements();