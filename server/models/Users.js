const mongoose=require("mongoose")
const jwt = require('jsonwebtoken');

//A schema of the data that will/should be passed to the already created collection in mongoDB
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
      { _id: this._id, email: this.email },
      '123456789123123123451234567890786543', 
      { expiresIn: '1d' } // Token expires in 1 day
    );
    return token;
  };
//Specified the collection name(users) and the model definition
const UserModel=mongoose.model("users",userSchema)
module.exports=UserModel