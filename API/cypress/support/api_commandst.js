/// <reference types="Cypress" />

const url = Cypress.config('baseUrl')

Cypress.Commands.add('api_login', (email, password) => {
    cy.request({
        method: 'POST',
        url: `${url}/auth/authenticate`,
        body: {
            email: email,
            password: password
        }
    })
})

Cypress.Commands.add('api_register', user => {
    cy.request({
        method: 'POST',
        url: `${url}/auth/register`,
        body: {
            name: user.name,
            email: user.email,
            password: user.password
        }
    })
})

Cypress.Commands.add('api_crateProject', userCreateProject => {
    
    cy.api_login(userCreateProject.email, userCreateProject.password)
    .then(response => {
        cy.request({
            method: 'POST',
            url: `${url}/projects`,
            body: {
                title: userCreateProject.project.title,
                description:  userCreateProject.project.description,
                task: [
                    {
                        name: response.body.user.name,
                        assignedTo: response.body.user._id
                    }
                ]
            }
        })
    })
})

Cypress.Commands.add('api_AllProjects', userProjects => {
    cy.api_login(userProjects.email, userProjects.password)
    .then(response => {
        cy.request({
            method: 'GET',
            url: `${url}/projects`,
            headers: {
                'Authorization': `Bearer ${response.body.token}`
            }
        })
    })
})

Cypress.Commands.add('api_projects', userProject => {
    cy.api_login(userProject.email, userProject.password)
    .then(response => {
        cy.request({
            method: 'GET',
            url: `${url}/projects/${userProject.projectId}`,
            headers: {
                'Authorization': `Bearer ${response.body.token}`
            }
        })
    })
})

Cypress.Commands.add('api_deleteProject', userProject => {
    cy.api_login(userProject.email, userProject.password)
    .then(response => {
        cy.request({
            method: 'DELETE',
            url: `${url}/projects/${userProject.projectId}`,
            headers: {
                'Authorization': `Bearer ${response.body.token}`
            }
        })
    })
})