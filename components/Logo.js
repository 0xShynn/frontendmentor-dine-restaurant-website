import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';

import DineLogo from '../assets/brand/DineLogo';

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <Box
        w={{ base: '83px', md: '103px' }}
        mb={{ base: 6, lg: 24, xl: '150px' }}
        mx={{ base: 'auto', md: 0 }}
        cursor="pointer"
      >
        <DineLogo />
      </Box>
    </NextLink>
  );
};

export default Logo;
