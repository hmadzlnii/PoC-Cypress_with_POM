import { LoginPage } from "../pages/login_page";

const loginPage = new LoginPage()

it('login test', function(){
    loginPage.navigate('https://trytestingthis.netlify.app/')
    loginPage.enterUsername('test')
    loginPage.enterPasswordd('test')
    loginPage.clickLogin()
})