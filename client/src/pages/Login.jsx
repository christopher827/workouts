import React, { useState } from 'react'
import { useLogin } from '../components/hooks/useLogin'

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
const {login,error,isLoading}=useLogin()

    const handleSubmit=async(e)=> {
        e.preventDefault()
await login(email,password)    }
  return (
<form className='login' onSubmit={handleSubmit}>
<h3>Login</h3>
<label>Email:</label>
<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
<label>Login:</label>
<input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
<button disabled={isLoading}>Log in</button>
{error && <div className='error'>{error}</div>}
</form>

)
}

export default Login


// import React, { useState } from "react";
// import axios from "axios";
// import {  useNavigate,Link } from "react-router-dom";

// function LogIn() {
//   const [email,setEmail]=useState()
//   const [password,setPassword]=useState()
// const navigate=useNavigate()

// const handleLogIn = (e) => {
//   axios.post("http://localhost:3001/login", { email, password })
//     .then(result => {
//       localStorage.setItem("token", result.data);
//       navigate("/home");
//     })
//     .catch(err => console.log("This is the error",err));
// };
//   return (
//     <div>
//       <div className="font-sans">
//         <div className=" sm:max-w-sm ">
//           <div className=" rounded-xl px-6 py-4 bg-white shadow-[10px_32px_71px_1px_rgba(0,0,0,0.04)]">
//             <label
//               htmlFor=""
//               className="block mt-3 text-xl text-gray-900 text-center font-medium"
//             >
// Log In            </label>

//             <form onSubmit={handleLogIn} className="mt-6">
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   onChange={(e)=>setEmail(e.target.value)}
//                   className="mt-1 block w-full border-[1px] border-gray-600 outline-none  bg-gray-100 h-11 rounded-md  hover:bg-blue-100  focus:ring-0 px-3"
//                 />
//               </div>

//               <div className="mt-7">
//                 <input
//                   type="password"
//                   onChange={(e)=>setPassword(e.target.value)}
//                   placeholder="Password"
//                   className="mt-1 block w-full border-[1px] border-gray-600  outline-none bg-gray-100 h-11 rounded-md  hover:bg-blue-100  focus:ring-0 px-3"
//                 />
//               </div>

//               <div className="mt-7">
//                 <button
//                   className="bg-[#4383f2] hover:bg-[#3466bd] w-full py-3 rounded-md text-white  focus:outline-none transition duration-200 ease-in-out "
//                 >
//                   Login
//                 </button>
//               </div>

//               <div className="flex my-1 items-center text-center">
//                 <hr className="border-gray-300 border-1 w-full rounded-md" />
//                 <span className=" mx-2 text-gray-900">or</span>
//                 <hr className="border-gray-300 border-1 w-full rounded-md" />
//               </div>

//               <div className="">
//                 <Link to="/register">
//                   <button type="submit" className="bg-[#4383f2] w-full hover:bg-[#3466bd] px-4 py-3 rounded-md cursor-pointer text-white  transition duration-200 ease-in-out ">
//                   Register
//                   </button>
//                 </Link>
//               </div>


//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LogIn;

// // import { Route, Routes } from "react-router-dom"
// // import Main from "./components/Main"
// // import SignUp from "./components/SignUp"

// // function App() {
// //   const user=localStorage.getItem("token")
// //   return(
// // 		<Routes>
// // 			{user && <Route path="/" exact element={<Main />} />}
// // 			<Route path="/signup" exact element={<Signup />} />
// // 			<Route path="/login" exact element={<Login />} />
// // 			<Route path="/" element={<Navigate replace to="/login" />} />
// // 		</Routes>  )
// // }