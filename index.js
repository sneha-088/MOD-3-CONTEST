const Fullname = document.querySelector("#fullname");
const NameWarning = document.querySelector("#name-warning");
const Email = document.querySelector("#email");
const EmailWarning = document.querySelector("#email-warning");
const Password = document.querySelector("#Password");
const PasswordWarning = document.querySelector("#password-warning");
const ConfirmPassword = document.querySelector("#ConfirmPassword");
const ConfirmPasswordWarning = document.querySelector("#confirmPassword-warning");
const submit = document.querySelector("#submit");
const signUp = document.querySelector('#SignUp');
const login = document.querySelector('#Login');
signUp.addEventListener('click',()=>{
window.location.href = "./index.html"
})
login.addEventListener('click',()=>{
    window.location.href = "./login.html"
})

let user = [];
if(window.localStorage.getItem('users')){
    JSON.parse(window.localStorage.getItem('users')).map(value=>{
        user.push(value);
    })
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    // name validation//
    const namearray = Fullname.value.split(' ');
    if(namearray.length<2){
        NameWarning.innerHTML="Please enter your name"
        NameWarning.style.color = "red";
        return false;
    }
    else{
        NameWarning.innerHTML = '';
    }
    //Email Validation
    if(Email.value.indexOf('@')<=0){
        EmailWarning.innerHTML = 'Please enter valid email address';
        EmailWarning.style.color = 'red';
        return false;
    }
    //abc@gmail.com
    if(Email.value.lastIndexOf('.')!==email.value.length-4){
        EmailWarning.innerHTML = 'Please enter valid email address';
        EmailWarning.style.color = 'red';
        return false;
    }
    else{
        EmailWarning.innerHTML = '';
    }
    //password validation
    //1 Uppercase
    if(!Password.value.match(/[A-Z]/)){
        PasswordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol';
        PasswordWarning.style.color = 'red';
        return false;
    }
    //lowercase
    if(!Password.value.match(/[a-z]/)){
        PasswordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol';
        PasswordWarning.style.color = 'red';
        return false;
    }
    if(!Password.value.match(/[0-9]/)){
        PasswordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol';
        PasswordWarning.style.color = 'red';
        return false;
    }
    if(!Password.value.match(/[!/@/#/$/%/^/&/*/</>/_/]/)){
        PasswordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol';
        PasswordWarning.style.color = 'red';
        return false;
    }
    else{
        PasswordWarning.innerHTML = '';
    }
    //confirm password validation
    if(Password.value!==ConfirmPassword.value){
        ConfirmPasswordWarning.innerHTML = 'Password and Confirm Password should be the same';
        ConfirmPasswordWarning.style.color = 'red';
        return false;
    }
    else{
        ConfirmPasswordWarning.innerHTML = '';
        // alert('signup successfully');
    }
    const UserData = {email:Email.value,password:Password.value,name:Fullname.value};
    user.push(UserData);
    window.localStorage.setItem('user', JSON.stringify(user));
    window.location.href = "./login.html";
    })
    if(window.localStorage.getItem('currentUser')){
        window.location.href = './dashboard.html';
    }
     






