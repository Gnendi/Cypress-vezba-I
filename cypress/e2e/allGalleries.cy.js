import { allGalleries } from '../pageObject/allGalleriesPage'
import { faker } from '@faker-js/faker';

describe('allGalleries case', () => {
    beforeEach(() => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        allGalleries.clickAllGalleriesButton()
    })

    it ('negative case / invalid search input text', () => {
        allGalleries.Galleries('@#44@')
    })

    it ('negative case / empty search input field', () => {
        allGalleries.Galleries
    })
})