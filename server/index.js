require('dotenv').config()
const workOutRoutes=require("./routes/workout")
const userRoutes=require('./routes/user')
const express=require("express")
const mongoose=require("mongoose")//used for connecting to mongoDB
const cors=require("cors") //Handles  Cross-Origin Resource Sharing
const bcrypt=require("bcrypt")//Used for hashing passwords securely
const jwt=require("jsonwebtoken")//used for user authentication and authorization
const cookieParser=require("cookie-parser")//Used to handle cookies sent by the client
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGODB_URL)

app.use('/api/workouts',workOutRoutes)
app.use('/api/user',userRoutes)


 app.listen(process.env.PORT,()=>{
   console.log("Server is Running")
 })
 // app.post('/register', (req, res) => {
//   const { name, email, password } = req.body; // Values collected from the frontend
//   UserModel.findOne({ email: req.body.email })
//     .then(user => {
//       if (user) {
//         return res.status(409).json({ message: "User with the given email already exists!" });
//       }   
//       bcrypt.hash(password, 10)
//         .then(hash => {
//           UserModel.create({ name, email, password: hash })
//             .then(createdUser => res.json({ message: "Success" }))
//             .catch(err => res.status(500).json({ message: "Error creating user", error: err }));
//         })
//         .catch(hashError => res.status(500).json({ message: "Error hashing password", error: hashError }));
//     } )
//     .catch(findError => res.status(500).json({ message: "Error finding user", error: findError }));
// });

// app.post('/login', (req, res) => {
//   const { email, password } = req.body; // Values collected from the frontend
//   UserModel.findOne({ email: email })
//     .then(user => {
//       if (!user) {
//         return res.status(401).send({ message: "Invalid Email or Password" });
//       }
//       bcrypt.compare(password, user.password)
//         .then(validPassword => {
//           if (!validPassword) {
//             return res.status(401).send({ message: "Invalid Email or Password" });
//           }
//           const token = user.generateAuthToken(); // Assuming this method generates a JWT
//           res.status(200).send({ data: token, message: "Logged in successfully" });
//         })
//         .catch(error => {
//           res.status(500).send({ message: "Internal Server Error" });
//         });
//     })
//     .catch(error => {
//       res.status(500).send({ message: "Internal Server Error" });
//     });
// });