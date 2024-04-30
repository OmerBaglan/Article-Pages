import { createSlice } from "@reduxjs/toolkit";

const initialState={
    articles:[]
  
}


export const ArticleSlice=createSlice({
    name:"article",
    initialState,
    reducers:{
        addArticle:(state,action)=>{
            state.articles=[
                ...state.articles,
                action.payload,
            ]
            console.log(state.articles);
        },
        deleteArticle:(state,action)=>{
          const {id}=action.payload
        state.articles =state.articles.filter((a)=>a.id!==id)
        },
        updateArticle: (state, action) => {
            const { Articleid } = action.payload;
            
            if (!state.articles || state.articles.length === 0) {
                console.error("Error: state.articles is undefined or empty.");
                return;
            }
            
            const updatedArticles = state.articles.map(article => {
                if (article.Articleid === Articleid) {
                    return {
                        ...article,
                        Author: action.payload.Author 
                    };
                }
                return article;
            });
        
            state.articles = updatedArticles;
            
            if (!state.user || state.user.length === 0) {
                console.error("Error: state.user is undefined or empty.");
                return;
            }
            
           
            state.user = state.user.map(user => {
                if (user.Articleid === Articleid) {
                    return {
                        ...user,
                        Author: action.payload.Author
                    };
                }
                return user;
            });
            
            console.log(state.articles);
        }
        
    }
})

export const {addArticle,deleteArticle,updateArticle} =ArticleSlice.actions;
export default ArticleSlice.reducer;