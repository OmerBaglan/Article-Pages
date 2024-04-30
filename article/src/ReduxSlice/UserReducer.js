import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:[],
    user:[],
    useropen:false,
}

export const UserSlice =createSlice({
    name:"User",
    initialState,
    reducers:{
        SignupUser:(state,action)=>{
            state.users=[
                ...state.users,
                action.payload
            ]

        },
        LoginUser:(state,action)=>{
            state.user=[
                ...state.user,
                action.payload
            ]
            state.useropen =true
        },
        Logout:(state)=>{
           state.useropen=false
           state.user=[]
        },
        Addİmage:(state,action)=>{
        const {userid}=action.payload
        const newUsers=state.users.filter((u)=>u.userid !==userid)
        state.users=[
            ...newUsers,
            action.payload
        ]
        state.user=[action.payload]
        }
    }
})

export const {SignupUser,LoginUser,Logout,Addİmage} =UserSlice.actions;
export default UserSlice.reducer;

