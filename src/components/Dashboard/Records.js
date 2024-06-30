import { Box } from '@mui/material'
import React from 'react'
import DataTable from './DataTable'

const Records = ({onSelect}) => {
  const handleRowSelectRecords = (rowData) => {
    onSelect(rowData); 
  };
  return (
   <Box
   sx={{
    // backgroundColor:'lightpink',
    height:"20%",
    padding:"0 30px",
   }}
   >
    
  <DataTable onSelect={handleRowSelectRecords}/>
   </Box>
  )
}

export default Records
