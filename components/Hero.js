import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import DineLogo from '../assets/brand/DineLogo';

import CustomLink from './CustomLink';

const Hero = () => {
  return (
    <Box bg="secondary.dinegray" w="full" h="100vh">
      <Flex
        justify="center"
        align="center"
        direction="column"
        p="6"
        textAlign="center"
      >
        <Box w={{ base: '83px', md: '103px' }} mb="6">
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
    </Box>
  );
};

export default Hero;
