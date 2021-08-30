import { SharedBaseStyle, light, dark } from './SharedStyleLinkButton';

const Link = {
  baseStyle: {
    ...SharedBaseStyle,
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

export default Link;
