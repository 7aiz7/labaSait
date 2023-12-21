// const fireApp = require("firebase/app");
// const fireAuth = require("firebase/auth");

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const serviceAccount = require('./labadymazuev-firebase-adminsdk-wjx3b-68b9dc2001.json');

// const firebaseConfig = {
//   apiKey: "AIzaSyBJUS-VkbCCxe1rp-DeNu5xVuvAZbkYsE4",
//   authDomain: "labadymazuev.firebaseapp.com",
//   projectId: "labadymazuev",
//   storageBucket: "labadymazuev.appspot.com",
//   messagingSenderId: "803678871833",
//   appId: "1:803678871833:web:b9bc6f7899e61e034ae588",
//   measurementId: "G-WMR44HESSE"
// };

// // Initialize Firebase
// const appA = fireApp.initializeApp(firebaseConfig);
// const authM = fireAuth.getAuth(appA);


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://labadymazuev.firebaseio.com'
});

const PORT = process.env.PORT || 3010;
const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.json())
app.options('*', cors());


const todoItems = require('./dataBase.json');
app.get('/api/todo-items', async (req, res) => {
  let users = [];
  const listUsersResult = await admin.auth().listUsers()
  listUsersResult.users.forEach((userRecord) => {
    users.push({
      "userID": userRecord.uid,
      "userEmail": userRecord.email,
    })
  });
  res.status(200).json({ data: users, cont: users.length});
});

// app.post('/api/auth', (req, res) => {
//   // const {email, password} = req.body;
//   console.log(req.body)
//   todoItems.map(obj => {
//     if(obj.email == req.body.email && obj.password == req.body.password){
//       res.send.json({data: 222})
//     }
//   })
//   res.send.json({data: 666});
// });

// app.post('/api/register', async (req, res) => {
//   try {
//     console.log(req);
//     const { email, password } = req.body;
//     const user = await admin.auth().createUser({
//       email: email,
//       password: password
//     })
//     res.status(200).send({ message: 'Пользователь зарегистрирован успешно' });
//   } catch (error) {
//     res.status(400).send({ message: error.message });
//   }
// });


app.listen(PORT, () => {
 console.log(`Server listening on ${PORT}`);
});