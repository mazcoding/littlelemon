import React from 'react'
import {
    Box,
    FormControl,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    FormLabel,
    Select,
    Input,
    VStack,
    Heading,
    Button,
  } from '@chakra-ui/react'

function ConfirmedBooking() {
  return (
    <Box
    bg="#495E57"
    textColor="white"
    minH={200}
    textAlign="center"
    h="100%" >

    <Heading paddingTop="25%" paddingBottom="25%">Your Booking has been confirmed!</Heading>

    </Box>
  )
}

export default ConfirmedBooking