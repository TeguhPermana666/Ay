import React from 'react';
import { Box, Heading, Text, VStack, Image, HStack, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// index.js atau App.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const RoomDetails = ({ room }) => {
  if (!room) return null;

  const handleWhatsAppClick = () => {
    const message = `Halo, saya ingin memesan kamar: ${room.type}. Berikut detailnya:\n\n` +
                    `Harga per hari: ${room.price.per_day.toLocaleString()} IDR\n` +
                    `Harga per bulan: ${room.price.per_month.toLocaleString()} IDR\n` +
                    `Harga per tahun: ${room.price.per_year.toLocaleString()} IDR\n` +
                    `Fasilitas: ${room.facilities.join(', ')}\n\n` +
                    `Mohon informasi lebih lanjut.`;
    const url = `https://api.whatsapp.com/send?phone=6287861861232&text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  const settings= {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  }

  return (
    <Box p={6} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="gray.50" position={"relative"}>
      <Heading size="lg" mb={4} textAlign="center">
        {room.type}
      </Heading>
      <VStack align="stretch" spacing={6}>
        <Box width={'100%'} >
          <Slider {...settings}>
            {room.photos.map((photo, index) => (
              <Image
                key={index}
                src={photo}
                alt={`${room.type} photo ${index + 1}`}
                boxSize={{ base: '250px', md: '300px', lg: '600px' }}
                objectFit="cover"
                borderRadius="md"
              />
            ))}
          </Slider>
        </Box>
        <Text fontWeight="bold">Fasilitas:</Text>
        <Text mb={2}>{room.facilities.join(', ')}</Text>
        <Text fontWeight="bold">Detail Harga:</Text>
        <Text>Per Hari: {room.price.per_day.toLocaleString()} IDR</Text>
        <Text>Per Bulan: {room.price.per_month.toLocaleString()} IDR</Text>
        <Text>Per Tahun: {room.price.per_year.toLocaleString()} IDR</Text>
      </VStack>

      {/* Tombol di bagian bawah */}
      <Flex mt={6} justifyContent="space-between" direction={{ base: 'column', md: 'row' }} alignItems="center" gap={4}>
        <Button
          onClick={handleWhatsAppClick}
          colorScheme="whatsapp"
          leftIcon={<FontAwesomeIcon icon={faWhatsapp} />}
          zIndex={2}
          mt="4"
          bg="green.500"
          color="white"
        >
          Pesan Sekarang
        </Button>
        <Button as={Link} to="/" colorScheme="gray">
          Kembali ke Home
        </Button>
      </Flex>
    </Box>
  );
};

export default RoomDetails;
