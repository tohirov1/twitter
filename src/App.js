import { useState,useEffect } from "react";
import "./app.css"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Main from "./components/Main";
import { auth } from "./firebase";


export default function App() {
   
    const [user,setUser] = useState(null);
    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if(user) {
                setUser(user)
            } else{
                setUser(null)
            }
        })
        return unsubscribe
    },[])
   return(
    <>
        <BrowserRouter>
         <Routes>
          <Route path="/" element={< Register user={user}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/main" element={user ? <Main/> : <Navigate to='/'/>}/>
         </Routes>
        </BrowserRouter>
    </>
   )
}