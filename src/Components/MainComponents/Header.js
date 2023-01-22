import React from 'react'
import logo from '/Users/misaghazimi/Documents/WebDevelopment/lemon/src/images/Logo.svg'
import Navigation from '../Pages/Navigation'
import { Helmet } from 'react-helmet'
import { Flex, Grid } from '@chakra-ui/react'

function Header() {
  return (
    <header>
      <Helmet>
        <title>Little Lemon</title>
        <meta name='title' content='Little Lemon Restaurant' />
      </Helmet>

      <Flex flexDirection="row" minWidth='max-content' alignItems={"center"} justify="center" gap="20" margin="5">
        <img src={logo}  alt="The logo of little lemon" />
        <Navigation/>
      </Flex>
    </header>
  )
}

export default Header;