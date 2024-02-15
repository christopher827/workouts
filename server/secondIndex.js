const express=require("express")
const mongoose=require("mongoose")//used for connecting to mongoDB
const cors=require("cors") //Handles  Cross-Origin Resource Sharing
const bcrypt=require("bcrypt")//Used for hashing passwords securely
const jwt=require("jsonwebtoken")//used for user authentication and authorization
const cookieParser=require("cookie-parser")//Used to handle cookies sent by the client
const UserModel=require("./models/Users")

const app=express()
app.use(cors({
origin:["http://localhost:3000"],
methods:["GET","POST"],
credentials:true
})) //Cross-Origin Resource Sharing Middleware
app.use(express.json())
app.use(cookieParser())

mongoose.connect("mongodb://127.0.0.1:27017/test")

app.post('/register',(req,res)=>{
const {name,email,password}=req.body;//The values collected from the frontend
bcrypt.hash(password,10)//Hashes the password value in 10 unique binary values
.then(hash=>{
UserModel.create({name,email,password:hash})
.then(user=>res.json("Success"))
.catch(err=>res.json(err))
}).catch(err=>res.json(err))
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, (err, response) => {
          if (response) {
            const token = jwt.sign(
              { email: user.email, role: user.role }, 
              "jwt-secret-key",
              { expiresIn: '1d' }
            );
            res.cookie("token", token);
            return res.json({ Status: "Success", role: user.role });
          } else {
            return res.json({ Status: "Password is incorrect" }); // Return an object for consistency
          }
        });
      } else {
        return res.json({ Status: "No record existed" }); // Return an object for consistency
      }
    });
});
  
  const varifyUSer=(req,res,next)=>{
    const token=req.cookies.token;
    if (!token) {
        return res.json("Token is missing")
    }else{
        jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
            if (err) {
                return res.json("Error with token")
            }else{
                if (decoded.role==="asdmin") {
                    next()
                }else{
                    return res.json("not admin")
                }
            }
        })
    }
  }

  app.get('/dashboard',varifyUSer,(req,res)=>{

  })

  app.listen(3001,()=>{
    console.log("Server is Running")
})

// app.get('/',(req,res)=>{
//     UserModel.find({})
//     .then(users=>res.json(users))
//     .catch(err=>res.json(err))
// })

// app.get('/getUser/:id',(req,res)=>{
//     const id=req.params.id;
//     UserModel.findById({_id:id})
//     .then(users=>res.json(users))
//     .catch(err=>res.json(err))
// })

// app.post("/createuser",(req,res)=>{
// UserModel.create(req.body)//Adds the data received  in the body of an HTTP request to the database
// .then(users=>res.json(users))
// .catch(err=>res.json(err))
// })

// app.put("/updateUser/:id",(req,res)=>{
//     const id=req.params.id;
//     UserModel.findByIdAndUpdate({_id:id},{
//         name:req.body.name,     
//         email:req.body.email,
//         age:req.body.age})
//     .then(users=>res.json(users)) 
//     .catch(err=>res.json(err))
//     })

// app.delete("/deleteUser/:id",(req,res)=>{
// const id=req.params.id;
// UserModel.findByIdAndDelete({_id:id})
// .then(res=> res.json(res))
// .catch(err=>res.json(err))
// })
//https://www.youtube.com/watch?v=ZLk7lQKGcug

// app.post('/register',(req,res)=>{
//   const {name,email,password}=req.body;//The values collected from the frontend
//   bcrypt.hash(password,10)//Hashes the password value in 10 unique binary values
//   .then(hash=>{
//   UserModel.create({name,email,password:hash})
//   .then(user=>res.json("Success"))
//   .catch(err=>res.json(err))
//   }).catch(err=>res.json(err))
//   })
  