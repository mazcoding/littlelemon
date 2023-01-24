import React from 'react'
import {HStack, RadioGroup, Radio, Box,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input, VStack, Heading, Flex, Button, Spacer,
} from '@chakra-ui/react'


function BookingPage() {
  return (

  <Box h="100%" bg="#495E57" textColor="white" marginBottom="auto">
    <VStack marginLeft="15vw" marginRight="15vw">

      <Heading textColor="white" marginTop="5vh">
      Reserve your table
      </Heading>

      <FormControl paddingTop="5vh" isRequired>

        <HStack gap={2}>
          <FormLabel textColor="white">First Name</FormLabel>
          <Input bg="white" type='first name' placeholder="i.e. George"/>

          <FormLabel textColor="white">Last Name</FormLabel>
          <Input bg="white" type='last name' placeholder="i.e. Carlin"/>
        </HStack>


          <FormLabel textColor="white" paddingTop="5%">Email address</FormLabel>
          <Input bg="white" type='email'placeholder="i.e. name@domain.com"/>
          <FormHelperText textColor="gray.300">We'll never share your email.</FormHelperText>

          <FormLabel textColor="white">Phone</FormLabel>
          <Input bg="white" type='email'placeholder="i.e. 555-3536-6374"/>
          <FormHelperText textColor="gray.300">We'll only call in emergencies.</FormHelperText>

        <HStack w="100%" paddingTop="5%">
          <FormLabel w="25%" >Number of guests</FormLabel>
          <NumberInput w="25%" max={15} min={1}>
            <NumberInputField bg="white" textColor="gray.500" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormHelperText>""</FormHelperText>

          <FormLabel w="auto" textColor="white">Date and Time</FormLabel>
          <Input
            bg="white"
            textColor="gray.500"
            placeholder="Select Date and Time"
            w="min-content"
            type="datetime-local"/>
        </HStack>
      </FormControl>
    </VStack>

        <VStack gap={10}marginTop="5%" marginLeft="15vw" marginRight="15vw" paddingBottom="4.9%" marginBottom="0.1%">
         <FormControl>
         <FormLabel as='table' textColor="white" p>Your table preference</FormLabel>
        <RadioGroup  colorScheme="white">
          <HStack spacing='24px' textColor="white">
            <Radio value='Outside' >Outside</Radio>
            <Radio value='Inside'>Inside</Radio>
            <Radio value='Balcony'>Balcony</Radio>
            <Radio value="booth">Family Booth</Radio>
          </HStack>
          <FormHelperText textColor="gray.300">We unfortunately cannot guarantee the availability.</FormHelperText>
        </RadioGroup>
         </FormControl>
          <FormControl>
            <FormLabel textColor="white">Any special requests?</FormLabel>
            <Input bg="white" type='email'placeholder="i.e. allergies, child seat etc."/>
          </FormControl>
            <Button bg="#F4CE14" w="max-content" textColor="#495E57" >Proceed to payment</Button>
       </VStack>

  </Box>
  )
}

export default BookingPage