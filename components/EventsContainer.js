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
} from '@chakra-ui/react';
import NextImage from 'next/image';
import PropTypes from 'prop-types';

import familyGatheringMobile from '../assets/homepage/family-gathering-mobile@2x.jpg';
import socialEventsMobile from '../assets/homepage/social-events-mobile@2x.jpg';
import specialEventsMobile from '../assets/homepage/special-events-mobile@2x.jpg';

import CustomLink from './CustomLink';

const EventsContainer = () => {
  const tabData = [
    {
      label: 'Family Gathering',
      content:
        'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
      imageMobile: familyGatheringMobile,
    },
    {
      label: 'Special Events',
      content:
        'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
      imageMobile: specialEventsMobile,
    },
    {
      label: 'Social Events',
      content:
        'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
      imageMobile: socialEventsMobile,
    },
  ];

  function DataTabs({ data }) {
    return (
      <Tabs isFitted orientation="vertical" variant="unstyled" id="1" py="16">
        <Flex direction="column" align="center">
          <Flex>
            <TabPanels>
              {data.map((tab, index) => (
                <TabPanel key={index}>
                  <Box
                    w={{ base: 'full', sm: '327px' }}
                    display="inline-flex"
                    h={{ base: 'full', sm: '400px' }}
                    shadow="2xl"
                  >
                    <NextImage
                      src={tab.imageMobile}
                      width="327px"
                      height="400px"
                    />
                  </Box>
                </TabPanel>
              ))}
            </TabPanels>
          </Flex>

          <TabList pt="4" pb="2">
            {data.map((tab, index) => (
              <Tab
                key={index}
                color="#A6A6A6"
                role="group"
                _selected={{
                  color: 'primary.codgray',
                  bgImage: '/images/line.svg',
                  bgRepeat: 'no-repeat',
                  bgSize: '48px',
                  bgPos: '50% 36px',
                }}
              >
                <Heading as="h3" variant="h3s">
                  {tab.label}
                </Heading>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {data.map((tab, index) => (
              <TabPanel textAlign="center" key={index}>
                <Flex direction="column" align="center">
                  <Heading as="h2" variant="h2" mb="4">
                    {tab.label}
                  </Heading>
                  <Flex justify="center">
                    <Text
                      textStyle={{ base: 'body2', md: 'body1' }}
                      mb="6"
                      maxW="457px"
                    >
                      {tab.content}
                    </Text>
                  </Flex>
                  <CustomLink href="/" variant="light">
                    Book a table
                  </CustomLink>
                </Flex>
              </TabPanel>
            ))}
          </TabPanels>
        </Flex>
      </Tabs>
    );
  }

  return (
    <Flex justify="center">
      <DataTabs data={tabData} />
    </Flex>
  );
};

EventsContainer.propTypes = {
  data: PropTypes.object,
};

export default EventsContainer;
