const signUp = document.querySelector("#SignUp");
const login = document.querySelector("#Login");
signUp.addEventListener("click",()=>{
    window.localStorage.href="./index.html"
})
login.addEventListener("click",()=>{
    window.localStorage.href="./login.html"
})
let Teacher = JSON.parse(window.localStorage.getItem('currentUser'));
const email = document.querySelector("#email");
const name = document.querySelector("#name");
name.innerHTML = `Welcome back <strong>${Teacher.name}</strong>!`
email.innerHTML = `Your Email ID: ${Teacher.email}`
const oldPassword = document.querySelector('#oldPassword');
const oldPasswordWarning = document.querySelector('#oldPasswordWarning');
const newPassword = document.querySelector('#newPassword');
const newPasswordWarning = document.querySelector('#NewpasswordWarning');
const confirmNewPassword = document.querySelector('#confirmNewPassword');
const confirmNewPasswordWarning = document.querySelector('#ConfirmPasswordWarning');
const change = document.querySelector("#change");
const logout = document.querySelector("#Logout");
const notification = document.querySelector('#notification');
change.addEventListener('click',(e) =>{
    e.preventDefault();
    if(oldPassword.value !== Teacher.password){
        oldPasswordWarning.innerHTML = 'Entered password is not same as Current Password!';
        notification.innerHTML = '';
        return false;
    }
    else{
        oldPasswordWarning.innerHTML = '';
    }
    //password validation
    //1 Uppercase
    if(!newPassword.value.match(/[A-Z]/)){
        newPasswordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol!';
        notification.innerHTML = '';
        return false;
    }
    //lowercase
    if(!newPassword.value.match(/[a-z]/)){
        newPasswordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol!';
        notification.innerHTML = '';
        return false;
    }
    if(!newPassword.value.match(/[0-9]/)){
        newPasswordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol!';
        notification.innerHTML = '';
        return false;
    }
    if(!newPassword.value.match(/[!/@/#/$/%/^/&/*/</>/_/]/)){
        newPasswordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol!';
        notification.innerHTML = '';
        return false;
    }
    if(newPassword.value===teacher.password){
        newPasswordWarning.innerHTML = 'New password should not be same as your old password!';
        notification.innerHTML = '';
        return false;
    }
    else{
        newPasswordWarning.innerHTML = '';
    }
 
    if(newPassword.value !== confirmNewPassword.value){
        confirmNewPasswordWarning.innerHTML = "New password and Confirm Password should be the same!";
        notification.innerHTML = '';
        return false;
    }
    else{
        confirmNewPasswordWarning.innerHTML = "";
        notification.innerHTML = 'Password changed successfully!!';
        Teacher.password = confirmNewPassword.value;
        window.localStorage.setItem('currentUser', JSON.stringify(Teacher));
    }
})
logout.addEventListener('click', ()=>{
    window.localStorage.removeItem('currentUser');
    window.location.href = './login.html';
})



