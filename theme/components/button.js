import { SharedBaseStyle, light, dark } from './SharedStyleLinkButton';

const Button = {
  baseStyle: {
    ...SharedBaseStyle,
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
    ...dark,
  },
  defaultProps: {
    size: 'md',
    variant: 'light',
  },
};

export default Button;
