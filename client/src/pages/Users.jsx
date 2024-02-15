import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

function Users() {
const [users,setUsers]=useState([{}])

useEffect(()=>{
axios.get("http://localhost:3003")
.then(result=>setUsers(result.data))
.catch(err=>console.log(err))
},[])

const deleteUser=(id)=>{
axios.delete('http://localhost:3003/deleteUser/'+id)
.then(res=>{console.log(res)
window.location.reload()
})
.catch(err=>console.log(err))
}

  return (
    <div className='flex h-screen bg-primary justify-center items-center'>
<div className='w--1/2 bg-white rounded p-3'>
  <Link to="/createuser" className='bg-green-500 text-white py-2 px-4 rounded'>Add +</Link>
<table className='table'>
  
<thead>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>Action</th>

  </tr>
</thead>

<tbody>
{
  users.map((user)=>{
  return  <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.age}</td>
      <td>
        <Link to={`/update/${user._id}`} className='bg-green-500 text-white py-2 px-4 rounded'>Edit</Link>
      <button className='bg-red-500 text-white py-2 px-4 rounded' onClick={(e)=>deleteUser(user._id)}>Delete</button>
      </td>
    </tr>
  })
}
</tbody>
</table>
</div>
    </div>
  )
}
export default Users