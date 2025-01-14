import React from 'react';
import { Box, Divider } from '@chakra-ui/react';
import { getRooms } from '../utils/local-data';
import RoomList from '../components/RoomList';
import Header from '../components/Header';
import MapComponent from '../components/Map';

const HomePage = () => {
  const rooms = getRooms();

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box flex="1" p={0}>
        <Header />
        <Box p={6} bg="white" mb={6}>
          <RoomList rooms={rooms} />
        </Box>
      </Box>

      <Divider my={6} />

      <Box width="100%" flex="1" p={0}>
        <Box p={6} bg="white" mb={6}>
          <MapComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
