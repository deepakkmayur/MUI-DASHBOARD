// import { Box, Typography } from '@mui/material';
// import React from 'react';

// const DashboardCard = ({ cardDetails }) => {

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         gap: 2,
//         justifyContent: 'space-evenly',
//         // backgroundColor: "red",
//         marginBottom: 2,
//         padding: "5px 20px 0 20px",
//         height: "70%",
//         width: "100%",

//       }}
//     >
//       {cardDetails.map((card, index) => (
//         <Box
//           key={index}
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             width: {
//               xs: '80%',
//               sm: '45%',
//               md: '30%',
//               lg: '20%',
//               xl: '18%',
//             },
//             height: '100px',
//             boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
//             borderRadius: "20px",
//             margin: "10px",
//             // backgroundColor: 'yellow',
//             zIndex: 1
//           }}
//         >
//           <Box
         
//             sx={{
//               width: "100px",
//               height: "100px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: 'center',
//               justifyContent: 'center',
//               textAlign: 'center',
//               padding: 1,
//               position: 'relative',
//               bottom: 2
//             }}
//           >
//             <img src={card.image} alt="Image" style={{ width: '80%', height: 'auto', borderRadius: '10px', marginTop: '-15px' }} />
//             <Typography sx={{ fontSize: "17px", color: `${card.color}`, fontWeight: "bold" }}>{card.percentage}%</Typography>
//             <Typography sx={{ fontSize: "60%", fontWeight: "bold" }}>{card.view}</Typography>
//           </Box>

//           <Box

//             sx={{
//               width: "65%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               paddingLeft: 1,
//               textAlign: "center",
//             }}
//           >
            
//             <Typography sx={{ fontSize: "100%", color: `${card.color}`, fontWeight: "bold", marginBottom: "3px", marginLeft: "auto", marginRight: "10px" }}>
//               {card.movement}
//             </Typography>
//             <Typography sx={{ fontSize: "120%", fontWeight: "bold", marginBottom: "3px", marginLeft: "auto", marginRight: "10px" }}>
//               {card.number}
//             </Typography>
//             <Typography sx={{ fontSize: "60%", fontWeight: "bold", marginLeft: "auto", marginRight: "10px" }}>
//               {card.viewMap}
//             </Typography>
//           </Box>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default DashboardCard;


import { Box, Typography } from '@mui/material';
import React from 'react';

const DashboardCard = ({ cardDetails }) => {

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        justifyContent: 'space-evenly',
        // backgroundColor: "red",
        marginBottom: 2,
        marginTop: 2,
        padding: "5px 20px 0 20px",
        height: "70%",
        width: "100%",

      }}
    >
      {cardDetails.map((card, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "row",
            width: {
              xs: '80%',
              sm: '45%',
              md: '30%',
              lg: '20%',
              xl: '18%',
            },
            height: '100px',
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
            borderRadius: "20px",
            margin: "10px",
            // backgroundColor: 'yellow',
            zIndex: 1
          }}
        >
          <Box

            sx={{
              // width: "100px",
              width: "80%",
              height: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: 1,
              position: 'relative',
              bottom: 2
            }}
          >
            {/* <img src={card.image} alt="Image" style={{ width:{sm:"30px",md:'50px',lg:"70px",xl:"50px"}, borderRadius: '10px', marginTop: '-15px' }} /> */}
            <img
        src={card.image}
        alt="Image..."
        style={{
          width: '50px', 
          borderRadius: '10px',
          marginTop: '-15px',
          '@media (min-width:600px)': {
            width: '50px', 
          },
          '@media (min-width:960px)': {
            width: '70px', 
          },
          '@media (min-width:1280px)': {
            width: '50px', 
          },
        }}
      />
            <Typography sx={{ fontSize: "17px", color: `${card.color}`, fontWeight: "bold" }}>{card.percentage}%</Typography>
            <Typography sx={{ fontSize: "60%", fontWeight: "bold" }}>{card.view}</Typography>
          </Box>

          <Box

            sx={{
              width: "65%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 1,
              textAlign: "center",
            }}
          >

            <Typography sx={{ fontSize: "100%", color: `${card.color}`, fontWeight: "bold", marginBottom: "3px", marginLeft: "auto", marginRight: "10px" }}>
              {card.movement}
            </Typography>
            <Typography sx={{ fontSize: "120%", fontWeight: "bold", marginBottom: "3px", marginLeft: "auto", marginRight: "10px" }}>
              {card.number}
            </Typography>
            <Typography sx={{ fontSize: "60%", fontWeight: "bold", marginLeft: "auto", marginRight: "10px" }}>
              {card.viewMap}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default DashboardCard;
