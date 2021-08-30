import { sharedBaseStyle, light, dark } from './sharedStyleLinkButton';

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
    ...dark,
  },
  defaultProps: {
    size: 'md',
    variant: 'light',
  },
};

export default link;
