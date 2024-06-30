
// import React from 'react';
// import { GoogleMap, LoadScript,useJsApiLoader, MarkerF } from '@react-google-maps/api';
// import { Box, Typography } from '@mui/material';
// import env from "../../config"

// const containerStyle = {
//   width: '97%',
//   height: '80%',
//   borderRadius: '15px',
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

// // Adding my static marker location points
// const markerPoints = [
//   { lat: -3.745, lng: -38.523 },
//   { lat: -3.745, lng: -38.5231 },
//   { lat: -3.7452, lng: -38.524 },
//   { lat: -3.745, lng: -38.510 },
//   { lat: -3.743, lng: -38.520 },
//   { lat: -3.740, lng: -38.510 }
// ];

// const svgMarker = {
//   // path:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 18s-5-5.88-5-11c0-2.76 2.24-5 5-5s5 2.24 5 5c0 5.12-5 11-5 11zm-1-10h2v2h-2zm0 4h2v2h-2z",
//  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
// fillColor: "#F00000",
//  fillOpacity: 1,
//  strokeWeight: 1,
//  scale:2
// };

// const GoogleMapComponent = () => {

//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: env.GOOGLE_MAPS_API_KEY
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);


//   return (
//     <Box sx={{ borderRadius: "20px", width: "100%", height: "100%" }}>
//       <Typography sx={{ fontSize: "22px", fontWeight: "bold", marginLeft: 0 }}>Track on map</Typography>
     
//      { isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//       options={{
//         streetViewControl: false,
//         mapTypeControl: false
//       }}
//     >
//       {/* Adding svg my custom marker */}
//       {
//         markerPoints.map((point, i) => (
//           <MarkerF 
//             key={i} 
//             position={point} 
//             icon={svgMarker}
//           />
//         ))
//       }
//     </GoogleMap>
//   ) : <><p>Loading......</p></>}

//     </Box>);  
// };

// export default React.memo(GoogleMapComponent);















// import React, { useState } from 'react';
// import { GoogleMap, LoadScript, useJsApiLoader, MarkerF, Autocomplete } from '@react-google-maps/api';
// import { Box, Typography } from '@mui/material';
// import env from "../../config";

// const containerStyle = {
//   width: '97%',
//   height: '80%',
//   borderRadius: '15px',
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

// // Adding my static marker location points
// const markerPoints = [
//   { lat: -3.745, lng: -38.523 },
//   { lat: -3.745, lng: -38.5231 },
//   { lat: -3.7452, lng: -38.524 },
//   { lat: -3.745, lng: -38.510 },
//   { lat: -3.743, lng: -38.520 },
//   { lat: -3.740, lng: -38.510 }
// ];

// const svgMarker = {
//   path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
//   fillColor: "#F00000",
//   fillOpacity: 1,
//   strokeWeight: 1,
//   scale: 2
// };

// const GoogleMapComponent = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: env.GOOGLE_MAPS_API_KEY
//   });

//   const [map, setMap] = useState(null);
//   const [autocomplete, setAutocomplete] = useState(null); // State to store autocomplete object

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   const onUnmount = () => {
//     setMap(null);
//   };

//   const handlePlaceSelect = () => {
//     if (autocomplete !== null) {
//       const place = autocomplete.getPlace();
//       console.log('Selected place:', place);
//       // You can perform actions with the selected place here
//     }
//   };

//   return (
//     <Box sx={{ borderRadius: "20px", width: "100%", height: "100%" }}>
//       <Typography sx={{ fontSize: "22px", fontWeight: "bold", marginLeft: 0 }}>Track on map</Typography>
//       <LoadScript
//         googleMapsApiKey={env.GOOGLE_MAPS_API_KEY}
//         libraries={["places"]}
//       >
//         <Autocomplete onLoad={(auto) => setAutocomplete(auto)} onPlaceChanged={handlePlaceSelect}>
//           <input
//             type="text"
//             placeholder="Search the location"
//             style={{
//               boxSizing: 'border-box',
//               border: '2px solid transparent',
//               width: '250px',
//               height: '40px',
//               padding: '0 12px',
//               borderRadius: '15px',
//               boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
//               fontSize: '14px',
//               // outline: 'none',
//               // textOverflow: 'ellipses',
//               position: 'absolute',
//               // position: 'relative',
//               left: '85%',
//               marginTop:10
// ,              marginLeft: '-150px',
//               zIndex: '1',
//               backgroundColor:"red"
//             }}
//           />
//         </Autocomplete>
//         {isLoaded ? (
//           <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={10}
//             onLoad={onLoad}
//             onUnmount={onUnmount}
//             options={{
//               streetViewControl: false,
//               mapTypeControl: false
//             }}
//           >
//             {/* Adding svg my custom marker */}
//             {markerPoints.map((point, i) => (
//               <MarkerF
//                 key={i}
//                 position={point}
//                 icon={svgMarker}
//               />
//             ))}
//           </GoogleMap>
//         ) : (
//           <p>Loading......</p>
//         )}
//       </LoadScript>
//     </Box>
//   );
// };

// export default React.memo(GoogleMapComponent);







import React, { useState } from 'react';
import { GoogleMap, LoadScript, useJsApiLoader, MarkerF, Autocomplete } from '@react-google-maps/api';
import { Box, Typography } from '@mui/material';
import env from "../../config";

const containerStyle = {
  width: '100%',
  height: '80%',
  position: 'relative',
  borderRadius: '15px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

// Adding my static marker location points
const markerPoints = [
  { lat: -3.745, lng: -38.523 },
  { lat: -3.745, lng: -38.5231 },
  { lat: -3.7452, lng: -38.524 },
  { lat: -3.745, lng: -38.510 },
  { lat: -3.743, lng: -38.520 },
  { lat: -3.740, lng: -38.510 }
];

const svgMarker = {
  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  fillColor: "#F00000",
  fillOpacity: 1,
  strokeWeight: 1,
  scale: 2
};

const GoogleMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null); // State to store autocomplete object

  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  const handlePlaceSelect = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      console.log('Selected place:', place);
      // You can perform actions with the selected place here
    }
  };

  return (
    <Box sx={{ borderRadius: "20px", width: "100%", height: "100%", position: "relative" }}>
      <Typography sx={{ fontSize: "22px", fontWeight: "bold", marginLeft: 0 }}>Track on map</Typography>
      <LoadScript
        googleMapsApiKey={ process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={["places"]}
      >
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
              streetViewControl: false,
              mapTypeControl: false
            }}
          >
            {/* Adding svg my custom marker */}
            {markerPoints.map((point, i) => (
              <MarkerF
                key={i}
                position={point}
                icon={svgMarker}
              />
            ))}
            {/* Overlaying Autocomplete search box */}
            <Box
              sx={{
                position: 'absolute',
                top: '20px',
                left: '85%',
                zIndex: 1000,
                maxWidth: '300px',
              }}
            >
              <Autocomplete onLoad={(auto) => setAutocomplete(auto)} onPlaceChanged={handlePlaceSelect}>
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    width: '100%',
                    height: '40px',
                    padding: '15px',
                    borderRadius: '15px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    border: 'none',
                    // outline: 'none',
                    // marginLeft:"auto"
                  }}
                />
              </Autocomplete>
            </Box>
          </GoogleMap>
        )}
      </LoadScript>
    </Box>
  );
};

export default React.memo(GoogleMapComponent);
