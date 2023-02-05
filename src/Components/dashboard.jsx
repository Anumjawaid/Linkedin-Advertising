import React, { useEffect } from "react";
import { useSelector, useDispatch, } from "react-redux"
import { readUser } from "../Store/userreducer"
import { Button } from "@mui/material"
import { useSearchParams, useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import ResponsiveAppBar from "./header";
import PhaseChart from "./chart";


export default function Dashboard() {
  let data = useSelector((state) => state.users.data)
  let dispatch = useDispatch()
  let { id } = useParams()

  useEffect(() => {
    dispatch(readUser({ '_id': id }))

  }, [])

  return (
    <>
      {
        data != {} ?

          <div style={{ background: 'black', paddingBottom: '300px' }}>
            <ResponsiveAppBar />
            <Container style={{ background: 'black', alignItems: 'center', textAlign: 'center', textShadow: '1px', marginTop: '8px' }}>
              <br /><br />
              <Typography variant="h5" component="h5" style={{ color: '#0091E3', marginTop: '8px' }}>
                Hi {data.name + " " + data.family} !!
              </Typography>
              <br /><br />
              <Typography variant="h6" component="h6" style={{ color: '#0091E3', marginTop: '8px' }}>
                Here is your Social Media Analysis Report!!
              </Typography>
              <img src={data.photo} style={{ radius: '50px' }} />

              <br /><br /><br />
              <PhaseChart />
            </Container>
          </div>
          :

          <>
           <div style={{ background: 'black', paddingBottom: '300px' }}>
            <Container style={{ background: 'black', alignItems: 'center', textAlign: 'center', textShadow: '1px', marginTop: '8px' }}>
              <br /><br />
              <Typography variant="h5" component="h5" style={{ color: '#0091E3', marginTop: '8px' }}>
               Loading Your Data !!
              </Typography>
              <br /><br />
           
              <img src={data.photo} style={{ radius: '50px' }} />

              <br /><br /><br />
            </Container>
          </div>
          </>
      }
    </>
  )
}