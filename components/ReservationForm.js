/* eslint-disable no-undef */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('A name is required'),
  email: yup.string().email().required('An email is required'),
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

  const [seats, setSeats] = useState(1);

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

        <Flex
          mb="6"
          borderBottom="1px"
          w="full"
          justify="space-between"
          align="center"
        >
          <Button
            variant="flushed"
            onClick={() => {
              if (seats > 1) {
                setSeats(seats - 1);
              }
            }}
          >
            -
          </Button>
          <Heading as="p" variant="h3l">
            {seats} people
          </Heading>
          <Button
            variant="flushed"
            onClick={() => {
              if (seats < 10) {
                setSeats(seats + 1);
              }
            }}
          >
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
