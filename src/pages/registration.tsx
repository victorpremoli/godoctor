import { Flex, Text, Stack, FormLabel, Box, Button, Link as ChakraLink } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form";
import { NextPage } from "next";
import Link from 'next/link'
import { Input } from "../components/Input";

type RegistrationFormData = {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

const Login: NextPage = () => {

  const { register, handleSubmit, formState } = useForm();

  const handleRegistration: SubmitHandler<RegistrationFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)

  }

  return (
    <Flex
      p='8'
      w="90vw"
      as='form'
      mx='auto'
      bg='gray.300'
      align='center'
      flexDir='column'
      borderRadius={8}
      onSubmit={handleSubmit(handleRegistration)}
    >
      <Stack spacing='8' w='100%' maxW='720px'>

        <Input label='Nome' type='text' {...register('name')} />
        <Input label='Sobrenome' type='text' {...register('lastName')} />
        <Input label='Email' type='email' {...register('email')} />
        <Input label='Senha' type='password' {...register('password')} />
        <Input label='Confirme sua senha' type='password' {...register('passwordConfirmation')} />

      </Stack>


      <Button
        mt='6'
        w='90%'
        size='md'
        type='submit'
        maxWidth='236px'
        colorScheme='green'
        isLoading={formState.isSubmitting}
      >
        Salvar
      </Button>
    </Flex>
  )
}

export default Login