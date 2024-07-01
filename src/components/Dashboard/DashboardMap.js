import React from 'react'
import { Box } from '@mui/material'
import GoogleMap from "./GoogleMap"


const DashboardMap = () => {
  return (
   < Box
   sx={{
// backgroundColor:"lightcoral",
// height:"25%",
// paddingLeft:5
        height: '35%', 
        width: '100%', 
        paddingLeft: 5,
        paddingRight: 5,
   }}
   >
   <GoogleMap/>

   </Box>
  )
}

export default DashboardMap