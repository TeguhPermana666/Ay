import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RoomDetailsPage from './pages/RoomDetailsPage';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box p={0} m={0} >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms/:type" element={<RoomDetailsPage />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
