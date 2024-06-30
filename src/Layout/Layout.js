import React from 'react'
import Aside from './Aside'
import MainContent from './MainContent'
import { Box } from '@mui/material';

const Layout = () => {

  return (
    <Box
      sx={{
        borderRadius: '15px',
        boxShadow: " 0 0 20px rgba(0, 0, 0, 0.5)",
        display: 'flex',
        // height: "100%",
        width: '100%', height: '100vh'
      }}
    >
      <Aside />
      <MainContent />
    </Box>
  )
}

export default Layout

