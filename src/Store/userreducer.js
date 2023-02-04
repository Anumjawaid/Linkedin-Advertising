import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:null,
   data:{

   }
}

export const addUser=createAsyncThunk(
    'user/addUser',
    async(data,thunkApi)=>{
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const res = await fetch('http://localhost:3002/',requestOptions)
        // console.log(res,"response")
        return res.json();
    }
)

export const readUser=createAsyncThunk(
    'user/readUser',
    async(data,thunkApi)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(data)
        };
        const res = await fetch('http://localhost:3002/userdata',requestOptions)
        // console.log(res,"response")
        return res.json();
    }
)
export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.email=action.payload
        },
       
        displaySave:(state,action)=>{
            state.display=action.payload.display
        },
       
    },
    extraReducers:{
        [addUser.pending]: (state, action)=>{
            console.log('pending');
        },
        [addUser.rejected]:(state,action)=>{
            console.log(state,"Got rejected from pushing user in ADDUSER")
            // state.responses=action.payload.message
        },
        [addUser.fulfilled]:(state,action)=>{
            console.log(state,"fullfilled from in ADDUSER")
            state.responses=action.payload.status
            state.data=action.payload.data
            
        },
        [readUser.pending]: (state, action)=>{
            console.log('pending');
        },
        [readUser.rejected]:(state,action)=>{
            console.log(state,"Got rejected from reading USER")
            // state.responses=action.payload.message
        },
        [readUser.fulfilled]:(state,action)=>{
            console.log(state,"fullfilled from in readUSER")
            // state.responses=action.payload.status
            state.data=action.payload.result
            
        }
              
    }
})

export const { add,displaySave } = userSlice.actions