import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';

const CustomButton = ({ url, title, label, variant, isDisabled }) => {
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

export default CustomButton;
