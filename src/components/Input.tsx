import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ label, error = null, ...rest }, ref) => {

    return (
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel htmlFor={label}> {label} </FormLabel>}

        <ChakraInput
          {...rest}
          bg='gray.200'
          focusBorderColor='green.500'
          _hover={{ bgColor: 'gray.200' }}
          ref={ref}
        />

        {!!error && <FormErrorMessage> {error.message} </FormErrorMessage>}

      </FormControl>
    );
  }

export const Input = forwardRef(InputBase);