// theme/index.js
import { extendTheme } from '@chakra-ui/react';

import breakpoints from './breakpoints';
import colors from './colors';
import Button from './components/Button';
import Heading from './components/Heading';
import Link from './components/Link';
import Text from './components/Text';
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
    Button,
    Heading,
    Link,
    Text,
  },
};

export default extendTheme(overrides);
