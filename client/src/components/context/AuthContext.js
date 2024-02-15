import {createContext,useReducer,useEffect} from 'react'
export const AuthContext=createContext()

//This is the definition of the authReducer function below, it takes the current state of the function below(user:nul)
//And an action as arguments, for updating the state of the Reducer
export const authReducer=(state,action)=>{
    switch (action.type) {
//used to update the state when a login action is dispatched
        case 'LOGIN':
            return {user:action.payload}//action.payload is used to hold the data that you want to update the state with.
        case 'LOGOUT':
            return   {user:null}
        default:
            return state
    }
}
export const AuthContextProvider=({children})=>{
    //This authReducer function initial state is null,
    const [state,dispatch]=useReducer(authReducer,{
        //There's a value:it's just empty
        user:null
    })
    console.log('AuthContext state:', state)
    
//Only fires this useEffect hook once when the component renders on the browser
    useEffect(()=>{
const user=JSON.parse(localStorage.getItem('user'))
if (user) {
    dispatch({type:'LOGIN',payload:user})
}
    },[])
    console.log("Auth Context ",state)
    return (
     <AuthContext.Provider value={{...state,dispatch}}>
        {children}
     </AuthContext.Provider>
    )
}
//abcABC1!@