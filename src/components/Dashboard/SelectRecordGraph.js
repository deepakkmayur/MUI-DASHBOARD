import { Box, Typography } from '@mui/material'
import React from 'react'
import SelectedRecord from './SelectedRecord'
import Graph from './Graph'


const SelectRecordGraph = ({ selectedRowData }) => {


  return (
    <Box
      sx={{
        height: "25%",
        //  backgroundColor:"lightseagreen",
        display: "flex"
      }}
    >
      <SelectedRecord selectedRowData={selectedRowData} />
      <Box sx={{width: "80%",height: "100%"}}>
        <Graph />
      </Box>
    </Box>
  )
}

export default SelectRecordGraph





