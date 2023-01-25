import React from 'react'
import logo from '/Users/misaghazimi/Documents/WebDevelopment/lemon/src/images/verticalLogo.jpg'
import { Flex, Image, Box } from '@chakra-ui/react'
import NavigationBottom from '../Pages/NavigationBottom'
import Contact from '../Pages/Contact'
import Socials from '../Pages/Socials'

function Footer() {
  return (
    <footer>
      <Flex borderTop="solid" borderColor="white" height="auto" bg="#495E57" width="100vw" paddingLeft="7.5%"  paddingRight="7.5%" justify="center" gap="20%" paddingBottom="2.5%" paddingTop="2.5%">
        <Box boxSize="4.5%">
          <Image src={logo} alt="Logo"/>
        </Box>
        <NavigationBottom/>
        <Contact/>
        <Socials/>
      </Flex>
    </footer>
  )
}

export default Footer