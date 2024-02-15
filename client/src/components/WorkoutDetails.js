import { useWorkoutsContext} from "./hooks/useWorkoutsContext"
import { useAuthContext } from "./hooks/useAuthContext"
 import formatDistanceToNow from "date-fns/formatDistanceToNow"

function WorkoutDetails({workout}) {
const {dispatch}=useWorkoutsContext()
const {user}=useAuthContext()
  const handleClick=async()=>{
    if (!user) {
      return 
    }
const response=await fetch('http://localhost:3001/api/workouts/'+workout._id,{
  method:'DELETE',
 headers:{ 
   'Authorization':`Bearer ${user.token}`
 }
})
const json=await response.json()
if (response.ok) {
  dispatch({type:'DELETE_WORKOUT',payload:json})
}
  }
  return (
    <div className='workout-details'>
  <h4>{workout.title}</h4>
  <p><strong>Load (kg):</strong><strong>{workout.load}</strong></p>    
  <p><strong>Reps</strong><strong>{workout.reps}</strong></p>    
  <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>    
  <span onClick={handleClick}>Delete</span>
    </div>
  )
}
export default WorkoutDetails