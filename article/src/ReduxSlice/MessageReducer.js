import { createSlice } from "@reduxjs/toolkit";

const initialState={
    message:[]
  
}


export const MessageSlice=createSlice({
    name:"message",
    initialState,
    reducers:{
        addMessage:(state,action)=>{
            state.message =action.payload
        }
    }
   
})

export const {addMessage}=MessageSlice.actions;
export default MessageSlice.reducer;