import React from 'react'
import logo from '/Users/misaghazimi/Documents/WebDevelopment/lemon/src/images/Logo.svg'
import Navigation from '../MainComponents/Navigation'
import { Helmet } from 'react-helmet'
import { Box, HStack, Image } from '@chakra-ui/react'

function Header() {

  const handldeLogo = ()  =>{
    <a href="/HomePage"></a>
  }
  return (
    <header>
      <HStack spacing={100} align="center" justify="center" minWidth="fit-content" maxWidth="100%" margin={"1%"}>
          <Box >
            <Image onClick={handldeLogo}  src={logo}  alt="The logo of little lemon" />
          </Box>
          <Navigation/>
      </HStack>
    </header>
  )
}

export default Header;