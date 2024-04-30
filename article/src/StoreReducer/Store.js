import { configureStore } from '@reduxjs/toolkit'
import  UserSlice  from '../ReduxSlice/UserReducer'
import  ArticleSlice  from '../ReduxSlice/ArticleReducer'
import  MessageSlice  from '../ReduxSlice/MessageReducer'

export default configureStore({
  reducer: {
    user:UserSlice,
    articles:ArticleSlice,
    messages:MessageSlice
  }
})
