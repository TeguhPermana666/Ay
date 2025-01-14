import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { getRoomDetails } from '../utils/local-data';
import Header from '../components/Header';
import RoomDetails from '../components/RoomDetails';

const RoomDetailsPage = () => {
  const { type } = useParams();
  const room = getRoomDetails(type);

  if (!room) {
    return (
      <Container maxW="container.xl" py={6} textAlign="center">
        <Header />
        <Text fontSize="lg" fontWeight="bold" mt={10}>
          Room not found. Please try again!
        </Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={6}>
      <Header />
      <Box
        mt={10}
        p={6}
        borderWidth="1px"
        borderRadius="lg"
        bg="white"
        boxShadow="xl"
      >
        <Heading size="lg" mb={4} textAlign="center">
          Room Details
        </Heading>
        <RoomDetails room={room} />
      </Box>
    </Container>
  );
};

export default RoomDetailsPage;
