describe ('logout case', () => {
    it ('visit gallery app', () => {
        cy.visit ('https://gallery-app.vivifyideas.com/')
        cy.get ('a[href="/login"]').click()
        cy.get ('input[id="email"]').type ('bla@gmail.com')
        cy.get ('input[id="password"]').type ('bla12345')
        cy.get ('button').click()
        cy.get ('.ml-auto > :nth-child(3) > .nav-link').click()
    })
})