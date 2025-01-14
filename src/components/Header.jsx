import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      position="relative" // Pastikan posisi relatif
      m={0} // Hilangkan margin
      p={0} // Hilangkan padding
      bgImage="url('/assets/halaman/Yard2.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat" // Pastikan gambar tidak berulang
      width="100vw" // Lebar penuh layar
      height="100vh" // Tinggi penuh layar
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden" // Pastikan elemen tidak bocor keluar
    >
      <VStack
        spacing={4}
        textAlign="center"
        bg="rgba(0, 0, 0, 0.5)" // Latar belakang semi-transparan
        p={6}
        borderRadius="md"
        maxW="100%" // Lebar maksimal untuk teks
      >
        <Heading size="2xl" color="white">Ascarya Homestay</Heading>
        <Text fontSize="lg" color="white">
          Room Staycation
          <br />
          Rent a Bicycle - Souvenir
          <br />
          Stationary - Garder
        </Text>
        <Text fontSize="lg" color="white">
          Owner: I Kdek Artayasa, ST
        </Text>
      </VStack>
    </Box>
  );
};

export default Header;
