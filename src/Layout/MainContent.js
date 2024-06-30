import React from 'react'
import Header from './Header'
import Dashboard from './Dashboard'
import { Box, Typography } from '@mui/material';

const MainContent = () => {

  return (
    <Box
      sx={{
        // backgroundColor:"lightblue",
        //   display: 'flex',
        //   flexDirection: 'column',
        // height: '100%',
        // width: '100%',
        width: '100%', height: '100vh',
        borderTopRightRadius: "15px",
        borderBottomRightRadius: "15px",
        overflow:"auto",
      }}
    >
      <Header />
      <Typography sx={{ fontSize: "22px", fontWeight: "bold", marginTop: 1, marginLeft: 5 }}>Dashboard</Typography>
      <Dashboard />
    </Box>
  )
}

export default MainContent