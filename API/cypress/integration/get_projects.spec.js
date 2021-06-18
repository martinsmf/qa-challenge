/// <reference types="Cypress" />

describe('Visualizar projetos', () => {

    describe('Quando realiso uma requisição para exibir todos os projetos com sucesso', () => {
        const user = {
            email: 'luke.Skywalker@gmail.com',
            password: 'abc123'
        }
        
        it('Então deve retornar o status code 200', () => {
            cy.api_AllProjects(user).then(response => {
                expect(response.status).to.equal(200)
            })
        })
    
        it('Então deve retornar uma lista de projetos', () => {
            cy.api_AllProjects(user).then(response => {
                expect(response.body.projects >= 0).to.be.true
            })
        })
    })
    
    describe('Quando realizo a requisição para ver um projeto especifico com sucesso', () => {
        
        const user = {
            email: 'yoda@yahoo.com',
            password: 'abc123',
            projectId: '5f1b30a7c0613220acc3ee4b'
        }
    
        it('Então deve retornar o status code 200', () => {
            cy.api_projects(user).then(response => {
                expect(response.status).to.equal(200)
            }) 
        })

        it(`Então deve retornar o projeto ${user.projectId}`, () => {
            cy.api_projects(user).then(response => {
                expect(response.body.projects._id).to.equal(user.projectId)
            })
        })
    
    })
})
