import { sharedBaseStyle, light, black, dark } from './sharedStyleLinkButton';

const link = {
  baseStyle: {
    ...sharedBaseStyle,
    _hover: {
      textDecoration: 'none',
    },
  },
  sizes: {
    sm: {},
    md: {
      py: '20px',
      px: '50px',
      fontSize: '14px',
    },
    lg: {},
  },
  variants: {
    ...light,
    ...black,
    ...dark,
    basic: {
      borderWidth: 0,
      textTransform: 'normal',
      letterSpacing: 0,
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'light',
  },
};

export default link;
