import {useState} from "react"
import {useAuthContext} from "./useAuthContext" 

export const useSignup=()=>{
    const [error,setError]=useState(null)
    const [isLoading,setIsLoading]=useState(null)
    const {dispatch}=useAuthContext()

    const signup=async(email,password)=>{
        setIsLoading(true)
        setError(null)
        const response=await fetch('http://localhost:3001/api/user/signup',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})//converting the object into a JSON-formatted string 
        })
        const json=await response.json()//This will return some information with the JWT and the user's email address if the POST req was a success
        if(!response.ok){
            setIsLoading(false)
            setError(json)
        }
        if(response.ok){
            //saves the user's email and token to local Storage
            localStorage.setItem("user",JSON.stringify(json))
            //update the auth context
            dispatch({type:'LOGIN',payload:json})
            setIsLoading(false)
        }
    }
    return {signup,isLoading,error}
}
// Janetidah21!#$