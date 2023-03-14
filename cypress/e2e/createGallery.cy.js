import { loginPage } from "../pageObject/loginPage"
import { faker } from "@faker-js/faker"
import { createGallery } from "../pageObject/createGalleryPage"

describe ('createGallery case', () => {
    beforeEach(() => {
        cy.visit ('https://gallery-app.vivifyideas.com/')
        cy.get('.ml-auto > :nth-child(1) > .nav-link').click()
        cy.get ('input[id="email"]').type('jovanjovan@gmail.com')
        cy.get ('input[id="password"]').type('jovan12345')
        cy.get ('button').click()
    })
    
    it ('positive case / create gallery', () => {
        createGallery.clickForma()
        createGallery.clickTitle()
        createGallery.clickDescription()
        createGallery.clickImageLink()
        createGallery.clickSubmitButton()
    })

    it ('negative case / empty fileds', () => {
        createGallery.clickForma()
        createGallery.clickSubmitButton()
    })

    it ('negative case / wrong images format', () => {
        createGallery.clickForma()
        createGallery.clickTitle()
        cy.get('.input-group > .form-control').type(faker.image.imageUrl())
        createGallery.clickSubmitButton()
    })
})