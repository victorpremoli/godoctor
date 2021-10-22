import { Flex, Text, Button, VStack } from '@chakra-ui/react'
import { query as q } from 'faunadb'

import { fauna } from '../services/fauna'
import { Hero } from '../components/Hero'

import type { GetStaticProps, NextPage } from 'next'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <VStack spacing='12' align='center' justify='center'>
        <Hero />
        <Text px='4' align='center' fontSize='20' fontWeight='bold' my='12' >Agende suas consultas médicas com apenas alguns cliques!</Text>
        <VStack spacing='4'>
          <Button variant='solid' colorScheme='green' w='250px' >Entrar</Button>
          <Button variant='outline' colorScheme='green' w='250px' >Cadastrar</Button>
        </VStack>
      </VStack>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const user = {
    name: 'ana',
    email: 'ana.premoli57@gmail.com'
  };

  await fauna.query(
    q.Create(
      q.Collection('users'),
      { data: { user } }
    )
  )

  return {
    props: {
      user,
    },
  }
}

