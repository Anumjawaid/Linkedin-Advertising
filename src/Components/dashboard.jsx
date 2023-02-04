import React ,{useEffect}from "react";
import { useSelector, useDispatch, } from "react-redux"
import { readUser } from "../Store/userreducer"
import { Button } from "@mui/material"
import { useSearchParams, useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import ResponsiveAppBar from "./header";


export default function Dashboard() {
  let data = useSelector((state) => state.users.data)
  let dispatch = useDispatch()
  console.log(data, "data")
  let { id } = useParams()
  //   const [searchParams] = useSearchParams();
  // console.log(searchParams,"params");
  // console.log(typeof(searchParams),"type")
  // console.log(Object.keys(searchParams)+"keys")
  // let rr=JSON.stringify(searchParams)
  // console.log(rr,"ddfsdfshkdhfs")
  console.log(id, "ddfdsf")
  console.log(data, "data")
  useEffect(() => {
    dispatch(readUser({'_id':id}))

  }, [])
  
  return (
    
    <div style={{ background: 'black' }}>
      <ResponsiveAppBar/>
      <Container style={{ background: 'black', alignItems: 'center', textAlign: 'center', textShadow: '1px', marginTop: '8px' }}>
        <br /><br />
        <Typography variant="h5" component="h5" style={{ color:'#0091E3',marginTop:'8px' }}>
          Hi {data.name +" "+ data.family } !!
        </Typography>
        <img src={data.photo} style={{radius:'50px'}}/>

        <br /><br /><br />
      </Container>
    </div>
  )
}