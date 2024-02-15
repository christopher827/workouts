import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function ResetPassword() {
    const [email,setEmail]=useState('')
     const navigate=useNavigate()
     axios.defaults.withCredentials=true
     const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http:localhost:/3001forgotpassword',{email})
      .then(res=>{
        if (res.data.Status==="Success") {
          navigate("/login")
        }
      }).catch(err=>console.log(err))
     }
  return (
    <div className=''>
    <div>
    <h4>Reset Password</h4>
    <form action="">
<div className="mb-3">
<label htmlFor="email">
<strong>New Password</strong>
</label>
<input type="password" placeholder='Enter Password' autoComplete='off' className=''  onChange={(e)=>setEmail(e.target.value)}/>
</div>
<button type='submit'>Update</button>
    </form>
    </div>
    </div>
  )
}

export default ResetPassword
