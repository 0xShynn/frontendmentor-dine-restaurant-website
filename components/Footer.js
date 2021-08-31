import { Box, Flex, Text } from '@chakra-ui/react';
import DineLogo from '../assets/brand/DineLogo';

const Footer = () => {
  const TextBlock = ({ children }) => (
    <Box
      textAlign={{ base: 'center', md: 'left' }}
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
      <Flex
        color="white"
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'flex-start' }}
        justify={{ md: 'center' }}
        px={{ base: 6, md: 16 }}
        py="16"
      >
        <Box w="103px" h="40px" mb="10" mr={{ md: 32 }}>
          <DineLogo />
        </Box>

        <Box>
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
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
