import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import enjoyablePlaceDesktop from '../assets/homepage/enjoyable-place-desktop@2x.jpg';
import enjoyablePlaceMobile from '../assets/homepage/enjoyable-place-mobile@2x.jpg';
import enjoyablePlacePlaceholder from '../assets/homepage/enjoyable-place-placeholder.png';
import enjoyablePlaceTablet from '../assets/homepage/enjoyable-place-tablet@2x.jpg';

const Main = () => {
  return (
    <Box maxW="1140px" bg="blue.100" pos="relative" mx="auto" w="full">
      <Box pos="absolute" w="full" top="-75px" px={{ base: '6', md: '100px' }}>
        <Box shadow="2xl" display={{ md: 'none' }}>
          <Image
            src={enjoyablePlaceMobile}
            alt="Enjoyable place image mobile"
            layout="responsive"
          />
        </Box>

        <Box display={{ base: 'none', md: 'block', xl: 'none' }}>
          <Image
            src={enjoyablePlaceTablet}
            alt="Enjoyable place image tablet"
            layout="responsive"
          />
        </Box>
        <Box display={{ base: 'none', xl: 'block' }}>
          <Image
            src={enjoyablePlaceDesktop}
            alt="Enjoyable place image desktop"
            layout="responsive"
            className="hello"
          />
        </Box>
      </Box>
      <Box bg="green.100">
        <Image
          src={enjoyablePlacePlaceholder}
          role="presentation"
          alt="enjoy"
          layout="responsive"
        />
      </Box>
    </Box>
  );
};

export default Main;
