import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import DineLogo from '../assets/brand/DineLogo';
import dishImageDesktop from '../assets/homepage/hero-bg-desktop@2x.jpg';
import dishImageMobile from '../assets/homepage/hero-bg-mobile@2x.jpg';
import dishImageTablet from '../assets/homepage/hero-bg-tablet@2x.jpg';

import CustomLink from './CustomLink';

const Hero = () => {
  return (
    <Box bg="primary.codgray" w="full">
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        mx="auto"
        justify="space-between"
        boxSizing="content-box"
        ml={{ '2xl': '150px' }}
      >
        {/* Hero bg image mobile */}
        <Box display={{ md: 'none' }}>
          <Image src={dishImageMobile} alt="Dine hero mobile image" />
        </Box>

        {/* Hero bg image tablet */}
        <Box display={{ base: 'none', md: 'block', lg: 'none' }}>
          <Image src={dishImageTablet} alt="Dine hero tablet image" />
        </Box>

        {/* Hero content */}
        <Flex
          direction="column"
          pt={{ base: 10, sm: 12, md: 16, lg: 20, xl: '65px' }}
          // padding for the main images
          pb={{
            base: '130px',
            sm: '150px',
            md: '220px',
            lg: '220px',
            xl: '200px',
          }}
          px={{ base: 6, lg: 20, xl: '160px' }}
          pr={{ lg: '0' }}
          mx={{ base: 'auto', lg: 0 }}
          align={{ base: 'center', lg: 'flex-start' }}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <Box
            w={{ base: '83px', md: '103px' }}
            mb={{ base: 6, lg: 24, xl: '150px' }}
            mx={{ base: 'auto', md: 0 }}
          >
            <DineLogo />
          </Box>

          <Heading as="h1" variant="h1" color="white" mb="6">
            Exquisite dining since 1989
          </Heading>

          <Text color="white" textStyle="body2" mb="6">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </Text>

          <CustomLink variant="dark" href="/">
            Book a table
          </CustomLink>
        </Flex>

        {/* Hero bg image desktop */}
        <Flex justify="flex-end" w="full">
          <Box
            display={{ base: 'none', lg: 'block' }}
            pos="relative"
            w={{ lg: '565px', xl: '605px' }}
          >
            <Image
              src={dishImageDesktop}
              alt="Dine hero tablet image"
              objectFit="contain"
              objectPosition="right"
              layout="fill"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
