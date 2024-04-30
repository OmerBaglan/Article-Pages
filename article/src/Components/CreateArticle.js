import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addArticle } from '../ReduxSlice/ArticleReducer'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const CreateArticle = () => {
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const activeuser=useSelector((state)=>state.user.user)
    const dispatch =useDispatch()
    const navigate=useNavigate()
    const dangertitledescription=()=>toast.error('You can write at least 5 and at most 50 characters for the title and at least 40 at most 500 characters for the content...', {
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
    const handleaddArticle=()=>{
        if( title.length < 5 || title.length > 50 , description.length<40 ||  description.length > 500){
        dangertitledescription()
           
        }
       else{
        if(title && description){
            dispatch(addArticle({
                Title:title,
                Description:description,
                Articleid:activeuser[0].userid,
                id:uuidv4(),
                Author:activeuser[0].Username,
                Date: new Date()
            }))
            setTitle("")
            setDescription("")
            navigate(`/${activeuser[0].userid}/userarticles`)
        }else{
            alert("Please fill in the blanks.")
        }
       }
    }

  return (
    <div className="createarticle-wrapper">
        <ToastContainer/>
        <div className="createarticle-box">
            <h2 className="createarticle-title">
                Create Article
            </h2>
            <div className="createarticle-content">
                <div className="content-title">
               <p>Title:</p>    
                <input type="text" 
                  value={title} onChange={(e)=>setTitle(e.target.value)}/>

                </div>

                <div className="content-description">
                <p>Description:</p>
                <textarea name="" id="" cols="40" rows="20"
                 value={description} onChange={(e)=>setDescription(e.target.value)}
                >
                </textarea>
                </div>
                
                <div className="btn-btncreatearticle" onClick={handleaddArticle} >
                    Create Article
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateArticle