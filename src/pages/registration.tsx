import { Flex, Center, Stack, FormLabel, Box, Button, Link as ChakraLink } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form";
import { NextPage } from "next";
import { Input } from "../components/Input";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

type RegistrationFormData = {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

const RegistrationFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrogatória').min(6 , 'No mínimo 6 caracteres'),
  passwordConfirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas presisam ser iguais'),
})

const Login: NextPage = () => {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(RegistrationFormSchema)
  });
  const { errors } = formState;

  const handleRegistration: SubmitHandler<RegistrationFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)

  }

  return (
    <Center h='80vh'>
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

          <Input label='Nome' error={errors.name} type='text' {...register('name')} />
          <Input label='Email' error={errors.email} type='email' {...register('email')} />
          <Input label='Senha' error={errors.password} type='password' {...register('password')} />
          <Input label='Confirme sua senha' error={errors.passwordConfirmation} type='password' {...register('passwordConfirmation')} />

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
    </Center>
  )
}

export default Login