/* eslint-disable no-undef */
import { useState } from 'react';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  hoursList,
  minutesList,
  monthsList,
  yearsList,
} from '../constants/datetime';

import BookingModal from './BookingModal';
import CustomInput from './CustomInput';

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
      }, 1000);
    });
  }

  const [seats, setSeats] = useState(1);

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

  const { isOpen, onOpen, onClose } = useDisclosure();

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
      h={{ sm: '559px', md: '499px', xl: '531px' }}
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
          <Flex
            w={{ md: '200px' }}
            direction="column"
            align={{ base: 'center', m: 'flex-start' }}
            justify={{ base: 'flex-start', md: 'center' }}
          >
            <Text
              textStyle="body1"
              color={errorDate ? 'red.500' : 'primary.codgray'}
            >
              Pick a date
            </Text>
            <Text fontSize="11px" color="red.500">
              {(errors.day || errors.month || errors.year) &&
                'This field is incomplete'}
            </Text>
          </Flex>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" w="full">
            <FormControl isInvalid={errors.month} id="month">
              <Select
                placeholder="MM"
                variant="flushed"
                iconColor="primary.beaver"
                borderBottomColor="secondary.flushedgray"
                id="month"
                {...register('month', {
                  required: 'This is required',
                })}
              >
                {monthsList.map((month, index) => (
                  <option value={month} key={index}>
                    {month}
                  </option>
                ))}
              </Select>
            </FormControl>

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

            <FormControl isInvalid={errors.year} id="year" minW="90px">
              <Select
                placeholder="YY"
                variant="flushed"
                iconColor="primary.beaver"
                borderBottomColor="secondary.flushedgray"
                id="year"
                {...register('year', {
                  required: 'This is required',
                })}
              >
                {yearsList.map((year, index) => (
                  <option value={year} key={index}>
                    {year}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Flex>

        {/* Time */}
        <Flex direction={{ base: 'column', md: 'row' }} mb="8">
          <Flex w={{ md: '200px' }} direction="column" justify="center">
            <Text
              textStyle="body1"
              color={errorTime ? 'red.500' : 'primary.codgray'}
            >
              Pick a time
            </Text>
            <Text fontSize="11px" color="red.500">
              {errorTime && 'This field is incomplete'}
            </Text>
          </Flex>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing="4" w="full">
            <FormControl isInvalid={errors.hour} id="hour">
              <Select
                placeholder="HH"
                variant="flushed"
                iconColor="primary.beaver"
                borderBottomColor="secondary.flushedgray"
                id="hour"
                {...register('hour', {
                  required: 'This is required',
                })}
              >
                {hoursList.map((hour, index) => (
                  <option value={hour} key={index}>
                    {hour}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isInvalid={errors.minute} id="minute">
              <Select
                placeholder="MN"
                variant="flushed"
                iconColor="primary.beaver"
                borderBottomColor="secondary.flushedgray"
                id="minute"
                {...register('minute', {
                  required: 'This is required',
                })}
              >
                {minutesList.map((minute, index) => (
                  <option value={minute} key={index}>
                    {minute}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isInvalid={errors.period} id="period">
              <Select
                variant="flushed"
                iconColor="primary.beaver"
                borderBottomColor="secondary.flushedgray"
                defaultValue="AM"
                id="period"
                {...register('period', {
                  required: 'This is required',
                })}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </Select>
            </FormControl>
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
