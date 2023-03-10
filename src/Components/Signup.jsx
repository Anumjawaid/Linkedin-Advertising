import { useEffect } from 'react'
import { useSelector, useDispatch, } from "react-redux"
import { addUser,Initiate } from "../Store/userreducer"
import { Button } from "@mui/material"
import Advertiise from '../UI/advertise-home.gif'
import { Container, Typography } from '@mui/material';
import '../App.css'


export default function Signup() {
  let data = useSelector((state) => state.users.isInitiated)
  let dispatch = useDispatch()

  let relocate = () => {
    // dispatch(Initiate())
    window.location.replace('http://localhost:3002/auth/linkedIn ')
  }

  return (
    <div style={{ background: 'black', paddingBottom: '300px' }}>
      <Container style={{ background: 'black', alignItems: 'center', textAlign: 'center', textShadow: '1px', marginTop: '8px' }}>
        <br /><br />
        <Typography variant="h5" component="h5" style={{ color: '#0091E3', marginTop: '8px' }}>
          Click to Continue to Your Advertising Dashboard
        </Typography>
        <br />
        <Button variant="contained" style={{ background: '', alignItems: 'center', marginTop: '8px' }} onClick={()=>relocate()}>
          Continue With Linkedin
        </Button>
        <br />
        <img src={Advertiise} />
        <br /><br /><br />
      </Container>
    </div>
  )
}