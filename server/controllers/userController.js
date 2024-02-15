const User=require("../models/userModel")
const bcrypt=require("bcrypt")
const validator =require("validator")
const jwt=require("jsonwebtoken")
//Janetidah23#4566
const createTokem=(_id)=>{
return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}
//login user
const loginUser=async (req,res)=>{
    const {email,password}=req.body //The values collected from the request body/frontend
    if(!email || !password){  //If a field is left empty, it'll return this message and won't proceed to the next
return res.status(400).json("All fields must be filled")
    }
    if(!validator.isEmail(email)){ //Checks if the email entered is valid or not
return res.status(400).json("Invalid email format")
    }
    if(!validator.isStrongPassword(password)){//Checks if the password entered is valid or not
return res.status(400).json("Password is not strong enough")
    }
    const user=await User.findOne({email})//Checks if the email is in our database
    if (!user) {  //if the email is not, it returns this message
        return res.status(400).json("Email not recognised!!")
    }
    const match=await bcrypt.compare(password,user.password) 
    if (!match) {
        return res.status(400).json("Incorrect password")
    }
    const token =createTokem(user._id)
        res.status(200).json({email,token})
}
const signupUser=async(req,res)=>{
const {email,password}=req.body
if (!email || !password) {
    return res.status(400).json("All fields must be filled")
}
if(!validator.isEmail(email)){
    return res.status(400).json("Invalid email format")
}
if(!validator.isStrongPassword(password)){
    return res.status(400).json("Password not strong enough")
}
const exists=await User.findOne({email})
if(exists){
    return res.status(400).json({error:"Email already in use"})
}
try {
    const salt=await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(password,salt)
    const user=await User.create({email,password:hash})
    const token =createTokem(user._id)
        res.status(200).json({email,token})//This json executes if everything goes fine in this try block
} catch (error) {
    res.status(400).json({error:error.message})
}
}
module.exports={loginUser,signupUser}