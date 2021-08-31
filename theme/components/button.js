import { sharedBaseStyle, light, dark, black } from './sharedStyleLinkButton';

const button = {
  baseStyle: {
    ...sharedBaseStyle,
  },
  sizes: {
    sm: {},
    md: {
      py: '30px',
      px: '50px',
      fontSize: '14px',
    },
    lg: {},
  },
  variants: {
    ...light,
    ...black,
    ...dark,
  },
  defaultProps: {
    size: 'md',
    variant: 'light',
  },
};

export default button;
