/* global Given, Then, When */
/// <reference types="Cypress" />

import HomePage from '../pages/home_pages'
import HomeHeaderElements from '../elements/home_header_elements'
import ResearchElements from '../elements/research_elements'

const url = Cypress.config('baseUrl')

Given('desejo adquirir um curso na plataforma estratégia', () => {
    cy.visit(url)
});

When('realizo a busca dos {string} na aréas do meu interesse:', (cursos) => {
    HomePage.search(cursos)
});


Then('devo ver alista de cursos disponíveis', () => {
    expect(ResearchElements.courseList).to.length > 0
});


When('seleciono o um dos {string} preestabelecidos', (busca) => {
    HomeHeaderElements.searchLink(busca).click()
});

Then('devo ser direcionado para página referente a opção selecionada {string}', (urlExample) => {
    cy.url().should('be.equal', `${url}/${urlExample}`)
});

Then('ver o titulo {string}', (title) => {
	HomeHeaderElements.headerTitle.should('be.text', title)
});
