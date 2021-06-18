/// <reference types="Cypress" />

describe('Quando crio um projeto com sucesso', () => {
    
    const userCreateProject = {
        email: 'han.solo@gamil.com',
        passward: 'abc123',
        project: {
            title: 'Millennium Falcon',
            description: 'antigo cargueiro corelliano, modificado por Solo, descrita por ele como \"a nave mais veloz da galáxia\". '
        }
    }
    
    it('Deve retornar o status code 200 ', () => {
        cy.api_crateProject(userCreateProject).then(response=> {
            expect(response.status).to.equal(200)
        })
    })

    it(`Deve retornar o titulo ${userCreateProject.project.title} no response`, () => {
        cy.api_crateProject(userCreateProject).then(response=> {
            expect(response.body.project.title).to.equal(userCreateProject.project.title)
        })
    })

    it(`Deve retornar a descrição ${userCreateProject.project.description} no response`, () => {
        cy.api_crateProject(userCreateProject).then(response=> {
            expect(response.body.project.description).to.equal(userCreateProject.project.description)
        })
    })
})