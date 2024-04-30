import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LoginUser } from '../ReduxSlice/UserReducer'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addMessage } from '../ReduxSlice/MessageReducer';

const Login = () => {

    const success =()=>toast.success('Başarılı bir şekilde giriş yaptınız...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        navigate:"/",
        });
        
    const danger=()=>toast.error('You are entering your email or password incorrectly.', {
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

    const dangeremailreal=()=>toast.error('Please enter a real email...', {
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
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch =useDispatch()
    const navigate=useNavigate()
    const users =useSelector((state)=>state.user.users)
   
    const isValidEmail=(email)=>{
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    const handleLogin=()=>{
        if(email && password ){
            const exitingUseremail=users.find((e)=>e.Email == email)
            const exitingUserpassword=users.find((p)=>p.Password == password)

          if(isValidEmail(email)){
            if(exitingUseremail && exitingUserpassword ){
                dispatch(LoginUser({
                    userid:exitingUseremail.userid,
                    Email:exitingUseremail.Email,
                    Username:exitingUseremail.Username,
                    Password:exitingUseremail.Password,
                    Image:exitingUseremail.Image
                }))
                dispatch(addMessage({
                    message:"You have successfully logged in..."
                }))
                success()
                setEmail("")
                setPassword("")
                navigate(`/${exitingUseremail.userid}/dashboard`)
            }else{
                danger()
            }
          }else{
            dangeremailreal()
          }
        }else{
            dangerenter()
        }
    }

  return (
    <div className="login-wrapper">
  
         <ToastContainer />
        <div className="login-box">
            <h2 className="login-title">
                Login
            </h2>
            <div className="login-content">
                <div className="email-input">
                    <input type="email" placeholder='Email' 
                  
                  value={email} onChange={(e)=>setEmail(e.target.value)}
                    />

                </div>

                <div className="password-input">
                    <input type="password" placeholder='Password' 
                    value={password} onChange={(e)=>setPassword(e.target.value)} />

                </div>
                
                <div className="btn-btnlogin" onClick={handleLogin}>
                    Login
                </div>
                <p>Not Registered ? <Link to={"/signup"}>Create an account</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login