function checkPasswords(form){
    password1 = form.password.value;
    password2 = form.confirm_password.value;

     if(password1 == password2){
        return true;
     }
     else{
        alert("Passwords must match ");
        return false;
     }
    }