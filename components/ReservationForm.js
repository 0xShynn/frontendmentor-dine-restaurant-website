/* eslint-disable no-undef */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
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
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 2000);
    });
  }

  return (
    <Box bg="white" w="full" p="8" shadow="2xl" pos="relative" top="-140px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name} id="name" mb="6">
          <FormLabel display="none" color="red">
            Name
          </FormLabel>
          <Flex direction="column">
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
            <FormErrorMessage fontSize="xs">
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </Flex>
        </FormControl>

        <FormControl isInvalid={errors.name} id="email" mb="6">
          <FormLabel display="none" color="red">
            Email
          </FormLabel>
          <Flex direction="column">
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
            <FormErrorMessage fontSize="xs">
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </Flex>
        </FormControl>

        <Button variant="black" type="submit" w="full" isLoading={isSubmitting}>
          Make reservation
        </Button>
      </form>
    </Box>
  );
};

export default ReservationForm;
