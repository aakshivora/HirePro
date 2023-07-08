function valid_uname(){
    var uname = document.getElementById('u-name').value;
    var reg = /^[A-Z][A-Za-z0-9_]{3,14}$/;

    if(!uname.match(reg)){
        document.getElementById('error-u').innerHTML = "Invalid username"
        document.querySelector('#error-u').style.color = "red";
        return false;
    }
    else{
        document.getElementById('error-u').innerHTML = "Valid username &#10003"
        document.querySelector('#error-u').style.color = "green";
        return true;
    }
}

function valid_email(){
    var em = document.getElementById('email').value;
    var reg = /^[A-Za-z0-9]{5,15}@[A-Za-z]+[.]{1}[a-z]{3}$/;
    
    if(!em.match(reg)){
        document.getElementById('error-e').innerHTML = "Invalid Email!";
        document.querySelector('#error-e').style.color = "red";
        return false;
    }
    else{
        document.getElementById('error-e').innerHTML = "Valid Email &#10003";
        document.querySelector('#error-e').style.color = "green";
        return true;
    }
}

function valid_pass1(){
    var pass1 = document.getElementById('pass1').value;
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,16}$/;

    if(!pass1.match(reg)){
        document.getElementById('error-pass').innerHTML = "Invalid password"
        document.querySelector('#error-pass').style.color = 'red';
        return false;
    }
    else{
        document.querySelector('#error-pass').style.color = 'green';
        document.getElementById('error-pass').innerHTML = "Strong Password &#10003"
        return true;
    }
}

function valid_pass2(){
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;
    if(valid_pass1()){
        if(pass1 == pass2){
            document.getElementById('error-pass2').innerHTML = "Password Match &#10003"
            document.querySelector('#error-pass2').style.color = 'green';
            return true;
        }
        else{
            document.getElementById('error-pass2').innerHTML = "Password Don't Match!"
            document.querySelector('#error-pass2').style.color = 'red';
            return false;
        }
    }
    else{
        document.getElementById('error-pass2').innerHTML = "Password isn't valid!"
        document.querySelector('#error-pass2').style.color = 'red';
        return false;
    }
}


function validate()
{
    if(valid_uname() && valid_pass1() && valid_pass2() && valid_email())
    {
        document.getElementById('output').innerHTML = "User Registered Successfully! &#10003";
        document.querySelector('#output').style.color = "green";
    }
    else
    {
        document.getElementById('output').innerHTML = "Invalid/Insufficient details!";
        document.querySelector('#output').style.color = "red";
    }

}

