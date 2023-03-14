const locators = require('../fixtures/locators.json')

describe ('login case', () => {
    it ('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })

    it ('click login button', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get(locators.header.loginBtn).click()
    })

    it ('login with valid credentials', () => {
        cy.visit('https://gallery-app.vivifyideas.com/login')
        cy.get(locators.login.emailInput).type('bla@gmail.com')
        cy.get(locators.login.passwordInput).type('bla12345')
        cy.get(locators.login.sumbmitBtn).click()
    })

    it ('visit gallery app', () => {
        cy.visit ('https://gallery-app.vivifyideas.com/')
        cy.get (locators.header.loginBtn).click()
        cy.get (locators.login.emailInput).type ('bla@gmail.com')
        cy.get (locators.login.passwordInput).type ('bla12345')
        cy.get (locators.login.sumbmitBtn).click()
        cy.get ('.ml-auto > :nth-child(3) > .nav-link').click()
    })
})