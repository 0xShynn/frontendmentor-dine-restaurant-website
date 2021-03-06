import { Box, Flex, Heading } from '@chakra-ui/react';

import { maxScreenWidth } from '../constants/style';

import CustomLink from './CustomLink';

const ReservationBanner = () => {
  return (
    <Box
      bgImage={{
        base: '/images/ready-bg-mobile@2x.jpg',
        md: '/images/ready-bg-tablet@2x.jpg',
        xl: '/images/ready-bg-desktop@2x.jpg',
      }}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      role="region"
      aria-label="Reservation banner"
    >
      <Flex
        direction={{ base: 'column', xl: 'row' }}
        align="center"
        justify={{ base: 'center', xl: 'space-between' }}
        textAlign="center"
        py={{ base: 20, xl: 24 }}
        maxW={maxScreenWidth}
        mx="auto"
      >
        <Heading as="h2" variant="h2" color="white" mb={{ base: 6, xl: 0 }}>
          Ready to make a reservation?
        </Heading>
        <CustomLink href="/booking" variant="dark">
          Book a table
        </CustomLink>
      </Flex>
    </Box>
  );
};

export default ReservationBanner;
