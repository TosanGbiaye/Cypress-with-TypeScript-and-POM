export class LoginPage{

    loginPage_username = '#uname'            //line 3-4 are objects and its locators
    loginPage_password = '#pwd'
    loginPage_loginButton = '[type="submit"]'
    
    navigate(url: string){               //line 7-17 are methods and its actions
        cy.visit(url)
    }
    enterUsername(username: string){
        cy.get(this.loginPage_username).type(username)
    }
    enterPassword(password: string){
        cy.get(this.loginPage_password).type(password)
    }
    clickLogin(){
        cy.get(this.loginPage_loginButton).click()
    }
}