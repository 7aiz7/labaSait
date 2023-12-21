import MANIFEST from "../manifest.js";
const email = document.getElementById("email");
const password = document.getElementById("password")
const btnContinue = document.getElementById("reg-continue");

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


function isValidEmail(text){ return EMAIL_REGEXP.test(text)};


btnContinue.onclick = function(){
    if(!isValidEmail(email.value)){
        alert("Неверный формат почты");
    } else if (password.value.length < 6){
        alert("Пароль должен быть длиннее 6 символов");
    } else {
        MANIFEST.reg(email.value, password.value)
    }
}