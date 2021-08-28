const Button = {
  baseStyle: {
    rounded: 'none',
    borderWidth: '1px',
    textTransform: 'uppercase',
    fontWeight: 'semibold',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  sizes: {
    sm: {},
    md: {
      pt: '32px',
      pb: '30px',
      pl: '40px',
      pr: '38px',
      fontSize: '16px',
    },
    lg: {},
  },
  variants: {
    light: {
      borderColor: 'primary.codgray',
      color: 'primary.codgray',
      _hover: {
        bg: 'black',
        color: 'white',
      },
      _disabled: {
        _hover: {
          color: 'primary.codgray',
        },
      },
    },
    dark: {
      borderColor: 'white',
      color: 'white',
      _hover: {
        bg: 'white',
        color: 'primary.codgray',
      },
      _disabled: {
        color: 'white',
        _hover: {
          color: 'white',
        },
      },
    },
    primary: {
      bg: 'red',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'light',
  },
};

export default Button;
