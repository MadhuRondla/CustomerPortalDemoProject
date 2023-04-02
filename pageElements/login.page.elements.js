class LoginPageElements{
    get inputUsername () {
        return $('#mat-input-0');
    }

    get inputPassword () {
        return $('#mat-input-1');
    }

    get btnSubmit () {
        return $('//span[contains(text(),"SIGN IN")]');
    }
}
module.exports=new LoginPageElements()