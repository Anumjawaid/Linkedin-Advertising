import {useEffect} from 'react'
import { useSelector, useDispatch, } from "react-redux"
import { addUser } from "../Store/userreducer"
import { Button } from "@mui/material"


export default function Signup() {
    let data = useSelector((state) => state.users.data)
    let dispatch = useDispatch()
    console.log(data, "data")
    useEffect(()=>{
      if(data=="/auth/linkedIn"){
        // 
        window.location.replace('http://localhost:3002/auth/linkedIn ')
      }
      else{
        // 
        console.log(data,"data in else")
      }

    },[data])
    return (
        <>
            Signup
            <button onClick={() => window.location.replace('http://localhost:3002/auth/linkedIn ')}>fdsgdfg</button>
            <Button variant="contained"  onClick={() =>dispatch(addUser())}>
                Continue With Linkedin
            </Button>
        </>
    )
}