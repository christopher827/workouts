import React, { useState } from "react";
import axios from "axios";
import {  Link, useNavigate } from "react-router-dom";

function Register() {
  const [name,setNname]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
const navigate=useNavigate()

  const handleRegister=(e) =>{
e.preventDefault()
axios.post("http://localhost:3001/register",{name,email,password})
.then(res=>{
navigate("/login")
}).catch(err=>console.log(err))
  }
  
  return (
    <div>
      <div className="font-sans">
        <div className=" sm:max-w-sm ">
          <div className=" rounded-xl px-6 py-4 bg-white shadow-[10px_32px_71px_1px_rgba(0,0,0,0.04)]">
            <label
              htmlFor=""
              className="block mt-3 text-xl text-gray-900 text-center font-medium"
            >
Register            </label>

            <form onSubmit={handleRegister} className="mt-6">
              <div>
                <input
                  type="name"
                  placeholder="Name"
                  onChange={(e)=>setNname(e.target.value)}
                  className="mt-1 block w-full border-[1px] border-gray-600 outline-none  bg-gray-100 h-11 rounded-md  hover:bg-blue-100  focus:ring-0 px-3"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  className="mt-1 block w-full border-[1px] border-gray-600 outline-none  bg-gray-100 h-11 rounded-md  hover:bg-blue-100  focus:ring-0 px-3"
                />
              </div>


              <div className="mt-7">
                <input
                  type="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Password"
                  className="mt-1 block w-full border-[1px] border-gray-600  outline-none bg-gray-100 h-11 rounded-md  hover:bg-blue-100  focus:ring-0 px-3"
                />
              </div>

              <div className="mt-7">
 <button type="submit" className="bg-[#4383f2] hover:bg-[#3466bd] w-full py-3 rounded-md text-white  focus:outline-none transition duration-200 ease-in-out " >
                  Register
                </button>
              </div>

              <div className="flex my-1 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <span className=" mx-2 text-gray-900">or</span>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="">
                <Link to="/login">
                  <button type="submit" className="bg-[#4383f2] w-full hover:bg-[#3466bd] px-4 py-3 rounded-md cursor-pointer text-white  transition duration-200 ease-in-out ">
                  Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;