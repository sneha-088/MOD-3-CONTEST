const SignUp = document.querySelector("#SignUp");
const Login  = document.querySelector("#Login");
SignUp.addEventListener("click",(e)=>{
window.location.href = "./index.html"
})
Login.addEventListener("click",(e)=>{
window.localStorage.href = "./login.html"
})
const Email = document.querySelector("#email");
const EmailWarning = document.querySelector("#email-warning");
const Password = document.querySelector("#Password");
const PasswordWarning = document.querySelector("#password-warning");
const submit = document.querySelector("#submit");
const userData = JSON.parse(window.localStorage.getItem('user'));
const currentUser = {};
submit.addEventListener("click",(e)=>{
let countemail = 0;
userData.map(userdata=>{
    if(userdata.email === Email.value && userdata.password===Password.value){
    countemail++;
    currentUser.email = userdata.email;
    currentUser.password = userdata.password;
    currentUser.name = userdata.name;
    }
    if(countemail==0){
    EmailWarning.innerHTML = "Invalid try again!" 
    PasswordWarning.innerHTML="Invalid try again!"  
    return false;    
    }
    else{
    EmailWarning.innerHTML='';
    PasswordWarning.innerHTML='';
    window.localStorage.href= "./dashboard.html"
    }
})

});
currentUser.token = CreateToken();
    console.log(currentUser);
    window.localStorage.setItem('currentUser', (JSON.stringify(currentUser)));
if(window.localStorage.getItem('currentUser')){
    window.location.href = './dashboard.html';
}
function CreateToken() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charsLength = chars.length;
    let randomStr = String(Math.random()).slice(2, 18);
    let token = "";
    randomStr.split("").forEach(digit => {
        token += chars.charAt(parseInt(digit, 10) % charsLength)
    });
    return token;
}



