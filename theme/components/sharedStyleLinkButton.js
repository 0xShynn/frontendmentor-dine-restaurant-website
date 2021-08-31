export const sharedBaseStyle = {
  rounded: 'none',
  borderWidth: '1px',
  textTransform: 'uppercase',
  fontWeight: 'semibold',
  letterSpacing: '2px',
};

export const light = {
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
};

export const black = {
  black: {
    bg: 'primary.codgray',
    color: 'white',
    _hover: {
      bg: 'white',
      color: 'primary.codgray',
      borderColor: 'primary.codgray',
    },
  },
};

export const dark = {
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
};
