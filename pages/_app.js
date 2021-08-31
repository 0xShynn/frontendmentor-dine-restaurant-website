/* eslint-disable react/prop-types */
import { ChakraProvider } from '@chakra-ui/react';

import '@fontsource/spartan/300.css';
import '@fontsource/spartan/400.css';
import '@fontsource/spartan/600.css';
import '@fontsource/spartan/700.css';
import overrides from '../theme/index';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={overrides}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
