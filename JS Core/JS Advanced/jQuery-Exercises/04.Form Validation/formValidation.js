function validate() {
    let usernamePattern=/^[A-Za-z0-9]{3,20}$/;
    let passwordPattern=/^\w{5,15}$/;
    let emailPattern=/\w*@\w*\./;
    
    let checkBox=$('#company');
    checkBox.click(checkBoxClick);

    $('#submit').click(submit);
    
    function submit(event) {
        event.preventDefault();

        let isAllRight=true;
        let username=$('#username');
        let password=$('#password');
        let confirmPassword=$('#confirm-password');
        let email=$('#email');
        let companyNumber=$('#companyNumber');

        if(!usernamePattern.test(username.val())){
            isAllRight=false;
            username.css('border-color','red')
        } else {
            username.css('border-color','')
        }

        if(!passwordPattern.test(password.val())){
            isAllRight=false;
           password.css('border-color','red')
        } else {
            password.css('border-color','')
        }

        if(password.val()!==confirmPassword.val() || !passwordPattern.test(confirmPassword.val())){
            isAllRight=false;
            confirmPassword.css('border-color','red')
        } else {
            confirmPassword.css('border-color','')
        }

        if(!emailPattern.test(email.val())){
            isAllRight=false;
            email.css('border-color','red')
        } else {
            email.css('border-color','')
        }

        if($('#company').is(':checked')){
            if(Number(companyNumber.val())<1000 || Number(companyNumber.val())>9999){
             isAllRight=false;
             companyNumber.css('border-color','red')
            } else {
                companyNumber.css('border-color','')
            }
        }

        if(isAllRight){
            $('#valid').show();
        } else {
            $('#valid').hide();
        }

    }
    
    function checkBoxClick() {
        let companyInfo=$('#companyInfo');

        if(companyInfo.css('display')==='none') {
            companyInfo.show()
        } else {
            companyInfo.hide()
        }
    }
}
