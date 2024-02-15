import React from "react"
 import { Route, Routes,Navigate } from "react-router-dom"
 import { useAuthContext } from "./components/hooks/useAuthContext"
 import LogIn from './pages/Login'
 import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
 import Home from "./pages/Home"
 import Navbar from "./components/Navbar"
// import Register from "./pages/Register"
// import ResetPassword from "./pages/ResetPassword"
// import SignIn from "./pages/SignIn"
import "./App.css"

function App() {
const {user} =useAuthContext()
    return(
<div className="App">
<Navbar/>
<div className="pages">
 <Routes>
<Route path="/" element={user?<Home/> : <Navigate to="/login"/>}/>
<Route path="/signup" element={!user ? <Signup/> : <Navigate to="/"/>}/>
<Route path="/login" element={!user ? <LogIn/> : <Navigate to="/" />}/>
</Routes> 
</div>
</div>
    )
}
export default App

 {/*
 {user && <Route path="/" element={<Home/>}/>}
<Route path="/register" element={<Register/>}/>
<Route path="/" element={<Navigate replace to="/register" />} />
<Route path="/login" element={<LogIn/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
*/}


// const {user} =useAuthContext()
//     return(
// <div className="App">
// <Navbar/>
// <div className="pages">
//  <Routes>
// <Route path="/" element={user?<Home/> : <Navigate to="/login"/>}/>
// <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/"/>}/>
// <Route path="/login" element={!user ? <LogIn/> : <Navigate to="/" />}/>
// </Routes> 
// </div>
// </div>
//     )