import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteArticle } from '../ReduxSlice/ArticleReducer'

const UserArticle = () => {
    const articles =useSelector((state)=>state.articles.articles)
    const activeuser=useSelector((state)=>state.user.user)
    const exitinguser=articles.filter((a)=> a.Articleid == activeuser[0].userid)
    const dispatch =useDispatch()

    const deletearticle=(id)=>{
      dispatch(deleteArticle({
       id:id
      }))
    }
  return (
    <div className="articles">
        {exitinguser.map((article)=>(
            <div className="article" key={article.Articleid}>
               <div className="article-title">
                {article.Title}
               </div>
              <div className="article-author">
                <p>Author:</p>  {article.Author}
              </div>
              <div className="article-date">
              <p>Release Date:</p>  {article.Date.toLocaleDateString()}
              </div>
          <div className="article-action">
            <div className="delete-article article-btn" 
            onClick={()=>deletearticle(article.id)}>
              Delete Article
            </div>
          <Link to={`/${article.id}/article`}>
           <div className="article-btn go-article">
              Go to Article 
             </div>
           </Link>
          </div>
            </div>
        ))

        }
    </div>
  )
}

export default UserArticle