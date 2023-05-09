class DevopsPageElements{
    get devopsPageTitle () {
        return $('//span[text()="DevOps Portal"]');
    }
    get buildPatchTab(){
        return $('//span[text()="Build Patch"]');
    }
    get deployTab(){
        return $('//span[text()="Deploy"]');
    }
    get infrastructureTab(){
        return $('//span[text()="Infrastructure"]');
    }
    get adminTabInDevopsPage(){
        return $('//span[text()="Admin"]');
    }
}
//export default new DevopsPageElements();
module.exports =  new DevopsPageElements()