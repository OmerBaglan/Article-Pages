import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SignupUser } from '../ReduxSlice/UserReducer'
import { v4 as uuidv4 } from 'uuid';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const Signup = () => {
    const danger=()=>toast.error('This email has been used before...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    const dangerenter=()=>toast.error('Please enter your email and password.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    const dangeremail=()=>toast.error('Please enter a real email...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    const dangerusernamepassword=()=>toast.error('You can enter minimum 7 and maximum 20 characters...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
            const isValidEmail=(email)=>{
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailPattern.test(email);
            }
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [username,setUsername]=useState("")
    const dispatch =useDispatch()
    const navigate=useNavigate()
    const users =useSelector((state)=>state.user.users)

    const handleSignup=()=>{
        if(email && password && username){
            if(isValidEmail(email)){
                const exitingUser=users.find((u)=>u.Email == email)
                if(exitingUser){
                  danger()
                }else{
                  if( password.length < 7 || password.length > 20 , username.length<7 ||  username.length > 20){
                   dangerusernamepassword()
                
                  }else{
                   dispatch(SignupUser({
                       userid:uuidv4(),
                       Email:email,
                       Username:username,
                       Password:password,
                       Image:""
                   }))
                   navigate("/login")
                   setEmail("")
                   setPassword("")
                   setUsername("")
                  }
                }
            }else{
                dangeremail()
            }
           
           
        
        }else{
          dangerenter()
        }
    }

  return (
    <div className="signup-wrapper">
        <ToastContainer/>
    <div className="signup-box">
        <h2 className="signup-title">
            Sign Up
        </h2>
        <div className="signup-content">
            <div className="email-input">
                <input type="email" placeholder='Email' 
                value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="username-input">
                <input type="text" placeholder='Username' 
                value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="password-input">
                <input type="password" placeholder='Password'
                value={password} onChange={(e)=>setPassword(e.target.value)}  />
            </div>
        
            <div className="btn-btnsignup" onClick={handleSignup}>
                Sign Up
            </div>
        </div>
    </div>
</div>
  )
}

export default Signup