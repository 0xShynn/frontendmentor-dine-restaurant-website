import { Flex, FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CustomInput = (props) => {
  const {
    id,
    placeholder,
    errorName,
    errorMessage,
    register,
    showErrorMessage,
    ...otherProps
  } = props;

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
          {...otherProps}
        />
        {showErrorMessage && (
          <FormErrorMessage fontSize="11px" pos="absolute" bottom="-22px">
            {errorName && errorMessage}
          </FormErrorMessage>
        )}
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
  showErrorMessage: PropTypes.bool,
};

export default CustomInput;
