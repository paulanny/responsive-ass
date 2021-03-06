
var email = document.getElementById('email')
var password = document.getElementById('password')
var FirstName = document.getElementById('firstname')
var LastName = document.getElementById('lastname')

var errorMsg = document.getElementsByClassName("errors");

var Icons = document.getElementsByClassName("icons");
var form = document.getElementById("formgroup")

form.addEventListener('submit', (e)=> {
    e.preventDefault()

    if(FirstName.value.trim() === '') {
        errorMsg[0].innerHTML = "First Name cannot be Empty";
        Icons[0].style.opacity ="1";
        FirstName.style.borderColor = 'red'
        FirstName.removeAttribute('placeholder');
    } 
    else{
        errorMsg[0].innerHTML = '';
        Icons[0].style.opacity = '0';
        FirstName.style.borderColor = 'hsl(246, 25%, 77%)'
    }

    if(LastName.value.trim() === '') {
        errorMsg[1].innerHTML = "Last Name cannot be Empty";
        Icons[1].style.opacity ="1"
        LastName.style.borderColor = 'red'
        LastName.removeAttribute('placeholder');
    }
    //if(!LastName.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        //errorMsg[1].innerHTML = "wrong input";
   // }
    else{
        errorMsg[1].innerHTML = '';
        Icons[1].style.opacity = '0';
        LastName.style.borderColor = 'hsl(246, 25%, 77%)'
    }


    if(password.value.trim() === '') {
        errorMsg[3].innerHTML = "Password cannot be Empty";
        Icons[3].style.opacity ="1"
        password.style.borderColor = 'red'
        password.removeAttribute('placeholder');
    }
    else{
        errorMsg[3].innerHTML = '';
        Icons[3].style.opacity = '0';
        password.style.borderColor = 'hsl(246, 25%, 77%)'

    }

    if(email.value.trim() === '') {
        errorMsg[2].innerHTML = "Email cannot be Empty";
       Icons[2].style.opacity ="1"
       email.style.borderColor = 'red'
       email.removeAttribute('placeholder');
        return false;
    }
  

    /*if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z][\.][a-z]{2;4}$/)) {
        errorMsg[2].innerHTML = "Looks like this is not an email";
        Icons[2].style.opacity ="0"
        return false;
    }*/
    else {
        errorMsg[2].innerHTML = '';
        Icons[2].style.opacity = '0';
        email.style.borderColor = 'hsl(246, 25%, 77%)'
        return true;
     }
    
})





