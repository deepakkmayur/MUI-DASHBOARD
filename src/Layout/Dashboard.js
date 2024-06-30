import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import DashboardCard from '../components/Dashboard/DashboardCard'
import DashboardMap from '../components/Dashboard/DashboardMap'
import Records from '../components/Dashboard/Records'
import DashboardTop from '../components/Dashboard/DashBoardTop'
import SelectRecordGraph from '../components/Dashboard/SelectRecordGraph'


const Dashboard = () => {
  const styleSx = {
    // backgroundColor:"lightblue",
    width: "100%",
    height: "100%",
    borderBottomRightRadius: "15px",
    // overflow:"auto",
  }
  const [selectedRowData, setSelectedRowData] = useState([])
  const handleRowSelect = (rowData) => {
    setSelectedRowData(rowData);
  };

  return (
    <Box sx={styleSx}>
      <DashboardTop />
      <DashboardMap />
      <Typography sx={{ fontWeight: 'bold', fontSize: '22px', marginLeft: 5 }} >Selected Records</Typography>
      <SelectRecordGraph selectedRowData={selectedRowData} />
      <Records onSelect={handleRowSelect} />
    </Box>
  )
}

export default Dashboard