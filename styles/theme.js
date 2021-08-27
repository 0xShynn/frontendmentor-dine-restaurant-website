import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  breakpoints: {},
  styles: {
    global: {
      // styles for the `body`
      body: {
        fontSize: '18px',
        fontFamily: 'body',
        bg: 'white',
      },
      a: {
        _hover: {},
      },
    },
  },
  fonts: {
    heading: 'Spartan',
    body: 'Spartan',
  },
  colors: {
    primary: {
      beaver: 'hsl(27°, 22%, 51%)',
      codgray: 'hsl(0°, 0%, 7%)',
    },
    secondary: {
      mirage: 'hsl(234°, 30%, 13%)',
      ebonyclay: 'hsl(218°, 21%, 18%)',
      shuttlegray: 'hsl(217°, 14%, 42%)',
    },
  },
  textStyles: {
    // H1, Spartan Light, 64px, 72px Line, -0,8 Character
    h1: {
      // you can also use responsive styles
      fontSize: '64px',
      fontWeight: 'light',
      lineHeight: '72px',
      letterSpacing: '-0.8px',
    },
    // H2, Spartan Bold, 40px, 56px Line, -0,5 Character
    h2: {
      fontSize: '40px',
      fontWeight: 'bold',
      lineHeight: '56px',
      letterSpacing: '-0.5px',
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
    },
    // Body 1, Spartan Regular, 18px, 30px Line, -0,22 Character
    body1: {
      fontSize: '18px',
      fontWeight: 'regular',
      lineHeight: '30px',
      letterSpacing: '-0.22px',
    },
    // Body 2, Spartan Regular, 15px, 28px Line, -0,19 Character
    body2: {
      fontSize: '15px',
      fontWeight: 'regular',
      lineHeight: '28px',
      letterSpacing: '-0.19px',
    },
  },
  components: {
    Container: {
      baseStyle: {},
      variants: {},
    },
    Button: {
      baseStyle: {},
      sizes: {
        sm: {},
        md: {},
        lg: {},
      },
      variants: {
        dark: {
          _hover: {},
        },
        light: {
          _hover: {},
        },
      },
    },
    Heading: {
      baseStyle: {},
    },
    Link: {
      variants: {
        primary: {},
      },
    },
    Text: {
      baseStyle: {},
    },
  },
});

export default customTheme;
