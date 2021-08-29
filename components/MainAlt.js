import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import placeDesktop from '../assets/homepage/enjoyable-place-desktop@2x.jpg';
import placeMobile from '../assets/homepage/enjoyable-place-mobile@2x.jpg';
import placeTablet from '../assets/homepage/enjoyable-place-tablet@2x.jpg';

import PatternDivider from './patterns/PatternDivider';

const MainAlt = () => {
  const mobileOffsetY = 75;
  const tabletOffsetY = 100;
  const desktopOffsetY = 70;

  return (
    <Box maxW="1110px" mx="auto" bg="blue.100" w="full">
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        px={{ base: 6, md: 10, lg: 20, xl: 0 }}
        pb="60px"
      >
        {/* Image */}
        <Flex justify="center">
          {/* mobile version (sm also lg) */}
          <Box
            shadow="2xl"
            pos="relative"
            top={-mobileOffsetY}
            w={placeMobile.width / 2}
            h={placeMobile.height / 2 - mobileOffsetY}
            display={{ base: 'block', md: 'none', lg: 'block', xl: 'none' }}
          >
            <Image src={placeMobile} alt="Enjoyable place image mobile" />
          </Box>

          {/* tablet version (md) */}
          <Box
            shadow="2xl"
            pos="relative"
            top={-tabletOffsetY}
            w={placeTablet.width / 2}
            h={placeTablet.height / 2 - tabletOffsetY}
            display={{ base: 'none', md: 'block', lg: 'none' }}
          >
            <Image src={placeTablet} alt="Enjoyable place image mobile" />
          </Box>

          {/* desktop version (lg) */}
          <Box
            shadow="2xl"
            pos="relative"
            top={-desktopOffsetY}
            w={placeDesktop.width / 2}
            h={placeDesktop.height / 2 - desktopOffsetY}
            display={{ base: 'none', xl: 'block' }}
          >
            <Image src={placeDesktop} alt="Enjoyable place image mobile" />
          </Box>
        </Flex>

        {/* Content */}
        <Flex
          direction="column"
          align={{ base: 'center', lg: 'flex-start' }}
          justify="center"
          textAlign={{ base: 'center', lg: 'left' }}
          pl={{ lg: '60px' }}
          bg="yellow.100"
        >
          <PatternDivider />
          <Box maxW={{ base: '375px', xl: '445px' }} bg="red.100">
            <Heading as="h2" variant="h2" color="primary.codgray">
              Enjoyable place for all the family
            </Heading>
            <Text textStyle="body2" color="primary.codgray">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainAlt;
