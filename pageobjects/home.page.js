const homePageElements = require('../pageElements/home.page.elements');
const ElementUtil = require('../util/elementUtil')
const CustPortalPageElements = require('../pageElements/custportal.page.elements')

class HomePage {
    
    async doClickOnDevopsPortalLink(){
        await ElementUtil.doClick(homePageElements.devopsPortalLink)
    }
    async doClickOnCustPortalLink(){
        await ElementUtil.doClick(homePageElements.custPortalLinkLink)
    }
    async doClickOnAdminLink(){
        await ElementUtil.doClick(homePageElements.adminLink)
    }
    async doClickOnViewApplications(){       
        await ElementUtil.doClick(homePageElements.viewApplications)
    }
}

module.exports = new HomePage();
