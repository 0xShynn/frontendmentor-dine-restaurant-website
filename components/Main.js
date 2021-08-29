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
    height: 720,
    offsetY: 70,
  };

  return (
    <Box maxW="1110px" pos="relative" mx="auto" bg="blue.100">
      <Flex
        px={{ base: '6', md: '100px', lg: '40px', xl: '0' }}
        justify={{ base: 'center', lg: 'flex-start' }}
      >
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
          pos="relative"
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

        <Box
          display={{ base: 'none', lg: 'block' }}
          shadow="2xl"
          pos="absolute"
          width={placeDesktopSize.width}
          height={placeDesktopSize.height}
          top={-`${placeDesktopSize.offsetY}`}
        >
          <Image src={placeDesktop} alt="Enjoyable place image mobile" />
        </Box>
      </Flex>

      {/* Mobile view */}
      <Box display={{ xl: 'none' }}>
        <Box
          w="full"
          height={{
            sm: placeMobileSize.height - placeMobileSize.offsetY,
            md: placeTabletSize.height - placeTabletSize.offsetY,
          }}
          bg="red.100"
        />

        {/* Mobile text container */}
        <Box>
          <PatternDivider />
          <Box textAlign="center" px="6">
            <Heading as="h2" variant="h2">
              Enjoyable place for all the family
            </Heading>
            <Text textStyle="body2">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Desktop view */}
      <Flex
        bg="green.200"
        direction="row"
        display={{ base: 'none', xl: 'flex' }}
        pb="60px"
      >
        <Box
          h={placeDesktopSize.height - placeDesktopSize.offsetY}
          bg="red.300"
          w={placeDesktopSize.width}
        />

        {/* Desktop text container */}
        <Box bg="red.100" w="570px" pl="120px" py="120px">
          <PatternDivider />
          <Box textAlign="left" bg="blue.100">
            <Heading as="h2" variant="h2" w="390px" bg="yellow.100">
              Enjoyable place for all the family
            </Heading>
            <Text textStyle={{ base: 'body2', xl: 'body1' }}>
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Main;
