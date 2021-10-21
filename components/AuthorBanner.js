import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const AuthorBanner = () => {
  return (
    <Flex
      justify="center"
      px="6"
      pb={{ base: 4, md: 10, lg: 16 }}
      bg="primary.codgray"
      borderTop="0px"
    >
      <Flex textAlign="center" align="center" fontSize="14px">
        <Text color="white" mt="0.5">
          Code challenge by{' '}
          <Link
            href="https://www.frontendmentor.io"
            target="_blank"
            color="white"
            _hover={{ textDecoration: 'underline' }}
            variant="basic"
            size="sm"
          >
            Frontend Mentor
          </Link>{' '}
          • Made by{' '}
          <Link
            href="https://anhek.dev"
            target="_blank"
            color="white"
            _hover={{ textDecoration: 'underline' }}
            variant="basic"
            size="sm"
          >
            Antonin Nhek
          </Link>
        </Text>
        <Link
          href="https://github.com/anhek/frontendmentor-dine-restaurant-website"
          target="_blank"
          aria-label="Link to the Github repo of the code challenge"
          ml="4"
          px="0"
          py="0"
          _hover={{}}
        >
          <Icon
            as={FaGithub}
            boxSize="8"
            color="white"
            transition="0.2s"
            _hover={{ color: 'primary.peach' }}
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default AuthorBanner;
