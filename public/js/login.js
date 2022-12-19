var loginForm = $('#login-form');



loginForm.submit(function(event) {
    var Email = $('#email').val();
    var pass = $('#password').val();

    console.log(Email);

    if(!Email){
        $('.erroslines').text("Email required");
        return;
    }
    if(!pass){

        $('.erroslines').text("Password required");
        return;

    }


    let userName = Email.trim();
    let username = userName.toLowerCase();
    let password = pass.trim();

    if(typeof username !== 'string' ||  username.indexOf(' ') >= 0){
        $('.erroslines').text("UserName Should be of string");
        return;
    }

    if( password.length < 6) {
        $('.erroslines').text("Password length should be greater than 6");
        return;
    }

    if(password.indexOf(' ') >=0 || typeof password !== 'string' ){
        $('.erroslines').text("Password should be of string type");
        return;
    }

    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!(Email !== '' && Email.match(emailFormat)) ){
        $('.erroslines').text("email id not in proper format");
        return;
    }

    formData = {
        email:Email,
        password:password
    }


    this.submit;
    
})

