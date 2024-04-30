import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { Logout } from '../ReduxSlice/UserReducer'
import { FaUserCircle ,FaAddressBook} from "react-icons/fa";
import { IoLogOutOutline, IoBookmarks } from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";

const Header = () => {
    const activeuser =useSelector((state)=>state.user.user)
    const useropen =useSelector((state)=>state.user.useropen)
    const [activedashboard,setActivedashboard]=useState(false)
    const dispatch =useDispatch()
    const navigate=useNavigate()
    const handleLogout =()=>{
      dispatch(Logout({}))
      navigate("/")
      setActivedashboard(false)
    }
    const dashboardActive=()=>{
      setActivedashboard(!activedashboard)
    }
    
  return (
    <div className="header">
        <div className="navbar">
            <div className="menu-link">
            <Link  to={"/articles"}>
            <div className="nav-articles">
                Articles
            </div>
            </Link>
           
            </div>
            <div className="panel">
              {useropen ? (<div className='panel user-panel'>
              <div className="dashboard-btn" onClick={dashboardActive} >
             { activeuser[0].Image ?(<img src={URL.createObjectURL(activeuser[0].Image)} alt="" className='profile-icon'/> ):( <FaUserCircle/>)

             }
              </div>
                <ul className={activedashboard ? "panel-menu-active" :"panel-menu"}>
                <Link to={`${activeuser[0].userid}/dashboard`} >
                <div onClick={()=>setActivedashboard(false)} className='panel-link'>
                  <FaAddressBook />  Edit Profile
                </div>
               
                </Link>
                <Link  to={`${activeuser[0].userid}/userarticles`} >
                <div className='panel-link' onClick={()=>setActivedashboard(false)} >
                <IoBookmarks/>  My Articles
                </div>
                </Link>
                <Link to={`${activeuser[0].userid}/createarticle`} >
                <div className='panel-link cm' onClick={()=>setActivedashboard(false)}>
                 <IoIosCreate className='dashboard-icon'/>  Create Makale
                </div>
                </Link>
                <Link to={"/"}>
                <div className='panel-link' onClick={handleLogout} >
                 <IoLogOutOutline className='logout-icon '/>  Logout
                </div>
                </Link>
                </ul>
              </div>):(
                <div className="panel">
                <Link to={"/login"}>
                <div className="login-btn">
                     Login
                 </div>
                </Link>
                <Link to={"/signup"}>
                <div className="signup-btn">
                     Sign up
                 </div>
                </Link>
                </div>
              )

              }
            </div>
        </div>
    </div>
  )
}

export default Header