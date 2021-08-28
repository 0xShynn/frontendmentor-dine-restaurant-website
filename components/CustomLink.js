import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const CustomLink = ({ href, variant }) => {
  return (
    <NextLink href={href} passHref>
      <Link variant={variant}>Book a table</Link>
    </NextLink>
  );
};

export default CustomLink;
