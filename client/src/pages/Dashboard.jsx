import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'

function Dashboard() {
    const [success,setSuccess]=useState()
    const navigate=useNavigate()
axios.defaults.withCredentials=true
    useEffect(()=>{
        axios.get("http://localhost:3001/dashboard")
        .then(result=>{
if (result.data==="Success") {
    setSuccess("Succeeded OK")
}else{
    navigate('/')
}
        })
          .catch(err=>console.log(err))
        
    },[])
  return (
    <div>
     Dashboard 
    </div>
  )
}

export default Dashboard
