import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Articles = () => {
  
    const articles =useSelector((state)=>state.articles.articles)

  return (
    <div className="articles">
    {articles.map((article)=>(
        <div className="article" key={article.Articleid}>
           <div className="article-title">
            {article.Title}
           </div>
          <div className="article-author">
            <p>Author:</p> {article.Author}
          </div>
          <div className="article-date">
          <p>Release Date:</p> {article.Date.toLocaleDateString()}
          </div>
      <div className="article-action">
       
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

export default Articles