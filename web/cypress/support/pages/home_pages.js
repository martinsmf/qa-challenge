/// <reference types="Cypress" />

import HomeElements from '../elements/home_elements'
import ResearchElements from '../elements/research_elements'

class HomePage {

    search (text) {
        HomeElements.inputSearch.type(text)
        HomeElements.buttonSearch.click()
        ResearchElements.buttonCourse.click()
    }
}

export default new HomePage();