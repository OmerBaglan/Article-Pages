import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Article = () => {
    const {id}=useParams()
    const articles =useSelector((state)=>state.articles.articles)
    const exitingArticle =articles.find((a)=>a.id ==id)
  return (
    <div className='articlepage'>
        <div className="articlepage-title">
        {exitingArticle.Title}

        </div>
        <div className="articlepage-date">
            {exitingArticle.Date.toLocaleDateString()}
        </div>
        <div className="articlepage-author">
            {exitingArticle.Author}
        </div>
        <div className="articlepage-description">
            {exitingArticle.Description}
        </div>
    </div>
  )
}

export default Article