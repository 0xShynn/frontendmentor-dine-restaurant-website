// theme/index.js
import { extendTheme } from '@chakra-ui/react';

import breakpoints from './breakpoints';
import colors from './colors';
import button from './components/button';
import heading from './components/heading';
import link from './components/link';
import text from './components/text';
import fonts from './fonts';
import styles from './styles';
import textStyles from './textStyles';

const overrides = {
  styles,
  colors,
  breakpoints,
  fonts,
  textStyles,
  components: {
    button,
    heading,
    link,
    text,
  },
};

export default extendTheme(overrides);
