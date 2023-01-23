import React from 'react'
import logo from '/Users/misaghazimi/Documents/WebDevelopment/lemon/src/images/verticalLogo.jpg'
import { Flex, Image, Box } from '@chakra-ui/react'
import NavigationBottom from '../Pages/NavigationBottom'
import Contact from '../Pages/Contact'
import Socials from '../Pages/Socials'

function Footer() {
  return (
    <footer>
      <Flex bg="#495E57" width="100%"  paddingLeft="10%"  paddingRight="10%" justify="center" gap="10%" paddingBottom="5%" paddingTop="5%">
        <Box boxSize="100px">
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