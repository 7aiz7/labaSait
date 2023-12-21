import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// import { initializeApp } from "./node_modules/@firebase/app";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "./node_modules/@firebase/auth";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJUS-VkbCCxe1rp-DeNu5xVuvAZbkYsE4",
  authDomain: "labadymazuev.firebaseapp.com",
  projectId: "labadymazuev",
  storageBucket: "labadymazuev.appspot.com",
  messagingSenderId: "803678871833",
  appId: "1:803678871833:web:b9bc6f7899e61e034ae588",
  measurementId: "G-WMR44HESSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authM = getAuth(app);
// const docRef = doc(db, "cities", "SF");
// const docSnap = await getDoc(docRef);
// const authM = getAuth()
// const analytics = getAnalytics(app);


// import {admin} from "./node_modules/firebase-admin"

// admin.initializeApp({
//     // настройки вашего проекта Firebase
//     credential: admin.credential.applicationDefault(),
//     databaseURL: 'https://1:803678871833:web:b9bc6f7899e61e034ae588.firebaseio.com'
//   });
  
// app.auth().listUsers()
//     .then((listUsersResult) => {
//       listUsersResult.users.forEach((userRecord) => {
//         console.log('User ID:', userRecord.uid);
//         console.log('Email:', userRecord.email);
//       });
//     })
//     .catch((error) => {
//       console.log('Error listing users:', error);
//     });
  
const MANIFEST = {
    auth: async function singUser(email, password){
        signInWithEmailAndPassword(authM, email, password)
        .then((USER) => {
            console.log(USER.user.accessToken);
            document.open("../cont/cont.html", "", "noopener=false");
            localStorage.setItem("AToken", JSON.stringify(USER.user.accessToken));
            localStorage.setItem("Email", JSON.stringify(email));
            // axios.get("http://localhost:3010/api/todo-items").then(res => {console.log(res)})
            // fetch("http://localhost:3010/api/todo-items").then(res => console.log(res));
            
        })
        .catch((error) => {
            alert("Извините ошибка");
            console.log(error.code);
            console.log(error.messange);
        })
    },
    reg: async function regUser(email, password){
        createUserWithEmailAndPassword(authM, email, password)
        .then((USER) => {
            console.log(USER.user.accessToken);
            document.open("../cont/cont.html", "", "noopener=false");
            localStorage.setItem("AToken", JSON.stringify(USER.user.accessToken));
            localStorage.setItem("Email", JSON.stringify(email));
            // mainEmail = localStorage.getItem("email");
        })
        .catch((error) => {
            alert("Извините ошибка");
            console.log(error.code);
            console.log(error.messange);
        })
    },
    getDB: async function getDataBase(){
        
    }
}

export default MANIFEST;