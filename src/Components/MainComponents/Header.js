import React from 'react'
import logo from '/Users/misaghazimi/Documents/WebDevelopment/lemon/src/images/Logo.svg'
import Navigation from '../Pages/Navigation'
import { Helmet } from 'react-helmet'
import { Box, Flex, Grid, HStack } from '@chakra-ui/react'

function Header() {
  return (

    <HStack spacing={100} align="center" justify="center" minWidth="fit-content" maxWidth="100%" margin={"1%"}>
        <img src={logo}  alt="The logo of little lemon" />
        <Navigation/>
    </HStack>
  )
}

export default Header;