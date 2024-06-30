   import { Box, Typography } from '@mui/material'
   import React from 'react'


   export const Image = ({images}) => {
      
   return (
      <Box>
      {images.map((imageUrl, index) => (
      <Box
         key={index}
         sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 2,
            marginLeft:1
         }}
      >
         <img
            src={imageUrl}
            alt={`Image ${index}`}
            style={{
            width: '50px',  
            borderRadius: '10%',
            marginTop: -10
            //   marginRight: '10px', 
            }}
         />
      </Box>
      ))}
   </Box>
   )
   }

