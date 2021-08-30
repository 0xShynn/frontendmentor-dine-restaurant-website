import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

const HighlightsMenu = ({ title, text, image }) => {
  return (
    <Box textAlign="center" maxW="327px">
      <Box mb="6">
        <Image src={image} alt={title} width="327px" height="245px" />
      </Box>
      <Heading as="h3" variant="h3" color="white">
        {title}
      </Heading>
      <Text textStyle="body2" color="white">
        {text}
      </Text>
    </Box>
  );
};

export default HighlightsMenu;
