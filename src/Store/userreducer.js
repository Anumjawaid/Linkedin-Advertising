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

export const logoutUser=createAsyncThunk(
    'user/logoutUser',
    async(data,thunkApi)=>{
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const res = await fetch('http://localhost:3002/logout',requestOptions)
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
        logout:(state,action)=>{
            document.cookie=''
            state.data={}
        }
       
    },
    extraReducers:{
        [addUser.pending]: (state, action)=>{
        },
        [addUser.rejected]:(state,action)=>{
            // state.responses=action.payload.message
        },
        [addUser.fulfilled]:(state,action)=>{
            state.responses=action.payload.status
            state.data=action.payload.data
            
        },
        [readUser.pending]: (state, action)=>{
            console.log('pending');
        },
        [readUser.rejected]:(state,action)=>{
            // state.responses=action.payload.message
        },
        [readUser.fulfilled]:(state,action)=>{
            // state.responses=action.payload.status
            state.data=action.payload.result
            
        },
        [logoutUser.pending]: (state, action)=>{
            console.log('pending');
        },
        [logoutUser.rejected]:(state,action)=>{
            // state.responses=action.payload.message
        },
        [logoutUser.fulfilled]:(state,action)=>{
            // state.responses=action.payload.status
            // state.data=action.payload.result
            
        }
              
    }
})

export const { add,displaySave,logout } = userSlice.actions