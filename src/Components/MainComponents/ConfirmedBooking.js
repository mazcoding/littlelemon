import React from 'react'
import {Box,
    Heading} from '@chakra-ui/react'

function ConfirmedBooking() {
  return (
    <Box
    bg="#495E57"
    textColor="white"
    textAlign="center"
    h="90vh" >

    <Heading paddingTop="25%" paddingBottom="25%">Your Booking has been confirmed!</Heading>

    </Box>
  )
}

export default ConfirmedBooking