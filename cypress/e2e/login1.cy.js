    import { navigation } from '../pageObject/navigation'
    import { loginPage } from '../pageObject/loginPage'

    describe('login case', () => {
        beforeEach(() => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        navigation.clickLoginButton()
    })

    it ('negative case login / bad email', () => {
        loginPage.login('hahaha@', 'sifra123')
    })

    it ('negative case login / bad password', () => {
        loginPage.login('test@gmail.com', '123dvddv123')
    })

    it ('negative case / bad credetials', () => {
        loginPage.login('12333@fdds.com', 'ccwefwv')
    })

    it ('login with valid credentials', () => {
        loginPage.login('aki@gmail.com', 'aki12345')
        navigation.clickLoginButton()

    })
})
