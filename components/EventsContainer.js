import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react';
import NextImage from 'next/image';

import CustomLink from './CustomLink';

const EventsContainer = () => {
  const EventContent = ({ title, text }) => {
    return (
      <Box textAlign="center">
        <Heading as="h2" variant="h2" mb="4">
          {title}
        </Heading>
        <Text textStyle="body2" mb="6">
          {text}
        </Text>
        <CustomLink href="/" variant="light">
          Book a table
        </CustomLink>
      </Box>
    );
  };

  return (
    <Box py="16">
      <Tabs isFitted orientation="vertical" id="1" variant="unstyled">
        <Flex direction="column" align="center">
          <Flex>
            <TabPanels>
              <TabPanel>
                <Box w="326px" h="400px" bg="red.100" mb="6" />
              </TabPanel>
              <TabPanel>
                <Box w="326px" h="400px" bg="blue.100" mb="6" />
              </TabPanel>
              <TabPanel>
                <Box w="326px" h="400px" bg="yellow.100" mb="6" />
              </TabPanel>
            </TabPanels>
          </Flex>
          <TabList>
            <Tab color="#A6A6A6" _selected={{ color: 'primary.codgray' }}>
              <Heading as="h3" variant="h3s">
                Family Gathering
              </Heading>
            </Tab>
            <Tab color="#A6A6A6" _selected={{ color: 'primary.codgray' }}>
              <Heading as="h3" variant="h3s">
                Special Events
              </Heading>
            </Tab>
            <Tab color="#A6A6A6" _selected={{ color: 'primary.codgray' }}>
              <Heading as="h3" variant="h3s">
                Social Events
              </Heading>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <EventContent
                title="Family Gathering"
                text="We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."
              />
            </TabPanel>
            <TabPanel>
              <EventContent
                title="Special Events"
                text="Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal."
              />
            </TabPanel>
            <TabPanel>
              <EventContent
                title="Social Events"
                text="Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone."
              />
            </TabPanel>
          </TabPanels>
        </Flex>
      </Tabs>
    </Box>
  );
};

export default EventsContainer;
