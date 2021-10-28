import { Box, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { useForm } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  label: string;
  type: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ label, ...rest }, ref) => {
    const { register } = useForm();

    return (
      <Box>
        <FormLabel>
          {label}
        </FormLabel >

        <ChakraInput
          {...rest}
          bg='gray.200'
          focusBorderColor='green.500'
          _hover={{ bgColor: 'gray.200' }}
          ref={ref}
        />
      </Box>
    );
  }

export const Input = forwardRef(InputBase);