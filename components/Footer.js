import { Box, Flex, Text } from '@chakra-ui/react';
import DineLogo from '../assets/brand/DineLogo';

const Footer = () => {
  const TextBlock = ({ children }) => (
    <Box
      textAlign="center"
      textTransform="uppercase"
      mb="6"
      fontSize="14px"
      letterSpacing="widest"
      lineHeight="2"
    >
      <Text>{children}</Text>
    </Box>
  );
  return (
    <Box role="contentinfo" bg="primary.codgray">
      <Flex color="white" align="center" direction="column" px="6" py="16">
        <Box w="103px" h="40px" mb="10">
          <DineLogo />
        </Box>

        <TextBlock>
          Marthwaite, Sedbergh
          <br />
          Cumbria
          <br />
          +00 44 123 4567
          <br />
        </TextBlock>

        <TextBlock>
          <Text>OPEN TIMES </Text>
          <Text>MON - FRI: 09:00 AM - 10:00 PM</Text>
          <Text>SAT - SUN: 09:00 AM - 11:30PM</Text>
        </TextBlock>
      </Flex>
    </Box>
  );
};

export default Footer;
