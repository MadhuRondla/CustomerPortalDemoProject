const LoginPageElements = require('../pageElements/login.page.elements')
const elementUtil = require('../util/elementUtil')
const Page = require('./page');



class LoginPage extends Page {
    
    async doLogin (username, password) {
        
        await elementUtil.doSendKeys(LoginPageElements.inputUsername,username)
        await elementUtil.doSendKeys(LoginPageElements.inputPassword,password)
        await elementUtil.doClick(LoginPageElements.btnSubmit)
    //     if(await elementUtil.doVerifyIsDisplayed(LoginPageElements.alertDialog)===true){
    //      console.log('Invalid Credentials, login failed')
    //      await browser.takeScreenshot();
    //      assert.equal(true,false)  
    // }
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}
module.exports = new LoginPage();
