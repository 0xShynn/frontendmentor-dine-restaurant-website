import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import PropTypes from 'prop-types';

import { maxScreenWidth } from '../constants/style';

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
  const isLeftImage = imageSide === 'left';

  return (
    <Box mx="auto" w="full" pos="relative">
      {imageBackground && (
        <Box
          w="full"
          pos="absolute"
          h={{
            md: isLeftImage ? '490px' : '770px',
            lg: '600px',
            xl: isLeftImage ? '600px' : '650px',
          }}
          bgImage="/images/pattern-curve-top-right.svg"
          bgRepeat="no-repeat"
          bgSize={{
            md: '100%',
            lg: '60%',
            xl: isLeftImage ? '895px 320px' : '895px 650px',
          }}
          bgPos={{
            base: '0 0',
            sm: '80px -50px',
            md: isLeftImage ? '-380px 200px' : '-380px 490px',
            lg: isLeftImage ? '-50px 50px' : '-50px 50px',
            xl: isLeftImage ? '0 280px' : '0 170px',
          }}
          transform={isLeftImage ? '' : 'rotate(1turn) scale(-1, 1)'}
        />
      )}

      <Flex
        direction={{
          base: 'column',
          lg: isLeftImage ? 'row' : 'row-reverse',
        }}
        justify="space-between"
        px={{ base: 6, md: 10, lg: 20, xl: 0 }}
        py={{ base: 12, sm: 0 }}
        pos="relative"
        maxW={{ lg: '960px', xl: maxScreenWidth }}
        mx="auto"
      >
        {/* Image */}
        <Flex justify="center">
          {/* mobile version (sm also lg) */}
          <Box
            shadow="2xl"
            pos="relative"
            top={{
              base: 0,
              sm: isFirst ? -mobileOffsetY : 0,
            }}
            w={imageMobile.width / 2}
            h={{
              base: imageMobile / 2,
              sm: isFirst
                ? imageMobile.height / 2 - mobileOffsetY
                : imageMobile.height / 2,
              lg: imageMobile.height / 2 - mobileOffsetY,
            }}
            display={{
              base: 'inline-flex',
              sm: 'block',
              md: 'none',
              lg: 'block',
              xl: 'none',
            }}
          >
            <NextImage src={imageMobile} alt={alt} placeholder="blur" />
            {!isLeftImage && (
              <Box
                pos="absolute"
                top="50px"
                right="-70px"
                display={{ base: 'none', md: 'none', lg: 'block' }}
              >
                <NextImage
                  src="/images/pattern-lines.svg"
                  width="160px"
                  height="76px"
                  role="presentation"
                  alt=""
                />
              </Box>
            )}
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
            zIndex="1"
          >
            <NextImage src={imageTablet} alt={alt} placeholder="blur" />
            {!isLeftImage && (
              <Box pos="absolute" bottom="50px" right="-60px">
                <NextImage
                  src="/images/pattern-lines.svg"
                  width="160px"
                  height="76px"
                  role="presentation"
                  alt=""
                />
              </Box>
            )}
          </Box>

          {/* desktop version (xl) */}
          <Box
            shadow="2xl"
            pos="relative"
            top={isLeftImage ? -desktopOffsetY : 0}
            bottom={isLeftImage ? 0 : desktopOffsetY}
            w={imageDesktop.width / 2}
            h={imageDesktop.height / 2 - desktopOffsetY}
            display={{ base: 'none', xl: 'block' }}
            zIndex="overlay"
          >
            <NextImage
              src={imageDesktop}
              alt="Enjoyable place image mobile"
              placeholder="blur"
            />
            {!isLeftImage && (
              <Box pos="absolute" top="280px" right="-110px">
                <NextImage
                  src="/images/pattern-lines.svg"
                  width="160px"
                  height="76px"
                  role="presentation"
                  alt=""
                />
              </Box>
            )}
          </Box>
        </Flex>

        {/* Content */}
        <Flex
          direction="column"
          align={{ base: 'center', lg: 'flex-start' }}
          justify="center"
          textAlign={{ base: 'center', lg: 'left' }}
          pl={{ lg: isLeftImage ? '60px' : 0 }}
          mb={{
            sm: !isLeftImage ? '70px' : 0,
            md: !isLeftImage ? '120px' : 0,
            lg: !isLeftImage ? '60px' : 0,
          }}
          zIndex="overlay"
        >
          <PatternDivider paddingY="45px" />
          <Box maxW={{ base: '375px', xl: '445px' }}>
            <Heading as="h2" variant="h2" color="primary.codgray" maxW="400px">
              {title}
            </Heading>
            <Text
              textStyle={{ base: 'body2', xl: 'body1' }}
              color="primary.codgray"
            >
              {text}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

MainBox.propTypes = {
  alt: PropTypes.string.isRequired,
  imageBackground: PropTypes.bool,
  imageDesktop: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
  imageMobile: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
  imageSide: PropTypes.oneOf(['right', 'left']).isRequired,
  imageTablet: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
  isFirst: PropTypes.bool,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainBox;
