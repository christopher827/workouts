const express=require('express')
const {createWorkout,getWorkouts,getWorkout,deleteWorkout,updateWorkout} =require("../controllers/workoutController")
const requireAuth = require('../middleware/requireAuth')
const router=express.Router()

router.use(requireAuth)//This middleware function checks if the user is authenticated first before allowing access to the rotes below
router.get("/",getWorkouts)
router.get('/:id',getWorkout)
router.post('/',createWorkout)
router.patch('/:id',updateWorkout)
router.delete('/:id',deleteWorkout)

module.exports=router