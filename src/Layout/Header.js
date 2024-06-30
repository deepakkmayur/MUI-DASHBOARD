import React from 'react'
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import ProfilePic from "../images/Avatar/1.jpg"
// import NotificationIcon from "../images/notification.png"
import NotificationsIcon from '@mui/icons-material/Notifications';


const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '5rem',
        borderTopRightRadius: "15px",
        boxShadow: " 0 8px 8px rgba(0, 0, 0, 0.2)",
        justifyContent: "flex-end",
        alignItems: "center"
      }}
    >
      <IconButton>
        <NotificationsIcon sx={{ color: "black", fontSize: 40 }} />
      </IconButton>
      <Avatar
        src={ProfilePic}
        alt="Avatar ....."
        sx={{
          width: 43,
          height: 43,
          marginRight: 3,
          marginLeft: 1,
          ":hover": {
            cursor: "pointer"
          },
        }}
      />
    </Box>
  )
}

export default Header


