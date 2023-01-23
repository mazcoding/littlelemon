import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

function NavigationBottom() {
    return (
        <Box>
            <Flex fontFamily="Markazi Text Medium" fontWeight="bold" textColor="white" flexDirection="column"  gap={1}>
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

export default NavigationBottom