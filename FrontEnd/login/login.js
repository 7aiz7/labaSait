import MANIFEST from "../manifest.js";
const email = document.getElementById("email");
const password = document.getElementById("password")
const btnContinue = document.getElementById("log-continue");

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


function isValidEmail(text){ return EMAIL_REGEXP.test(text)};


btnContinue.onclick = function(){
    if(!isValidEmail(email.value)){
        alert("Неверный формат почты");
    } else if (password.value.length < 6){
        alert("Пароль должен быть длиннее 6 символов");
    } else {
        MANIFEST.auth(email.value, password.value)
    }
}


// async function getS(){
//     fetch("http://localhost:3010/api/todo-items", {method: "GET"})
//     .then(res => res.json())
//     .then(data => console.log(data))
// }





// fetch("http://localhost:3010/api/todo-items", {
//             method: "GET", 
//         })
//         .then(res => res.json())
//         .then(data => console.log(data))