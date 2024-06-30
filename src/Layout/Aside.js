import React from 'react';
import { Box, Typography } from '@mui/material';
import AsideCard from '../components/AsideCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AssessmentIcon from '@mui/icons-material/Assessment';

const Aside = () => {
  const contentArray = [
    { id: 1, icon: <DashboardIcon sx={{ color: "#ffffff", background: 'rgb(223,14,54)', background: 'linear-gradient(90deg, rgba(223,14,54,1) 0%, rgba(50,74,204,0.8802967231814601) 57%, rgba(240,60,15,1) 100%)', fontSize: 40 }} />, title: "Dashboard" },
    { id: 2, icon: <LocationOnIcon sx={{ color: "rgb(223,14,54)", background: '#e8e8e8', fontSize: 40 }} />, title: "Track on map" },
    { id: 3, icon: <AssessmentIcon sx={{ color: "rgb(223,14,54)", background: '#e8e8e8', fontSize: 40 }} />, title: "Report" }
  ]


  return (
    <Box
      sx={{
        width: '360px',
        height: "100%",
        boxShadow: " 0 0 20px rgba(0, 0, 0, 0.2)",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 2,
        borderTopLeftRadius: "15px",
        borderBottomLeftRadius: "15px",

      }}
    >
      <Typography sx={{ fontSize: '30px', marginBottom: 12 }}>
        <span style={{ color: '#D90B0B' }}>Info</span>
        <span style={{ color: '#053F9D' }}>Track</span>
      </Typography>

      {contentArray.map((ele) => (
        <AsideCard key={ele.id} icon={ele.icon} title={ele.title} />
      ))}

    </Box>
  );
};

export default Aside;
