// MapComponent.js
import React from 'react';
import { Box, Image, Link, Text, VStack, HStack, Icon, Heading } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

const MapComponent = () => {
  return (
    <Box w="100%" display="flex" justifyContent="center" alignItems="center" flexDirection="row">
      <Link href="https://maps.app.goo.gl/bWktcGBVHL2b74ZF9" isExternal>
        <Image 
            src="/assets/halaman/Ascarya_Map.PNG" 
            alt="Peta Lokasi" 
            maxH="400px" 
            maxW="100%" 
            borderRadius="md" 
            fit={"contain"} 
            boxSize= {{ base: '300px', md: '400px', lg: '500px' }}
        />
      </Link>
      <VStack spacing={4} ml={6}>
        <HStack>
            <Heading size="lg" textAlign="center">Ascarya Homestay</Heading>
        </HStack>
        <HStack>
            <Text textAlign="center" fontSize={"md"}>
            Room Staycation, 
            Rent a Bicycle - Souvenir, 
            Stationary - Garder
            </Text>
        </HStack>
        <HStack>
            <Icon as={FaMapMarkerAlt} color="teal.500" />
            <Link href="https://maps.app.goo.gl/bWktcGBVHL2b74ZF9" isExternal>
                <Text fontSize="lg">Jl.Danau Tamblingan No. 60 A Sindu Sanur Denpasar - Bali (80228)</Text>
            </Link>
        </HStack>
        <HStack>
            <Text textAlign="center" fontSize={"2xl"} fontWeight={"bold"} color="teal.500">
                Contact Us
            </Text>
        </HStack>
        <HStack>
            <Icon as={FaWhatsapp} color="teal.500" fontSize={"2xl"} />
            <Text  fontSize="md">087861861232</Text>
        </HStack>
        <HStack>
            <Icon as={FaInstagram} color="teal.500" fontSize={"2xl"} />
            <Text fontSize="md">
                <Link href="https://instagram.com/ascarya_homestay" isExternal>@ascarya_homestay</Link>
            </Text>
        </HStack>
        <HStack>
            <Icon as={FaEnvelope} color="teal.500" fontSize={"2xl"}/>
            <Text fontSize="md">
                <Link href="mailto:dek_ays@yahoo.com">dek_ays@yahoo.com</Link>
            </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default MapComponent;
