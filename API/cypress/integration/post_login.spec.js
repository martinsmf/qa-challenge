/// <reference types="Cypress" />

describe('Quando fasso login com sucesso', () => {
    
    const user = {
        email: 'darth.vaider@gmail.com',
        password: 'abc123'
    }

    it('deve retornar o status code 200', () => {
        cy.api_login(user.email, user.password).then(response => {
            expect(response.status).to.equal(200)  
        })    
    })

    it(`deve retornar o email ${user.email}`, () => {
        cy.api_login(user.email, user.password).then(response => {
            expect(response.body.email).to.equal(user.email)
        })  
    })

    it('deve retorno um access_token', () => {
        cy.api_login(user.email, user.password).then(response => {
            expect(response.body.token.toString().length).to.equal(171) 
        })  
    })
})