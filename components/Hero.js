import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import Link from 'next/link';

import DineLogo from '../assets/brand/DineLogo';
import dishImageDesktop from '../assets/homepage/hero-bg-desktop@2x.jpg';
import dishImageMobile from '../assets/homepage/hero-bg-mobile@2x.jpg';
import dishImageTablet from '../assets/homepage/hero-bg-tablet@2x.jpg';

import CustomLink from './CustomLink';

const Hero = () => {
  return (
    <Box bg="primary.codgray" w="full" pos="relative">
      {/* Hero bg image lg */}
      <Box
        display={{ base: 'none', lg: 'inline-flex' }}
        w={{ lg: '520px', xl: '550px' }}
        h="full"
        pos="absolute"
        bottom="0"
        right="0"
        zIndex="base"
      >
        <NextImage
          src={dishImageDesktop}
          alt="Dine hero desktop image"
          objectFit="cover"
          objectPosition="bottom"
        />
      </Box>

      <Flex
        direction={{ base: 'column', lg: 'row' }}
        mx="auto"
        justify="space-between"
        boxSizing="content-box"
        maxW={{ lg: '960px', xl: '1110px' }}
      >
        {/* Hero bg image mobile */}
        <Box display={{ base: 'inline-flex', md: 'none' }}>
          <NextImage src={dishImageMobile} alt="Dine hero mobile image" />
        </Box>

        {/* Hero bg image tablet */}
        <Box display={{ base: 'none', md: 'inline-flex', lg: 'none' }}>
          <NextImage src={dishImageTablet} alt="Dine hero tablet image" />
        </Box>

        {/* Hero content */}
        <Flex
          direction="column"
          pt={{ base: 10, sm: 12, md: 16, lg: 20, xl: '65px' }}
          // padding for the main images
          pb={{
            base: '60px',
            sm: '150px',
            md: '220px',
            lg: '220px',
            xl: '200px',
          }}
          pl={{ base: 6, lg: 20, xl: 0 }}
          pr={{ base: 6, lg: '0', xl: '0' }}
          mx={{ base: 'auto', lg: 0 }}
          align={{ base: 'center', lg: 'flex-start' }}
          textAlign={{ base: 'center', lg: 'left' }}
          zIndex="docked"
        >
          <Link href="/" passHref>
            <Box
              w={{ base: '83px', md: '103px' }}
              mb={{ base: 6, lg: 24, xl: '150px' }}
              mx={{ base: 'auto', md: 0 }}
              cursor="pointer"
            >
              <DineLogo />
            </Box>
          </Link>

          <Heading
            as="h1"
            variant="h1"
            color="white"
            mb="6"
            maxW={{ md: '400px', lg: '500px', xl: '600px' }}
          >
            Exquisite dining since 1989
          </Heading>

          <Text
            color="white"
            textStyle={{ base: 'body2', xl: 'body1' }}
            mb={{ base: 6, lg: 8, xl: 10 }}
            maxW={{ base: '400px', xl: '500px' }}
          >
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </Text>

          <CustomLink variant="dark" href="/booking">
            Book a table
          </CustomLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
