import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const BookingModal = ({ isOpen, onClose, bookingData }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        pt={{ base: 4, sm: 12, md: 12 }}
        pb={{ base: 4, sm: 6 }}
        borderRadius="none"
        mx={{ base: 0, sm: 6 }}
        bg="white"
      >
        <ModalCloseButton color="black" />
        <ModalBody>
          {bookingData && (
            <Flex
              justify="center"
              direction="column"
              align="center"
              textAlign="center"
            >
              <Heading as="h2" variant="h3l" mb="8" fontSize="2xl">
                Your reservation is confirmed
              </Heading>

              <Table variant="simple" size="sm">
                <TableCaption>
                  Dine
                  <br />
                  Marthwaite, Sedbergh. Cumbria
                  <br />
                  +00 44 123 4567
                  <br />
                  <br />
                  OPEN TIMES <br />
                  MON - FRI: 09:00 AM - 10:00 PM
                  <br />
                  SAT - SUN: 09:00 AM - 11:30PM
                  <br />
                </TableCaption>
                <Thead>
                  <Tr>
                    <Td>Name:</Td>
                    <Td isNumeric>{bookingData.name}</Td>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Email: </Td>
                    <Td isNumeric>{bookingData.email}</Td>
                  </Tr>
                  <Tr>
                    <Td>Table for</Td>
                    <Td isNumeric>{bookingData.seats}</Td>
                  </Tr>
                </Tbody>
              </Table>

              {/* <Text textStyle="body2">
                Reservation name:{' '}
                <chakra.span fontWeight="semibold" ml="1">
                  {bookingData.name}
                </chakra.span>
              </Text>

              <Text textStyle="body2">
                Email:{' '}
                <chakra.span fontWeight="semibold" ml="1">
                  {bookingData.email}
                </chakra.span>
              </Text>

              <Text textStyle="body2">
                Table for:{' '}
                <chakra.span fontWeight="semibold" ml="1">
                  {bookingData.seats}
                </chakra.span>
              </Text> */}
            </Flex>
          )}
        </ModalBody>

        <ModalFooter justifyContent="center">
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
