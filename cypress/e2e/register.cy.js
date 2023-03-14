const locators = require('../fixtures/locators.json')
import { faker } from '@faker-js/faker';

let userData = {
    userEmail : faker.internet.email(),
    userPassword : faker.internet.password(),
    userFirstName : faker.name.firstName(),
    userLastName: faker.name.lastName()
}

describe('register case', () => {
    it ('valid credentials', () => {
        cy.visit ('https://gallery-app.vivifyideas.com/')
        cy.get(locators.register.registerBtn).click()
        cy.get(locators.register.firstName).type('testiranje')
        cy.get(locators.register.lastName).type('testiranje')
        cy.get(locators.register.emailInputReg).type(faker.internet.email())
        cy.get(locators.register.passwordInputReg).type(userData.userPassword)
        cy.get(locators.register.passwordConfim).type(userData.userPassword)
        cy.get(locators.register.accepted_tac).click()
        cy.get(locators.register.submitBtnReg).click()
    })
    it ('invalid first name', () => {
        cy.visit ('https://gallery-app.vivifyideas.com/')
        cy.get(locators.register.registerBtn).click()
        
        cy.get(locators.lastName).type(faker.name.lastName)
        cy.get(locators.emailInputReg).type('testira@gmail.com')
        cy.get(locators.register.passwordInputReg).type('testiranje12345')
        cy.get(locators.register.passwordConfim).type('testiranje12345')
        cy.get(locators.register.accepted_tac).click()
        cy.get(locators.register.submitBtnReg).click()
    })
    it ('invalid last name', () => {
        cy.visit ('https://gallery-app.vivifyideas.com/')
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('#first-name').type('testi')
        cy.get('#last-name').type('testir@nje')
        cy.get('#email').type('testi@gmail.com')
        cy.get('#password').type('testiranje12345')
        cy.get('#password-confirmation').type('testiranje12345')
        cy.get('.form-check-input').click()
        cy.get('.btn').click()
    })
    it ('invalid email', () => {
        cy.visit ('https://gallery-app.vivifyideas.com/')
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('#first-name').type('testi')
        cy.get('#last-name').type('testir@nje')
        cy.get('#email').type('testigmail.com')
        cy.get('#password').type('testiranje12345')
        cy.get('#password-confirmation').type('testiranje12345')
        cy.get('.form-check-input').click()
        cy.get('.btn').click()
    })
    it ('invalid password', () => {
        cy.visit ('https://gallery-app.vivifyideas.com/')
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('#first-name').type('testi')
        cy.get('#last-name').type('testir@nje')
        cy.get('#email').type('tes@gmail.com')
        cy.get('#password').type('@#$testiranje12345')
        cy.get('#password-confirmation').type('@#$testiranje12345')
        cy.get('.form-check-input').click()
        cy.get('.btn').click()
    })
})