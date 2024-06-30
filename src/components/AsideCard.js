import React from 'react';
import { Card, CardContent, Typography,IconButton } from '@mui/material';

const AsideCard = ({ icon,title, content }) => {
   return (
      <Card
         sx={{
            width: '80%',
            // marginBottom: 2,
            ':hover': {
               bgcolor: 'lightpink',
               borderRadius: "3px",
               cursor: "pointer"
            },
            boxShadow: 'none',
            display:"flex",
            height:"80px"
         }}
      >
         <CardContent sx={{display:"flex",alignItems:"center"}}>
            <IconButton>
            {icon}
            </IconButton>
            <Typography variant="h5"  component="div" sx={{fontSize:"20px",color:"#686868"}}>
               {title}
            </Typography>
            {/* <Typography variant="body2" >
               {content}
            </Typography> */}
         </CardContent>
      </Card>
   );
};

export default AsideCard;
