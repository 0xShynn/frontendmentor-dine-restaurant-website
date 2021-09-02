import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';

import EventsContainer from '../components/EventsContainer';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HighlightsContainer from '../components/HighlightsContainer';
import MainContainer from '../components/MainContainer';
import ReservationBanner from '../components/ReservationBanner';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Dine - Exquisite dining since 1989</title>
        <meta
          name="description"
          content="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box role="main">
        <Flex direction="column" align="center">
          <Hero />
          <MainContainer />
          <HighlightsContainer />
        </Flex>

        <EventsContainer />
        <ReservationBanner />
      </Box>
      <Footer />
    </Box>
  );
}
