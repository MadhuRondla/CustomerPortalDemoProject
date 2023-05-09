
class AdminPageElements {
    /**
     * define selectors using getter methods
     */

    get adminPageTitle() {
        return $('//span[text()="Administration"]');
    }
    get usersIcon() {
        return $('//p[contains(text(),"Users")]');
    }
    get rolesIcon() {
        return $('//p[contains(text(),"Roles")]');
    }
    get accessProfilesIcon() {
        return $('//p[contains(text(),"Access Profiles")]');
    }
    get integrationsIcon() {
        return $('//p[contains(text(),"Integrations")]');
    }
    get teamsIcon() {
        return $('//p[contains(text(),"Teams")]');
    }


} 
module.exports = new AdminPageElements();
//export default new AdminPageElements();