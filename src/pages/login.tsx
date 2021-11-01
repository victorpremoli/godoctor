import { Flex, Text, Stack, Center, Box, Button, Link as ChakraLink } from "@chakra-ui/react"
import { SubmitHandler, useForm } from 'react-hook-form'
import { NextPage } from "next"
import { Input } from "../components/Input"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'

type SignInFormData = {
  email: string;
  password: string;
}

const loginFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha inválida')
})

const Login: NextPage = () => {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginFormSchema)
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)

  }

  return (
    <Center h='80vh'>
      <Flex
        p='8'
        w="90vw"
        maxW='720px'
        as='form'
        mx='auto'
        bg='gray.300'
        align='center'
        justifyContent='center'
        flexDir='column'
        borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='8'>
          <Input label='Email' type='email' error={errors.email} {...register('email')} />
          <Input label='Senha' type='password' error={errors.password} {...register('password')} />
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
    </Center>
  )
}

export default Login
