import { faker } from "@faker-js/faker"

class CreateGallery {
    get forma () {
        return cy.get ('.mr-auto > :nth-child(3) > .nav-link')
    }

    get title () {
        return cy.get ('#title').type(faker.lorem.words())
    }

    get description () {
        return  cy.get ('#description').type(faker.lorem.words())
    }

    get imageLink () {
        return cy.get ('.input-group > .form-control').type('https://media.istockphoto.com/id/1387646380/photo/shot-of-a-group-of-unrecognizable-businesspeople-holding-plants-in-dirt-at-work.jpg?s=612x612&w=is&k=20&c=rXo1RsEgvKBMH49bFxVZAIGzI3685VU4Y3yKr4NQmxg=')
    }

    get submitButton () {
        return cy.get('form > :nth-child(4)')
    }

    clickSubmitButton () {
        this.submitButton.click()
    }

    clickForma () {
        this.forma.click()
    }

    clickTitle () {
        this.title.click()
    }

    clickDescription () {
        this.description.click()
    }

    clickImageLink () {
        this.imageLink.click()
    }
}

export const createGallery = new CreateGallery