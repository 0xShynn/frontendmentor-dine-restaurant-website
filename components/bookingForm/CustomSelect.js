import { FormControl, Select } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CustomSelect = (props) => {
  const { id, children, placeholder, errorName, register, ...otherProps } =
    props;

  return (
    <FormControl isInvalid={errorName} id="month">
      <Select
        placeholder={placeholder}
        variant="flushed"
        color="primary.codgray"
        iconColor="primary.beaver"
        borderBottomColor="secondary.flushedgray"
        id={id}
        {...register}
        {...otherProps}
      >
        {children}
      </Select>
    </FormControl>
  );
};

CustomSelect.propTypes = {
  children: PropTypes.any,
  errorName: PropTypes.object,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object,
};

export default CustomSelect;
