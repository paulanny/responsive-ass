
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
    } 
    else{
        errorMsg[0].innerHTML = '';
        Icons[0].style.opacity = '0';
    }

    if(LastName.value.trim() === '') {
        errorMsg[1].innerHTML = "Last Name cannot be Empty";
        Icons[1].style.opacity ="1"
    }
    //if(!LastName.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        //errorMsg[1].innerHTML = "wrong input";
   // }
    else{
        errorMsg[1].innerHTML = '';
        Icons[1].style.opacity = '0';
    }


    if(LastName.value.trim() === '') {
        errorMsg[3].innerHTML = "Password cannot be Empty";
        Icons[3].style.opacity ="1"
    }
    else{
        errorMsg[3].innerHTML = '';
        Icons[3].style.opacity = '0';
    }

    if(email.value.trim() === '') {
        errorMsg[2].innerHTML = "Email cannot be Empty";
        Icons[2].style.opacity ="1"
        return false;
    }
    else{
        errorMsg[3].innerHTML = '';
        Icons[3].style.opacity = '0';
    }

    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z][\.][a-z]{2;4}$/)) {
        errorMsg[2].innerHTML = "Looks like this is not an email";
        Icons[2].style.opacity ="1"
        return false;
    }
    else{
        return true;
    }
})





