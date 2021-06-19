/// <reference types="Cypress" />

import HomePage from '../pages/home_pages'
import ResearchElements from '../elements/research_elements'
import CourserDetailsElements from '../elements/courser_details_elements';

const url = Cypress.config('baseUrl')

Given('pesquiso pela professora {string}', (teacher) => {
	cy.visit(url)
    HomePage.search(teacher)
})

When('acesso os detalhes do curso {string} no valor de {string}', (course, installmentsPrice) => {
	ResearchElements.installmentsPrice(course).should('contain.text',installmentsPrice)
	ResearchElements.courseOfList(course).click()
})


Then('devo ver o preço {string} nos detalhes', (installmentsPrice) => {
	CourserDetailsElements.installmentsPriceDetails.should('contain', installmentsPrice)
})


Given('que pesquiso pelo curso {string}', (course) => {
	cy.visit(url)
    HomePage.search(course)
});

When('visualizo os detalhes {string}', (course) => {
	ResearchElements.courseOfList(course).click()
});

Then('vejo o conteúdo do curso', () => {
	expect(CourserDetailsElements.courseContent).to.be >=0
});







