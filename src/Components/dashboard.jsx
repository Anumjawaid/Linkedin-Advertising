import React from "react";
import { useSelector, useDispatch, } from "react-redux"
import { readUser } from "../Store/userreducer"
import { Button } from "@mui/material"
import { useSearchParams,useParams } from 'react-router-dom';


export default function Dashboard(){
    let data = useSelector((state) => state.users.data)
    let dispatch = useDispatch()
    console.log(data, "data")
    let params = useParams()
  //   const [searchParams] = useSearchParams();
  // console.log(searchParams,"params");
  // console.log(typeof(searchParams),"type")
  // console.log(Object.keys(searchParams)+"keys")
  // let rr=JSON.stringify(searchParams)
  // console.log(rr,"ddfsdfshkdhfs")
  console.log(params,"ddfdsf")
 return(
    <>
    Dashboard
    <Button variant="contained"  onClick={() =>dispatch(readUser())}>
                Continue Withdddsf
            </Button>
    </>
 )
}