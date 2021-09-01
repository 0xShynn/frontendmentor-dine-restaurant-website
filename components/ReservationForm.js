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
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

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

const ReservationForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(values) {
    return new Promise((resolve) => {
      const updatedValues = { seats: seats, ...values };
      setTimeout(() => {
        alert(JSON.stringify(updatedValues, null, 2));
        resolve();
      }, 2000);
    });
  }

  const errorDate = errors.day || errors.month || errors.year;
  const errorTime = errors.hour || errors.minute;

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

  const currentYear = new Date().getFullYear();

  return (
    <Box
      bg="white"
      maxW={{ base: 'full', sm: '540px' }}
      mx="auto"
      p="8"
      shadow="2xl"
      pos="relative"
      top="-140px"
      id="form"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <FormControl isInvalid={errors.name} id="name" mb="8">
          <Flex direction="column" pos="relative">
            <Input
              id="name"
              placeholder="Name"
              _placeholder={{ color: 'gray.500' }}
              bg="white"
              color="primary.codgray"
              fontSize="md"
              {...register('name', {
                required: 'This is required',
              })}
              variant="flushed"
            />
            <FormErrorMessage fontSize="11px" pos="absolute" bottom="-22px">
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </Flex>
        </FormControl>

        {/* Email */}
        <FormControl isInvalid={errors.name} id="email" mb="8">
          <Flex direction="column" pos="relative">
            <Input
              id="email"
              placeholder="Email"
              _placeholder={{ color: 'gray.500' }}
              bg="white"
              color="primary.codgray"
              fontSize="md"
              {...register('email', {
                required: 'This is required',
              })}
              variant="flushed"
            />
            <FormErrorMessage fontSize="11px" pos="absolute" bottom="-22px">
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </Flex>
        </FormControl>

        {/* Date */}
        <Flex direction={{ base: 'column', md: 'row' }} mb="8">
          <Flex
            w={{ md: '200px' }}
            direction="column"
            align={{ base: 'center', m: 'flex-start' }}
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
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing="4"
            w="full"
            sx={{ input: { px: 4 } }}
          >
            <FormControl isInvalid={errors.month} id="month">
              <Input
                id="month"
                type="number"
                min="1"
                max="12"
                placeholder="MM"
                _placeholder={{ color: 'gray.500' }}
                bg="white"
                color="primary.codgray"
                fontSize="md"
                {...register('month', {
                  required: 'This is required',
                })}
                variant="flushed"
              />
            </FormControl>
            <FormControl isInvalid={errors.day} id="day">
              <Input
                id="day"
                type="number"
                min="1"
                max="31"
                placeholder="DD"
                _placeholder={{ color: 'gray.500' }}
                bg="white"
                color="primary.codgray"
                fontSize="md"
                {...register('day', {
                  required: 'This is required',
                })}
                variant="flushed"
              />
            </FormControl>
            <FormControl isInvalid={errors.year} id="year">
              <Input
                id="year"
                type="number"
                min={currentYear}
                max={currentYear + 2}
                placeholder="YYYY"
                _placeholder={{ color: 'gray.500' }}
                bg="white"
                color="primary.codgray"
                fontSize="md"
                {...register('year', {
                  required: 'This is required',
                })}
                variant="flushed"
              />
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
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing="4"
            w="full"
            sx={{ 'input, select': { px: 4 } }}
          >
            <FormControl isInvalid={errors.hour} id="hour">
              <Input
                id="hour"
                type="number"
                min="1"
                max="12"
                placeholder="09"
                _placeholder={{ color: 'gray.500' }}
                bg="white"
                color="primary.codgray"
                fontSize="md"
                {...register('hour', {
                  required: 'This is required',
                })}
                variant="flushed"
              />
            </FormControl>
            <FormControl isInvalid={errors.minute} id="minute">
              <Input
                id="minute"
                type="number"
                min="0"
                max="59"
                step="30"
                placeholder="00"
                _placeholder={{ color: 'gray.500' }}
                bg="white"
                color="primary.codgray"
                fontSize="md"
                {...register('minute', {
                  required: 'This is required',
                })}
                variant="flushed"
              />
            </FormControl>
            <FormControl isInvalid={errors.period} id="period">
              <Select
                variant="flushed"
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
          w="full"
          direction={{ base: 'column', sm: 'row' }}
          justify="space-between"
          align="center"
        >
          <Button variant="flushed" onClick={handleSeatsDecrement}>
            -
          </Button>
          <Heading as="p" variant="h3l">
            {seats} people
          </Heading>
          <Button variant="flushed" onClick={handleSeatsIncrement}>
            +
          </Button>
        </Flex>

        <Button variant="black" type="submit" w="full" isLoading={isSubmitting}>
          Make reservation
        </Button>
      </form>
    </Box>
  );
};

export default ReservationForm;
