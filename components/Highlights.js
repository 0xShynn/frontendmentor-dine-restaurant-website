import {
  Box,
  Flex,
  Heading,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';

import beefImage from '../assets/homepage/beef-mobile@2x.jpg';
import chocolateImage from '../assets/homepage/chocolate-mobile@2x.jpg';
import salmonImage from '../assets/homepage/salmon-mobile@2x.jpg';

import HighlightsMenu from './HighlightsMenu';
import PatternDivider from './patterns/PatternDivider';

const Highlights = () => {
  return (
    <Flex
      bg="primary.codgray"
      px="6"
      justify="center"
      direction={{ base: 'column' }}
      py="30px"
      pb="70px"
    >
      <Flex
        textAlign={{ base: 'center', xl: 'left' }}
        maxW="445px"
        mx="auto"
        direction="column"
        align="center"
        mb="60px"
      >
        <PatternDivider />
        <Heading as="h2" variant="h2" color="white" maxW={{ sm: '350px' }}>
          A few highlights from our menu
        </Heading>
        <Text color="white" textStyle="body2">
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </Text>
      </Flex>

      <VStack
        spacing="6"
        divider={<StackDivider borderColor="gray.700" />}
        w="fit-content"
        mx="auto"
      >
        <HighlightsMenu
          title="Seared Salmon Fillet"
          text="Our locally sourced salmon served
with a refreshing buckwheat summer salad."
          image={salmonImage}
        />
        <HighlightsMenu
          title="Rosemary Filet Mignon"
          text="Our prime beef served to your taste with a delicious choice of seasonal sides."
          image={beefImage}
        />
        <HighlightsMenu
          title="Seared Salmon Fillet"
          text="Creamy mousse combined with summer fruits and dark chocolate shavings."
          image={chocolateImage}
        />
      </VStack>
    </Flex>
  );
};

export default Highlights;
