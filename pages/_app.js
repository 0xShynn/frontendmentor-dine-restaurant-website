import { ChakraProvider } from '@chakra-ui/react';

import customTheme from '../styles/theme';
import '@fontsource/spartan/300.css';
import '@fontsource/spartan/400.css';
import '@fontsource/spartan/600.css';
import '@fontsource/spartan/700.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
