import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const CustomLink = ({ href, variant }) => {
  return (
    <NextLink href={href} passHref>
      <Link variant={variant} display="inline-flex" w="fit-content">
        Book a table
      </Link>
    </NextLink>
  );
};

export default CustomLink;
