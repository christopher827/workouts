const mongoose=require('mongoose')
const workoutSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    }
},{timestamps:true})
const workoutSchemaa=mongoose.model("users",workoutSchema)
module.exports=workoutSchemaa