import { Box, Flex } from '@chakra-ui/react';

import placeDesktop from '../assets/homepage/enjoyable-place-desktop@2x.jpg';
import placeMobile from '../assets/homepage/enjoyable-place-mobile@2x.jpg';
import placeTablet from '../assets/homepage/enjoyable-place-tablet@2x.jpg';
import foodDesktop from '../assets/homepage/locally-sourced-desktop@2x.jpg';
import foodMobile from '../assets/homepage/locally-sourced-mobile@2x.jpg';
import foodTablet from '../assets/homepage/locally-sourced-tablet@2x.jpg';

import MainAlt from './MainAlt';

const MainContainer = () => {
  return (
    <Flex
      className="wesh"
      w={{ xl: '1110px' }}
      direction="column"
      bg="gray.300"
    >
      <MainAlt
        isFirst={true}
        imageSide="left"
        imageDesktop={placeDesktop}
        imageMobile={placeMobile}
        imageTablet={placeTablet}
        alt="Enjoyable place image"
        imageBackground={true}
        title="Enjoyable place for all the family"
        text="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
      />
      <Box h="130px" />
      <MainAlt
        imageSide="right"
        imageDesktop={foodDesktop}
        imageMobile={foodMobile}
        imageTablet={foodTablet}
        alt="Locally sourced food"
        imageBackground={true}
        title="The most locally sourced food"
        text="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
      />
    </Flex>
  );
};

export default MainContainer;
