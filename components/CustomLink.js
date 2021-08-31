import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const CustomLink = (props) => {
  const { href, variant } = props;
  return (
    <NextLink href={href} passHref>
      <Link variant={variant} display="inline-flex" w="fit-content" {...props}>
        {props.children}
      </Link>
    </NextLink>
  );
};

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['light', 'dark', 'black']).isRequired,
  children: PropTypes.string,
};

export default CustomLink;
