import React, { useRef, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Addİmage } from '../ReduxSlice/UserReducer';
import { useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { updateArticle } from '../ReduxSlice/ArticleReducer';

const Dashboard = () => {
  const message=useSelector((state)=>state.messages.message)
  
    const successlogin =()=>toast.success(`${message.message}`, {
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
    const success =()=>toast.success('Your profile has been successfully edited...', {
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
    const dangeremail=()=>toast.error('This email has been used by someone else before...', {
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
    const dangerpassword=()=>toast.error('You are entering your password incorrectly...', {
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
      const dangerenter=()=>toast.error('Please fill in the blanks...', {
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
    const activeuser=useSelector((state)=>state.user.user)
    const [email,setEmail]=useState(activeuser[0].Email)
    const users=useSelector((state)=>state.user.users)
    const [image,setİmage]=useState("")
    const [password,setPassword]=useState("")
    const [username,setUsername]=useState(activeuser[0].Username)
    const navigate=useNavigate()
    const dispatch =useDispatch()
    const useropen =useSelector((state)=>state.user.useropen)
    const handleImage=(e)=>{
        setİmage(e.target.files[0])      
      }

      
     const handleEditUser=()=>{
        if(password && email && username){
            if(password == activeuser[0].Password){
                const exitingUser=users.find((u)=>u.Email == email)
                if(!exitingUser){     
                  dispatch(Addİmage({
                    userid:activeuser[0].userid ,
                    Email:email,
                    Password:password,
                    Username:username,
                    Image:image
                }))
                dispatch(updateArticle({
                  Articleid:activeuser[0].userid,
                  Author:username
                }))
                navigate(`/${activeuser[0].userid}/dashboard`)
                success()   
              }
                else{
                  if( exitingUser.Email == activeuser[0].Email   ){
                     
                  if(image===""){
                    dispatch(Addİmage({
                      userid:activeuser[0].userid ,
                      Email:email,
                      Password:password,
                      Username:username,
                      Image:activeuser[0].Image
                  }))
                  dispatch(updateArticle({
                    Articleid:activeuser[0].userid,
                    Author:username
                  }))
                  navigate(`/${activeuser[0].userid}/dashboard`)
                  success()
                  }else{

                    dispatch(Addİmage({
                      userid:activeuser[0].userid ,
                      Email:email,
                      Password:password,
                      Username:username,
                      Image:image
                  }))

                  dispatch(updateArticle({
                    Articleid:activeuser[0].userid,
                    Author:username
                  }))
                  navigate(`/${activeuser[0].userid}/dashboard`)
                  success()

                  }
                  }           
                }
             
            }else{  
                dangerpassword()
            }
        }else{
            dangerenter()
        }
     }
  return (
    <div className="profile-wrapper">
      

<ToastContainer />   
    <div className="profile">
    <h2 className="profile-title">
        Edit Profile
    </h2>
    <div className="profile-foto-wrapper">
       {activeuser[0].Image ?(<img src={URL.createObjectURL(activeuser[0].Image)} alt="" className='profile-foto'/> ):(
         <FaUserCircle className='profile-foto'/>
       )
        
       }
        <input type="file" onChange={handleImage} className='addimage'/>
    </div>       
    <div className="profile-content">
        <div className="profile-email">
          <p>Email:</p> <input type="text" 
          value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="profile-username">
          <p>Username:</p> <input type="text" 
          value={username}  onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="profile-password">
          <p>Password:</p> <input type="password" 
          value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="profile-edit" onClick={handleEditUser}>
            Edit Profile
        </div>
    </div>
    </div>
    </div>
  )
}

export default Dashboard