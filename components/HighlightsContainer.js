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
import { maxScreenWidth } from '../constants/style';

import HighlightsMenu from './HighlightsMenu';
import PatternDivider from './patterns/PatternDivider';

const HighlightsContainer = () => {
  return (
    <Box
      bg="primary.codgray"
      w="full"
      role="region"
      aria-label="Highlights section"
    >
      <Flex
        justify="center"
        direction={{ base: 'column', xl: 'row' }}
        pt={{ base: '30px', md: '50px', lg: '120px', xl: '180px' }}
        pb={{ base: '70px', md: '90px', lg: '120px' }}
        px={{ base: 6, lg: 16, xl: 0 }}
        maxW={maxScreenWidth}
        mx="auto"
      >
        <Flex
          textAlign={{ base: 'center', xl: 'left' }}
          maxW="445px"
          mx={{ base: 'auto', xl: 0 }}
          direction="column"
          align={{ base: 'center', xl: 'flex-start' }}
          mb="60px"
        >
          <PatternDivider paddingY={{ base: '45px', lg: '0' }} />
          <Heading
            as="h2"
            variant="h2"
            color="white"
            maxW={{ sm: '350px' }}
            mt={{ lg: '45px' }}
          >
            A few highlights from our menu
          </Heading>
          <Text color="white" textStyle="body2">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </Text>
        </Flex>

        <VStack
          spacing="6"
          divider={<StackDivider borderColor="#272727" />}
          maxW="540px"
          mx="auto"
          ml={{ xl: '125px' }}
          mt={{ xl: '50px' }}
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
    </Box>
  );
};

export default HighlightsContainer;
