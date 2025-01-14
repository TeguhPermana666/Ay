import React from "react";
import { Box, Button, Heading, Text, Image, Flex, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const RoomList = ({ rooms }) => {
  const handleWhatsAppClick = (room) => {
    const message = `Halo, saya ingin memesan kamar: ${room.type}. Berikut detailnya:\n\n` +
                    `Harga per hari: ${room.price.per_day.toLocaleString()} IDR\n` +
                    `Harga per bulan: ${room.price.per_month.toLocaleString()} IDR\n` +
                    `Harga per tahun: ${room.price.per_year.toLocaleString()} IDR\n` +
                    `Fasilitas: ${room.facilities.join(', ')}\n\n` +
                    `Mohon informasi lebih lanjut.`;
    const url = `https://api.whatsapp.com/send?phone=6287861861232&text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <Box 
      display="grid" 
      gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} 
      gap={4} // Kurangi jarak antar kolom
      justifyItems="center"
      p={4}
    >
      {rooms.slice(0, 4).map((room) => (
        <VStack
          key={room.type}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={4}
          bg="white"
          _hover={{ boxShadow: "lg" }}
          spacing={4}
          maxW="350px" // Lebar maksimal untuk kartu
          width="100%" // Lebar kartu agar memenuhi grid
          minH="400px" // Tinggi minimum untuk kartu agar proporsional
        >
          <Heading size="md" textAlign="center">
            {room.type}
          </Heading>
          <Image
            src={room.photos[0]}
            alt={`${room.type} photo`}
            w="100%" // Lebar gambar penuh
            h="200px" // Tinggi tetap untuk gambar
            objectFit="cover"
            borderRadius="md"
          />
          <Text fontWeight="bold">Harga per hari:</Text>
          <Text mb={2}>{room.price.per_day.toLocaleString()} IDR</Text>
          
          <Flex mt={6} justifyContent="space-between" direction={{ base: 'column', md: 'row' }} alignItems="center" gap={4}>
            <Button as={Link} to={`/rooms/${room.type}`} colorScheme="teal" variant="solid">
              View Details
            </Button>
            <Button
              onClick={() => handleWhatsAppClick(room)}
              colorScheme="whatsapp"
              leftIcon={<FontAwesomeIcon icon={faWhatsapp} />}
              bg="green.500"
              color="white"
              variant="solid"
            >
              Pesan Sekarang
            </Button>
          </Flex>
        </VStack>
      ))}
    </Box>

  );
};

export default RoomList;
