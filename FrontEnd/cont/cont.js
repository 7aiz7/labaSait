const head = document.getElementById("head");
const email = JSON.parse(localStorage.getItem("Email"));
head.textContent = `Ваша почта ${email}`;
const admin = document.getElementById("admin");
if(email == "admin1@gmail.com"){
    admin.textContent = "Вы Админ";
} else{
    admin.textContent = "Вы Пользователь";
}
const uh = document.getElementById("u-h")
if(email != "admin1@gmail.com"){
    uh.textContent = "";
}
const content = document.getElementById("content");
let users = []
if(email == "admin1@gmail.com"){
    fetch("http://localhost:3010/api/todo-items", {
            method: "GET", 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.cont)
            for(let i = 0; i < data.cont; i++){
                const span = document.createElement("span");
                span.textContent = data.data[i].userEmail
                span.className = "emailUser";
                content.append(span)
            }
            // let chek = true;
            // let i = 0;
            // while(chek){
            //     try{
            //         console.log(data.data[i]);
            //         content.innerHTML = `<span>${data.data[i].userEmail}</span>`
            //         i++;
            //     } catch(error){
            //         chek = false
            //     }
            // }
            // console.log(data.data[0])
            // data.data.forEach(e => {
            //     content.innerHTML = `<span>${obj.userEmail}</span>`
            // });
        })
        // .then( data => {
        //     data.map(obj => {
        //         content.innerHTML = `<span>${obj.email}</span>`
        //     })
        // })
    
}