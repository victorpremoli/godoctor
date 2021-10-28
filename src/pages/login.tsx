import { Flex, Text, Stack, FormLabel, Box, Button, Link as ChakraLink } from "@chakra-ui/react"
import { SubmitHandler, useForm } from 'react-hook-form'
import { NextPage } from "next"
import Link from 'next/link'
import { Input } from "../components/Input"

type SignInFormData = {
  email: string;
  password: string;
}

const Login: NextPage = () => {

  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
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
      onSubmit={handleSubmit(handleSignIn)}
    >
      <Stack spacing='8'>
        <Input label='Email' type='email' {...register('email')}/>
        <Input label='Senha' type='password' {...register('password')}/>
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
        Entrar
      </Button>
      <Flex mt='4' fontSize='12'>
        <Text>Não possui conta?</Text>
        <Link href="/registration" passHref>
          <ChakraLink color='blue.400' ml='2'>Cadastre-se</ChakraLink>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Login
