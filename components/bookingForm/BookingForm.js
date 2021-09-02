/* eslint-disable no-undef */
import { useState } from 'react';

import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  hoursList,
  minutesList,
  monthsList,
  yearsList,
} from '../../constants/datetime';

import BookingModal from './BookingModal';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

const schema = yup.object().shape({
  name: yup.string().required('A name is required'),
  email: yup.string().email().required('An email is required'),
  month: yup.number().required(),
  day: yup.number().required(),
  year: yup.number().required(),
  hour: yup.number().required(),
  minute: yup.number().required(),
  period: yup.string().required(),
});

const BookingForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [seats, setSeats] = useState(1);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const errorDate = errors.day || errors.month || errors.year;
  const errorTime = errors.hour || errors.minute;

  const [reservation, setReservation] = useState(null);
  let reservationDate;

  function onSubmit(values) {
    return new Promise((resolve) => {
      reservationDate = new Date(
        values.year,
        values.month - 1,
        values.day,
        values.hour,
        values.minute
      );
      const updatedValues = { seats: seats, ...values };

      console.log(updatedValues, reservationDate);
      setReservation(updatedValues);
      setTimeout(() => {
        resolve();
        onOpen();
        reset();
        setSeats(1);
      }, 1000);
    });
  }

  function handleSeatsDecrement() {
    if (seats > 1) {
      setSeats(seats - 1);
    }
  }

  function handleSeatsIncrement() {
    if (seats < 10) {
      setSeats(seats + 1);
    }
  }

  const CustomFormHeading = ({ title }) => (
    <Flex
      w={{ md: '200px' }}
      direction="column"
      align={{ base: 'center', m: 'flex-start' }}
      justify={{ base: 'flex-start', md: 'center' }}
    >
      <Text
        textStyle="body1"
        color={errorDate || errorTime ? 'red.500' : 'primary.codgray'}
      >
        {title}
      </Text>
      <Text fontSize="11px" color="red.500">
        {(errorDate || errorTime) && 'This field is incomplete'}
      </Text>
    </Flex>
  );

  CustomFormHeading.propTypes = {
    title: PropTypes.string,
  };

  return (
    <Box
      bg="white"
      w="full"
      maxW={{ base: 'full', sm: '540px' }}
      p={{ base: 8, xl: 12 }}
      shadow="2xl"
      pos="relative"
      top={{ base: '-140px', xl: '-340px' }}
      id="form"
      h={{ sm: 'max-content' }}
    >
      <BookingModal
        isOpen={isOpen}
        onClose={onClose}
        bookingData={reservation}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <CustomInput
          id="name"
          placeholder="Name"
          errorName={errors?.name}
          errorMessage={errors?.name?.message}
          register={{
            ...register('name', {
              required: 'This is required',
            }),
          }}
        />

        {/* Email */}
        <CustomInput
          id="email"
          placeholder="Email"
          errorName={errors?.email}
          errorMessage={errors?.email?.message}
          register={{
            ...register('email', {
              required: 'This is required',
            }),
          }}
        />

        {/* Date */}
        <Flex direction={{ base: 'column', md: 'row' }} mb="8">
          <CustomFormHeading title="Pick a date" />
          <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" w="full">
            {/* Month */}
            <CustomSelect
              id="month"
              placeholder="MM"
              errorName={errors?.month}
              register={{
                ...register('month', {
                  required: 'This is required',
                }),
              }}
            >
              {monthsList.map((month, index) => (
                <option value={month} key={index}>
                  {month}
                </option>
              ))}
            </CustomSelect>

            {/* Day */}
            <CustomInput
              id="day"
              placeholder="DD"
              errorName={errors?.day}
              errorMessage={errors?.day?.message}
              showErrorMessage={false}
              register={{
                ...register('day', {
                  required: 'This is required',
                }),
              }}
              min="1"
              max="31"
              type="number"
            />

            {/* Year */}
            <CustomSelect
              id="year"
              placeholder="YY"
              errorName={errors?.year}
              register={{
                ...register('year', {
                  required: 'This is required',
                }),
              }}
            >
              {yearsList.map((year, index) => (
                <option value={year} key={index}>
                  {year}
                </option>
              ))}
            </CustomSelect>
          </Stack>
        </Flex>

        {/* Time */}
        <Flex direction={{ base: 'column', md: 'row' }} mb="8">
          <CustomFormHeading title="Pick a time" />
          <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" w="full">
            {/* Hour */}
            <CustomSelect
              id="hour"
              placeholder="HH"
              errorName={errors?.hour}
              register={{
                ...register('hour', {
                  required: 'This is required',
                }),
              }}
            >
              {hoursList.map((hour, index) => (
                <option value={hour} key={index}>
                  {hour}
                </option>
              ))}
            </CustomSelect>

            {/* Minute */}
            <CustomSelect
              id="minute"
              placeholder="MN"
              errorName={errors?.minute}
              register={{
                ...register('minute', {
                  required: 'This is required',
                }),
              }}
            >
              {minutesList.map((minute, index) => (
                <option value={minute} key={index}>
                  {minute}
                </option>
              ))}
            </CustomSelect>

            {/* Period Selector */}
            <CustomSelect
              id="period"
              defaultValue="AM"
              errorName={errors?.period}
              register={{
                ...register('period', {
                  required: 'This is required',
                }),
              }}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </CustomSelect>
          </Stack>
        </Flex>

        {/* Seats */}
        <Flex
          mb="6"
          borderBottom="1px"
          borderBottomColor="secondary.flushedgray"
          w="full"
          direction={{ base: 'column', sm: 'row' }}
          justify="space-between"
          align="center"
        >
          <Button
            variant="flushed"
            borderBottomColor="secondary.flushedgray"
            onClick={handleSeatsDecrement}
          >
            -
          </Button>
          <Heading as="p" variant="h3l">
            {seats} people
          </Heading>
          <Button
            variant="flushed"
            borderBottomColor="secondary.flushedgray"
            onClick={handleSeatsIncrement}
          >
            +
          </Button>
        </Flex>

        <Button
          variant="black"
          type="submit"
          w="full"
          display="flex"
          isLoading={isSubmitting}
        >
          Make reservation
        </Button>
      </form>
    </Box>
  );
};

export default BookingForm;
