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
      <ModalContent p="6" borderRadius="none" mx="6">
        <ModalCloseButton />
        <ModalBody pt="10">
          {bookingData && (
            <Flex justify="center" direction="column" align="center">
              <Heading as="h2" variant="h2">
                Thank you.
              </Heading>
              <Text textStyle="body2">Reservation name:</Text>
              <Box py="2" px="4" bg="gray.100" mb="4">
                {bookingData.name}
              </Box>
              <Text textStyle="body2">Email:</Text>
              <Box py="2" px="4" bg="gray.100" mb="4">
                {bookingData.email}
              </Box>
              <Text textStyle="body2">Number of seats:</Text>
              <Box
                py="2"
                px="4"
                bg="gray.100"
                mb="4"
                fontWeight="bold"
                fontSize="2xl"
              >
                {bookingData.seats}
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
