import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import enjoyablePlaceMobile from '../assets/homepage/enjoyable-place-mobile@2x.jpg';

const Main = () => {
  return (
    <Box
      maxW="1140px"
      bg="blue.100"
      pos="relative"
      mx="auto"
      w="full"
      h="325px"
    >
      <Box
        pos="absolute"
        w="100%"
        top="-75px"
        px={{ base: '6', md: '100px' }}
        zIndex="1"
      >
        <Box shadow="2xl">
          <Image
            src={enjoyablePlaceMobile}
            alt="Enjoyable place image mobile"
            layout="responsive"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
