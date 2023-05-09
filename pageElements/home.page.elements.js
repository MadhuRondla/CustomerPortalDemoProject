class HomePageElements{
    get homepageTitle () {
        return $('.title-center');
    }
    get devopsPortalLink(){
        return $('//div[text()="DevOps Portal"]');
    }
    get custPortalLinkLink(){
        return $('//div[text()="Customer Portal"]');
    }
    get adminLink(){
        return $('//div[text()="Administration"]');
    }
    get viewApplications(){
        return $('//mat-icon[text()="apps"]');
    }
}
//export default new HomePageElements();
module.exports = new HomePageElements()