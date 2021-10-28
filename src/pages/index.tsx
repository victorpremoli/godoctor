import { Text, Button, VStack } from '@chakra-ui/react'
import { query as q } from 'faunadb'

import { fauna } from '../services/fauna'
import { Hero } from '../components/Hero'

import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <VStack spacing='12' align='center' justify='center'>
        <Hero />
        <Text px='4' align='center' fontSize='20' fontWeight='bold' my='12' >Agende suas consultas médicas com apenas alguns cliques!</Text>
        <VStack spacing='4'>

          <Link href='/login' passHref>
            <Button as='a' variant='solid' colorScheme='green' w='250px' >Entrar</Button>
          </Link>

          <Link href='/registration' passHref>
            <Button variant='outline' colorScheme='green' w='250px' >Cadastrar</Button>
          </Link>

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

