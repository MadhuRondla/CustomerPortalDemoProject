const LoginPageElements = require('../pageElements/login.page.elements')
const elementUtil = require('../util/elementUtil')
const homePageElements = require('../pageElements/home.page.elements');
const assert = require('assert');
const Page = require('./page');

class LoginPage extends Page {
    
    async doLogin (username, password) {
        await elementUtil.doSendKeys(LoginPageElements.inputUsername,username)
        await elementUtil.doSendKeys(LoginPageElements.inputPassword,password)
        await elementUtil.doClick(LoginPageElements.btnSubmit)
        await expect(homePageElements.homepageTitle).toBeDisplayed()
        //await assert.ok(elementUtil.doVerifyIsDisplayed(homePageElements.homepageTitle), 'Login Failed')
        //await expect(homePageElements.homepageTitle).toHaveTextContaining('Welcome,'); 
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
