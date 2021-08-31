import { Box, Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import DineLogo from '../assets/brand/DineLogo';

const Footer = () => {
  const TextBlock = (props) => {
    const { children } = props;

    return (
      <Box
        textAlign={{ base: 'center', md: 'left' }}
        textTransform="uppercase"
        mb="6"
        fontSize="14px"
        letterSpacing="widest"
        lineHeight="2"
        {...props}
      >
        <Text>{children}</Text>
      </Box>
    );
  };

  TextBlock.propTypes = {
    children: PropTypes.array,
  };

  return (
    <Flex role="contentinfo" bg="primary.codgray">
      <Flex
        color="white"
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'flex-start' }}
        justify={{ md: 'space-between', xl: 'flex-start' }}
        px={{ base: 6, md: 16, xl: 0 }}
        py={{ base: 16, xl: 20 }}
        mx="auto"
        maxW="1110px"
        w="full"
      >
        <Box w="103px" h="40px" mb="10" mr={{ md: 32, xl: 48 }}>
          <DineLogo />
        </Box>

        <Flex direction={{ base: 'column', xl: 'row' }}>
          <TextBlock>
            Marthwaite, Sedbergh
            <br />
            Cumbria
            <br />
            +00 44 123 4567
            <br />
          </TextBlock>

          <TextBlock ml={{ xl: 32 }}>
            OPEN TIMES <br />
            MON - FRI: 09:00 AM - 10:00 PM
            <br />
            SAT - SUN: 09:00 AM - 11:30PM
            <br />
          </TextBlock>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
