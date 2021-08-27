// theme/index.js
import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import Heading from './components/heading';
import Text from './components/text';
import fonts from './fonts';
import styles from './styles';
import textStyles from './textStyles';

const overrides = {
  styles,
  colors,
  fonts,
  textStyles,
  components: {
    Heading,
    Text,
  },
};

export default extendTheme(overrides);
