import {
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const BookingModal = ({ isOpen, onClose, bookingData }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="6" borderRadius="none" mx="6" bg="white">
        <ModalCloseButton color="black" />
        <ModalBody pt="10">
          {bookingData && (
            <Flex justify="center" direction="column" align="center">
              <Heading
                as="h2"
                variant="h3l"
                color="primary.codgray"
                textAlign="center"
              >
                Reservation confirmed.
              </Heading>
              <Text my="8">We will procede to bla bla bla bla.</Text>

              <Text textStyle="body2" color="primary.codgray">
                Reservation name:
              </Text>
              <Box py="2" px="4" bg="gray.100" mb="4">
                <Text>{bookingData.name}</Text>
              </Box>

              <Text textStyle="body2">Email:</Text>
              <Box py="2" px="4" bg="gray.100" mb="4">
                <Text>{bookingData.email}</Text>
              </Box>

              <Text textStyle="body2">Number of seats:</Text>
              <Box py="2" px="4" bg="gray.100" mb="4">
                <Text fontWeight="bold" fontSize="2xl">
                  {bookingData.seats}
                </Text>
              </Box>
            </Flex>
          )}
        </ModalBody>

        <ModalFooter justifyContent="center" pt="6">
          <Button variant="black" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

BookingModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  bookingData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    seats: PropTypes.number,
  }),
};

export default BookingModal;
