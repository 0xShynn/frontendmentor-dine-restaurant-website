import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import PatternDivider from '../assets/patterns/PatternDivider';

import Hero from '../components/Hero';
import Main from '../components/Main';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Dine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex role="main" bg="red.200" direction="column" align="center">
        <Hero />
        <Main />
        <PatternDivider />
        <Box textAlign="center" px="6">
          <Heading as="h2" variant="h2">
            Enjoyable place for all the family
          </Heading>
          <Text textStyle="body2">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
