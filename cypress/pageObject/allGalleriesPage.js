import { faker } from "@faker-js/faker"

class AllGalleries {
    get allGalleriesButton () {
        return cy.get ('a[class="nav-link nav-buttons router-link-exact-active router-link-active"]')
    }

    get searchInput () {
        return cy.get('.form-control')
    }

    get filterButton () {
        return cy.get('.input-group-append > .btn')
    }

    clickAllGalleriesButton () {
        this.allGalleriesButton.click()
    }

    clickSearchInput () {
        this.searchInput.click()
    }

    clickFilterButton () {
        this.filterButton.click()
    }

    Galleries(inputField) {
        this.searchInput.type(inputField)
        this.filterButton.click()
    }
}

export const allGalleries = new AllGalleries