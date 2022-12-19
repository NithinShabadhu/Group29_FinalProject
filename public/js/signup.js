var loginForm = $('#login-form');


loginForm.submit(function(event) {
    var Email = $('#Email').val();
    var password = $('#password').val();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var age = $('#age').val();
    var gender     = $('input[name="gender"]:checked').val();

     //Check that the username and password is provided or not
     if(!Email || !firstName || !lastName || !gender || !age || !password){
        $('.erroslines').text("All fields required");
        return;
    }
    

    //Check that the username and password are string type or not
    if (!(typeof firstName == 'string') || !(typeof lastName == 'string') || !(typeof password == 'string')||!(typeof Email == 'string')) {
        $('.erroslines').text("String required in First Name and Last Name ");
        return;
    }
    

    //Check that the username and password is empty or not
    if (Email == null || Email.trim() === ''){
        $('.erroslines').text("email parameter is empty");
        return;
    }
    if (firstName == null || firstName.trim() === ''){
        $('.erroslines').text("firstname parameter is empty");
        return;
    }
    if (lastName == null || lastName.trim() === ''){
        $('.erroslines').text("lastname parameter is empty");
        return;
    }
    if (password == null || password.trim() === ''){
        $('.erroslines').text("password parameter is empty");
        return;
    }
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!(Email !== '' && Email.match(emailFormat)) ){
        $('.erroslines').text("email id not in proper format");
        return;
    }

    
     

if(password.length < 6){
    $('.erroslines').text("Password parameter is less than 6 character length");
        return;
}


    this.submit;
    
})
