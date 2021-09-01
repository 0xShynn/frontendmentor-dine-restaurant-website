import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const CustomButton = ({ url = '', title, label, variant, isDisabled }) => {
  return (
    <NextLink href={isDisabled ? '' : url} title={title}>
      <Button
        cursor="pointer"
        isDisabled={isDisabled}
        role="group"
        variant={variant}
      >
        {label}
      </Button>
    </NextLink>
  );
};

CustomButton.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['light', 'dark', 'black']).isRequired,
  isDisabled: PropTypes.bool,
};

export default CustomButton;
