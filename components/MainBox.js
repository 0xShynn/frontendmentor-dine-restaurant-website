import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import PatternDivider from './patterns/PatternDivider';

const MainBox = ({
  isFirst,
  imageSide,
  imageDesktop,
  imageMobile,
  imageTablet,
  alt,
  imageBackground,
  title,
  text,
}) => {
  const mobileOffsetY = 75;
  const tabletOffsetY = 100;
  const desktopOffsetY = 70;

  return (
    <Box maxW="1110px" mx="auto" bg="blue.100" w="full">
      <Flex
        direction={{
          base: 'column',
          lg: imageSide === 'left' ? 'row' : 'row-reverse',
        }}
        justify="space-between"
        px={{ base: 6, md: 10, lg: 20, xl: 0 }}
      >
        {/* Image */}
        <Flex justify="center">
          {/* mobile version (sm also lg) */}
          <Box
            shadow="2xl"
            pos="relative"
            top={isFirst ? -mobileOffsetY : 0}
            w={imageMobile.width / 2}
            h={{
              sm: isFirst
                ? imageMobile.height / 2 - mobileOffsetY
                : imageMobile.height / 2,
              lg: imageMobile.height / 2 - mobileOffsetY,
            }}
            display={{ base: 'block', md: 'none', lg: 'block', xl: 'none' }}
          >
            <Image src={imageMobile} alt={alt} />
          </Box>

          {/* tablet version (md) */}
          <Box
            shadow="2xl"
            pos="relative"
            top={isFirst ? -tabletOffsetY : 0}
            w={imageTablet.width / 2}
            h={
              isFirst
                ? imageTablet.height / 2 - tabletOffsetY
                : imageTablet.height / 2
            }
            display={{ base: 'none', md: 'block', lg: 'none' }}
          >
            <Image src={imageTablet} alt={alt} />
          </Box>

          {/* desktop version (xl) */}
          <Box
            shadow="2xl"
            pos="relative"
            top={imageSide === 'left' ? -desktopOffsetY : 0}
            bottom={imageSide === 'left' ? 0 : desktopOffsetY}
            w={imageDesktop.width / 2}
            h={imageDesktop.height / 2 - desktopOffsetY}
            display={{ base: 'none', xl: 'block' }}
          >
            <Image src={imageDesktop} alt="Enjoyable place image mobile" />
          </Box>
        </Flex>

        {/* Content */}
        <Flex
          direction="column"
          align={{ base: 'center', lg: 'flex-start' }}
          justify="center"
          textAlign={{ base: 'center', lg: 'left' }}
          pl={{ lg: imageSide === 'left' ? '60px' : 0 }}
          bg="yellow.100"
        >
          <PatternDivider />
          <Box maxW={{ base: '375px', xl: '445px' }} bg="red.100">
            <Heading as="h2" variant="h2" color="primary.codgray">
              {title}
            </Heading>
            <Text textStyle="body2" color="primary.codgray">
              {text}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainBox;
