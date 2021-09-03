import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';

import DineLogo from '../assets/brand/DineLogo';

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <Box
        as="a"
        w={{ base: '83px', md: '103px' }}
        mx={{ base: 'auto', md: 0 }}
        cursor="pointer"
        display="block"
      >
        <DineLogo />
      </Box>
    </NextLink>
  );
};

export default Logo;
