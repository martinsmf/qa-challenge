/// <reference types="Cypress" />

import HomeHeaderElements from '../elements/home_header_elements'
import ResearchElements from '../elements/research_elements'

class HomePage {

    search (text) {
        HomeHeaderElements.inputSearch.type(text)
        HomeHeaderElements.buttonSearch.click()
        ResearchElements.buttonCourse.click()
    }
}

export default new HomePage();