import { Box, Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { maxScreenWidth } from '../constants/style';
import AuthorBanner from './AuthorBanner';

import Logo from './Logo';

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
        <Text color="white">{children}</Text>
      </Box>
    );
  };

  TextBlock.propTypes = {
    children: PropTypes.array,
  };

  return (
    <>
      <Flex role="contentinfo" bg="primary.codgray">
        <Flex
          color="white"
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'flex-start' }}
          justify="space-between"
          px={{ base: 6, md: 16, xl: 0 }}
          py={{ base: 16, xl: 20 }}
          mx="auto"
          maxW={maxScreenWidth}
          w="full"
        >
          <Box mb={{ base: 6, md: 0 }}>
            <Logo />
          </Box>

          <Flex direction={{ base: 'column', lg: 'row' }}>
            <TextBlock>
              Marthwaite, Sedbergh
              <br />
              Cumbria
              <br />
              +00 44 123 4567
              <br />
            </TextBlock>

            <TextBlock ml={{ lg: 24, xl: 32 }}>
              OPEN TIMES <br />
              MON - FRI: 09:00 AM - 10:00 PM
              <br />
              SAT - SUN: 09:00 AM - 11:30PM
              <br />
            </TextBlock>
          </Flex>
        </Flex>
      </Flex>
      <AuthorBanner />
    </>
  );
};

export default Footer;
