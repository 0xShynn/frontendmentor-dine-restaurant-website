import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useBreakpointValue,
  chakra,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import PropTypes from 'prop-types';

import familyGatheringDesktop from '../assets/homepage/family-gathering-desktop@2x.jpg';
import familyGatheringMobile from '../assets/homepage/family-gathering-mobile@2x.jpg';
import familyGatheringTablet from '../assets/homepage/family-gathering-tablet@2x.jpg';
import socialEventsDesktop from '../assets/homepage/social-events-desktop@2x.jpg';
import socialEventsMobile from '../assets/homepage/social-events-mobile@2x.jpg';
import socialEventsTablet from '../assets/homepage/social-events-tablet@2x.jpg';
import specialEventsDesktop from '../assets/homepage/special-events-desktop@2x.jpg';
import specialEventsMobile from '../assets/homepage/special-events-mobile@2x.jpg';
import specialEventsTablet from '../assets/homepage/special-events-tablet@2x.jpg';

import CustomLink from './CustomLink';

const EventsContainer = () => {
  const tabData = [
    {
      label: 'Family Gathering',
      content:
        'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
      imageMobile: familyGatheringMobile,
      imageTablet: familyGatheringTablet,
      imageDesktop: familyGatheringDesktop,
      imageAlt: 'Family gathering at Dine restaurant',
    },
    {
      label: 'Special Events',
      content:
        'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
      imageMobile: specialEventsMobile,
      imageTablet: specialEventsTablet,
      imageDesktop: specialEventsDesktop,
      imageAlt: 'Specials events celebrated at Dine restaurant',
    },
    {
      label: 'Social Events',
      content:
        'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
      imageMobile: socialEventsMobile,
      imageTablet: socialEventsTablet,
      imageDesktop: socialEventsDesktop,
      imageAlt: 'Event, big parties at Dine',
    },
  ];

  function DataTabs({ data }) {
    const tabsOrientation = useBreakpointValue({
      base: 'vertical',
      md: 'horizontal',
      xl: 'vertical',
    });

    return (
      <Tabs
        isFitted
        orientation={tabsOrientation}
        variant="unstyled"
        id="eventsTabs"
        py={{ base: 16, md: 24, xl: 32 }}
      >
        <Flex direction={{ base: 'column', xl: 'row' }} align="center">
          <Flex>
            <TabPanels>
              {data.map((tab, index) => (
                <TabPanel key={index}>
                  {/* image mobile version (base, sm) */}
                  <Box
                    w={{ base: 'full', sm: tab.imageMobile.width / 2 }}
                    h={{ base: 'full', sm: tab.imageMobile.height / 2 }}
                    shadow="2xl"
                    display={{ base: 'inline-flex', md: 'none' }}
                  >
                    <NextImage
                      placeholder="blur"
                      src={tab.imageMobile}
                      width={tab.imageMobile.width / 2}
                      height={tab.imageMobile.height / 2}
                      alt={tab.imageAlt}
                    />
                  </Box>

                  {/* image tablet version (md) */}
                  <Box
                    w={tab.imageTablet.width / 2}
                    h={tab.imageTablet.height / 2}
                    shadow="2xl"
                    display={{ base: 'none', md: 'block', xl: 'none' }}
                    pos="relative"
                  >
                    <NextImage
                      placeholder="blur"
                      src={tab.imageTablet}
                      width={tab.imageTablet.width / 2}
                      height={tab.imageTablet.height / 2}
                      alt={tab.imageAlt}
                    />
                    <Box
                      pos="absolute"
                      top="-38px"
                      left="-60px"
                      w="160px"
                      h="76px"
                    >
                      <NextImage
                        src="/images/pattern-lines.svg"
                        layout="fill"
                        role="presentation"
                        alt=""
                      />
                    </Box>
                  </Box>

                  {/* image desktop version (xl) */}
                  <Box
                    display={{ base: 'none', xl: 'inline-flex' }}
                    pos="relative"
                    shadow="2xl"
                  >
                    <NextImage
                      placeholder="blur"
                      src={tab.imageDesktop}
                      width={tab.imageDesktop.width / 2}
                      height={tab.imageDesktop.height / 2}
                      alt={tab.imageAlt}
                    />
                    <Box
                      pos="absolute"
                      top="-38px"
                      left="-40px"
                      w="160px"
                      h="76px"
                    >
                      <NextImage
                        src="/images/pattern-lines.svg"
                        layout="fill"
                        role="presentation"
                        alt=""
                      />
                    </Box>
                  </Box>
                </TabPanel>
              ))}
            </TabPanels>
          </Flex>

          <Flex
            direction={{ base: 'column', xl: 'column-reverse' }}
            pl={{ xl: 24 }}
          >
            <TabList pt="4" pb="2" w={{ md: '90vw', lg: '70vw', xl: 'full' }}>
              {data.map((tab, index) => (
                <Tab
                  key={index}
                  color="#595959"
                  role="group"
                  _selected={{
                    color: '#866c57',
                    bgImage: {
                      base: '/images/line48.svg',
                      xl: 'none',
                    },
                    bgSize: '48px',
                    bgPos: 'center 36px',
                    bgRepeat: 'no-repeat',
                    '> .line': { bg: 'primary.beaver' },
                  }}
                  alignSelf={{ base: 'center', xl: 'flex-start' }}
                  pos="relative"
                  textTransform="uppercase"
                  fontSize="14px"
                  fontWeight="semibold"
                  lineHeight="28px"
                  letterSpacing="2px"
                >
                  <chakra.span
                    h="1px"
                    w="95px"
                    pos="absolute"
                    left="-112px"
                    className="line"
                    display={{ base: 'none', xl: 'block' }}
                  />
                  {tab.label}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {data.map((tab, index) => (
                <TabPanel
                  textAlign={{ base: 'center', xl: 'left' }}
                  key={index}
                >
                  <Flex
                    direction="column"
                    align={{ base: 'center', xl: 'flex-start' }}
                  >
                    <Heading
                      as="h2"
                      variant="h2"
                      mb="4"
                      color="primary.codgray"
                    >
                      {tab.label}
                    </Heading>
                    <Flex justify="center">
                      <Text
                        textStyle={{ base: 'body2', md: 'body1' }}
                        mb={{ base: 6, md: 8 }}
                        maxW="457px"
                        color="primary.codgray"
                      >
                        {tab.content}
                      </Text>
                    </Flex>
                    <CustomLink href="/booking" variant="black" mb={{ xl: 10 }}>
                      Book a table
                    </CustomLink>
                  </Flex>
                </TabPanel>
              ))}
            </TabPanels>
          </Flex>
        </Flex>
      </Tabs>
    );
  }

  return (
    <Box bg="white">
      <Box
        bgImage="/images/pattern-curve-top-right.svg"
        bgRepeat="no-repeat"
        bgSize={{
          md: '895px 320px',
        }}
        bgPos={{
          md: '-520px 0',
          lg: '-300px 0',
          xl: '-355px 0',
        }}
      />
      <Box
        w="full"
        h={{
          md: '320px',
        }}
        pos="absolute"
        bgImage="/images/pattern-curve-top-right.svg"
        bgRepeat="no-repeat"
        bgSize={{
          md: '895px 320px',
        }}
        bgPos={{
          md: '-520px 0',
          lg: '-300px 0',
          xl: '-355px 0',
        }}
      />

      <Flex justify="center" role="region" aria-label="Events section">
        <DataTabs data={tabData} />
      </Flex>
    </Box>
  );
};

EventsContainer.propTypes = {
  data: PropTypes.object,
};

export default EventsContainer;
