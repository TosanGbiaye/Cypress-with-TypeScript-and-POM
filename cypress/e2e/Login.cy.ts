import { LoginPage } from "./pages/login_page.cy"
const loginPage = new LoginPage()

  it('Login Test', () => {      //line 4-8 are test steps
    loginPage.navigate('https://trytestingthis.netlify.app/')
    loginPage.enterUsername('test')
    loginPage.enterPassword('test')
    loginPage.clickLogin()
  })
