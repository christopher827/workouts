import React, { useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useAuthContext } from '../components/hooks/useAuthContext'
import {useWorkoutsContext} from "../components/hooks/useWorkoutsContext"

function Home() {
const {user}=useAuthContext()
const {dispatch,workouts}=useWorkoutsContext()
  useEffect(()=>{
const fetchWorkouts=async()=>{
  const response=await fetch('http://localhost:3001/api/workouts',{
    headers:{
      'Authorization':`Bearer ${user.token}`
    }
  })
  const json=await response.json()
  if (response.ok) {
dispatch({type:'SET_WORKOUTS',payload:json})
  }
}
if (user) {
  fetchWorkouts()
}
  },[dispatch,user])//Whenever we use an external function, we have to pass it as a dependency to the useEffect hook
  return (
    <div className='home'>
<div className="workouts">
{workouts && workouts.map((workout)=>(
<WorkoutDetails key={workout._id} workout={workout}/>
))}
</div>
<WorkoutForm/>
    </div>
  )
}
export default Home