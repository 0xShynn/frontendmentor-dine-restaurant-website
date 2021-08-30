const heading = {
  // style object for base or default style
  baseStyle: {
    color: 'primary.ebonyclay',
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    // H1, Spartan Light, 64px, 72px Line, -0,8 Character
    h1: {
      // you can also use responsive styles
      fontSize: { base: '32px', md: '48px', xl: '64px' },
      fontWeight: 'light',
      lineHeight: { base: '40px', md: '64px', xl: '72px' },
      letterSpacing: '-0.8px',
    },
    // H2, Spartan Bold, 40px, 56px Line, -0,5 Character
    h2: {
      fontSize: { base: '32px', md: '40px', xl: '40px' },
      fontWeight: 'bold',
      lineHeight: { base: '40px', md: '56px', xl: '56px' },
      letterSpacing: '-0.5px',
      mb: '20px',
    },
    // H3 (L), Spartan Bold, 18px, 28px Line -0,22 Character
    h3l: {
      fontSize: '18px',
      fontWeight: 'bold',
      lineHeight: '28px',
      letterSpacing: '-0.22px',
    },
    // H3 (S), Spartan SemiBold, 14px, 28px Line, +2 Character
    h3s: {
      fontSize: '14px',
      fontWeight: 'semibold',
      lineHeight: '28px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: '',
    variant: '',
  },
};

export default heading;
