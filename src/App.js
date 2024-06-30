import React from 'react'
import { Box } from '@mui/material';
import Layout from './Layout/Layout'
import "./App.css"
import { store } from "./redux/store"
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Provider store={store}>
      <Box sx={{ width: '100%', height: '100vh' }}>
        <Layout />
      </Box>
    </Provider>
  )
}

export default App