/// <reference types="Cypress" />

describe('Quando deleto um projeto com sucesso', () => { 
    const user = {
        email: 'yoda@yahoo.com',
        password: 'abc123',
        projectId: '5f1b30a7c0613220acc3ee4b'
    }

    it('Então deve retornar o status code 200', () => {
        cy.api_deleteProject(user).then(response => {
            expect(response.status).to.equal(200)
        }) 
    })
})