/// <reference types="Cypress" />

describe('Quando faço meu registro com sucesso', () => {
    const user = {
        name: 'Chewbacca',
        email: 'chewie@outlook.com',
        password: 'abc123'
    }

    it('Então deve retornar o stauts code 200', () => {
        cy.api_register(user).then(response => {
            expect(response.status).to.equal(200)
        }) 
    })

    it(`Então deve retornar o nome ${user.name}`, () => {
        cy.api_register(user).then(response => {
            expect(response.body.user.name).to.equal(user.name)
        })
    })

    it(`Então deve retornar o email ${user.email}`, () => {
        cy.api_register(user).then(response => {
            expect(response.body.user.email).to.equal(user.email)
        })
    })

    it('Então deve retornar um id', () => {
        cy.api_register(user).then(response => {
            expect(response.body.user._id.toString().length).to.equal(24)
        })
    })

    it('Então deve retornar um token', () => {
        cy.api_register(user).then(response => {
            expect(response.body.token).to.equal(171)
        })
    })
})

