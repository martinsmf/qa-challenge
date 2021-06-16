/* global Given, Then, When */
/// <reference types="Cypress" />

import HomePage from '../pages/home_pages'
import ResearchElements from '../elements/research_elements'

const url = Cypress.config('baseUrl')

Given('desejo adiquirir um curso na plataforma estratégia', () => {
    cy.visit(url)
})


When('ralizo a busca dos {string} na aréas do meu interesse:', (args1) => {
	console.log(args1);
    HomePage.search(args1)
});



Then('devo ver alista de cursos diponiveis', () => {
    expect(ResearchElements.courseList).to.length > 0
})