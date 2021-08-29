import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import placeDesktop from '../assets/homepage/enjoyable-place-desktop@2x.jpg';
import placeMobile from '../assets/homepage/enjoyable-place-mobile@2x.jpg';
import placeTablet from '../assets/homepage/enjoyable-place-tablet@2x.jpg';

import PatternDivider from './patterns/PatternDivider';

const Main = () => {
  const placeMobileSize = {
    width: 327,
    height: 400,
    offsetY: 75,
  };
  const placeTabletSize = {
    width: 573,
    height: 360,
    offsetY: 100,
  };
  const placeDesktopSize = {
    width: 540,
    height: 520,
    offsetY: 70,
  };

  return (
    <Box maxW="1140px" pos="relative" mx="auto" w="full">
      <Flex px={{ base: '6', md: '100px' }} justify="center">
        <Box display={{ sm: 'none' }} bg="blue" w="full" mt="6">
          <Image
            src={placeMobile}
            alt="Enjoyable place image mobile"
            layout="responsive"
          />
        </Box>
        <Box
          display={{ base: 'none', sm: 'block', md: 'none' }}
          shadow="2xl"
          pos="absolute"
          width={placeMobileSize.width}
          height={placeMobileSize.height}
          top={-`${placeMobileSize.offsetY}`}
        >
          <Image src={placeMobile} alt="Enjoyable place image mobile" />
        </Box>

        <Box
          display={{ base: 'none', md: 'block', lg: 'none' }}
          shadow="2xl"
          pos="absolute"
          width={placeTabletSize.width}
          height={placeTabletSize.height}
          top={-`${placeTabletSize.offsetY}`}
        >
          <Image src={placeTablet} alt="Enjoyable place image mobile" />
        </Box>
      </Flex>

      <Box
        w="full"
        height={{
          sm: placeMobileSize.height - placeMobileSize.offsetY,
          md: placeTabletSize.height - placeTabletSize.offsetY,
          xl: placeDesktopSize.height - placeDesktopSize.offsetY,
        }}
        bg="red.100"
      />

      <PatternDivider />

      <Box textAlign="center" px="6">
        <Heading as="h2" variant="h2">
          Enjoyable place for all the family
        </Heading>
        <Text textStyle="body2">
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </Text>
      </Box>
    </Box>
  );
};

export default Main;
