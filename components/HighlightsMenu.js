import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

const HighlightsMenu = ({ title, text, image }) => {
  return (
    <Flex
      maxW={{ sm: '327px', md: '573px' }}
      direction={{ base: 'column', md: 'row' }}
      align="center"
    >
      <Box
        mb={{ base: '8', md: '0' }}
        w={{ sm: '327px', md: '128px' }}
        h={{ sm: '245px', md: '96px' }}
        display="inline-flex"
        bg="red.100"
      >
        <Image src={image} alt={title} />
      </Box>
      <Box
        width="32px"
        h="1px"
        bg="primary.beaver"
        pos="relative"
        top="16px"
        alignSelf="flex-start"
        display={{ base: 'none', md: 'block' }}
      />
      <Box textAlign={{ base: 'center', md: 'left' }} ml={{ md: '50px' }}>
        <Heading as="h3" variant="h3" color="white" mb={{ base: '2', md: '0' }}>
          {title}
        </Heading>
        <Text
          textStyle="body2"
          color="white"
          maxW={{ sm: '300px', md: '383px' }}
        >
          {text}
        </Text>
      </Box>
    </Flex>
  );
};

export default HighlightsMenu;
