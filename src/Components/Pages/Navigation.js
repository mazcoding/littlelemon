import React from 'react'
import { Box, Flex, List, } from '@chakra-ui/react'

function Navigation() {
  return (
    <Box>
        <Flex fontFamily="Markazi Text Medium" fontWeight="bold" textColor="#495d57" flexDirection="row"  gap={40}>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/menu">Menu</a>
              <a href="/reservation">Reservation</a>
              <a href="/order">Order online</a>
              <a href="/login">Login</a>
        </Flex>
    </Box>
  )
}

export default Navigation