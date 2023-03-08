describe ('login case', () => {
    it ('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })

    it ('click login button', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('a[href="/login"]').click()
    })

    it ('login with valid credentials', () => {
        cy.visit('https://gallery-app.vivifyideas.com/login')
        cy.get('input[id="email"]').type('bla@gmail.com')
        cy.get('input[id="password"]').type('bla12345')
        cy.get('button').click()
    })
})