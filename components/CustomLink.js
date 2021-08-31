import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const CustomLink = ({ href, variant }) => {
  return (
    <NextLink href={href} passHref>
      <Link variant={variant} display="inline-flex" w="fit-content">
        Book a table
      </Link>
    </NextLink>
  );
};

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['light', 'dark']).isRequired,
};

export default CustomLink;
