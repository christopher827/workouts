import React,{useEffect, useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {

  const {id}=useParams()
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [age,setAge]=useState()
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:3003/getUser/"+id,{name,email,age})
    .then(result=>{console.log(result)
     setName(result.data.name) 
     setEmail(result.data.email) 
     setAge(result.data.age) 
    })
    .catch(err=>console.log(err))
  },[])

  const Update=(e)=>{
    e.preventDefault()
    axios.put("http://localhost:3003/updateUser/"+id,{name,email,age})
    .then(result=>
      {console.log(result)
      navigate("/")
      })
    .catch(err=>console.log(err))
      }

  return (
<div className='flex h-screen justify-center items-center'>
<div className='w-1/2 bg-white rounded p-3'>
<form onSubmit={Update}>
  <h2>Update User</h2>

  <div className="mb-2">
<label htmlFor="">Name</label>
<input type='text' placeholder='Enter Name' className='form-control' value={name}  onChange={(e)=>setName(e.target.value)}/>
  </div>

  <div className="mb-2">
<label htmlFor="">Email</label>
<input type='Email' placeholder='Email' className='form-control' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
  </div>

  <div className="mb-2">
<label htmlFor="">Age</label>
<input type='text' placeholder='Enter Age' className='form-control' value={age}  onChange={(e)=>setAge(e.target.value)}/>
  </div>

<button className='bg-green-500 text-white py-2 px-4 rounded'>Update</button>

</form>
      </div>
    </div>
  )
}

export default UpdateUser
