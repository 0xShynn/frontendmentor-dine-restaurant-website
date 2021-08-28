// theme/index.js
import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import Button from './components/button';
import Heading from './components/heading';
import Link from './components/link';
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
    Button,
    Heading,
    Link,
    Text,
  },
};

export default extendTheme(overrides);
