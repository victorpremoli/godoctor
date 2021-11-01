import { Flex, Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Icon } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/hooks'
import { RiMenuFill } from 'react-icons/ri'

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex p='2'>
      <Button bg='gray.200' onClick={onOpen}>
        <Icon fontSize='24' as={RiMenuFill} />
      </Button>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='xs' >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
