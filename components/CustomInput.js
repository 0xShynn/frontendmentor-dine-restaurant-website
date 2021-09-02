import { Flex, FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CustomInput = (props) => {
  const { id, placeholder, errorName, errorMessage, register } = props;
  return (
    <FormControl isInvalid={errorName} id={id} mb="8">
      <Flex direction="column" pos="relative">
        <Input
          id={id}
          placeholder={placeholder}
          _placeholder={{ color: 'gray.500' }}
          bg="white"
          color="primary.codgray"
          fontSize="md"
          variant="flushed"
          borderBottomColor="secondary.flushedgray"
          {...register}
        />
        <FormErrorMessage fontSize="11px" pos="absolute" bottom="-22px">
          {errorName && errorMessage}
        </FormErrorMessage>
      </Flex>
    </FormControl>
  );
};

CustomInput.propTypes = {
  errorMessage: PropTypes.string,
  errorName: PropTypes.object,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object,
};

export default CustomInput;
