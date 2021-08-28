import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react';

import DineLogo from '../assets/brand/DineLogo';

import CustomLink from './CustomLink';

const Hero = () => {
  return (
    <Box bg="primary.codgray" w="full" maxH="820px">
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        mx="auto"
        justify="space-between"
      >
        {/* Hero mobile image */}
        <Box display={{ lg: 'none' }}>
          <Img
            sizes="(max-width: 1536px) 100vw, 1536px"
            srcSet="
              /images/hero-bg-mobile,w_280.jpg 280w,
              /images/hero-bg-mobile,w_656.jpg 656w,
              /images/hero-bg-mobile,w_933.jpg 933w,
              /images/hero-bg-mobile,w_1184.jpg 1184w,
              /images/hero-bg-mobile,w_1536.jpg 1536w"
            src="/images/hero-bg-mobile,w_1536.jpg"
            alt="Dine hero image"
            zIndex="0"
          />
        </Box>

        {/* Hero content */}
        <Flex
          direction="column"
          bg="gray.700"
          py={{ base: 6, md: 10, lg: 16, xl: '65px' }}
          mx={{ base: 'auto', lg: 0 }}
          maxW={{ base: null, md: '600px', xl: '700px' }}
          align={{ base: 'center', lg: 'flex-start' }}
          textAlign={{ base: 'center', lg: 'left' }}
          px={{ base: 6 }}
          zIndex="1"
        >
          <Box
            w={{ base: '83px', sm: '83px', md: '103px' }}
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

        {/* Desktop image */}
        <Flex
          display={{ base: 'none', lg: 'block' }}
          w={{ md: '300px', lg: '400px', xl: '565px' }}
        >
          <Img
            sizes="(max-width: 1140px) 100vw, 1140px"
            srcSet="
              /images/hero-bg-desktop,w_768.jpg 768w,
              /images/hero-bg-desktop,w_859.jpg 859w,
              /images/hero-bg-desktop,w_937.jpg 937w,
              /images/hero-bg-desktop,w_1050.jpg 1050w,
              /images/hero-bg-desktop,w_1140.jpg 1140w"
            src="/images/hero-bg-desktop,w_1140.jpg"
            alt="Dine hero image"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
