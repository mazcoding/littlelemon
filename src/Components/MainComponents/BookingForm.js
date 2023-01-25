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
import { useState } from 'react'


function BookingForm({availableTimes, setAvailableTimes}) {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [request, setRequest] = useState("");


  return (

  <Box
    bg="#495E57"
    textColor="white"
    h="auto" >

    <VStack
      marginLeft="30vw"
      marginRight="30vw"
      paddingTop="5vh"
      paddingBottom="5vh" >

      <Heading
        textColor="#F4CE14"
        >Reserve your table</Heading>

        <FormControl
          isRequired
          paddingTop="2.5vh" >

            <FormLabel>First Name</FormLabel>
            <Input
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              bg="white"
              textColor="black"
              placeholder="i.e. George"/>

            <FormLabel
              paddingTop="2vh"
              >Last Name</FormLabel>
            <Input
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              bg="white"
              textColor="black"
              placeholder="i.e. Carlin"/>

            <FormLabel
              paddingTop="2vh"
              >Email</FormLabel>
            <Input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              bg="white"
              textColor="black"
              type='email'
              placeholder="i.e. name@domain.com"/>

            <FormLabel
              paddingTop="2vh"
              >Number of guests</FormLabel>
            <NumberInput
              value={number}
              onChange={value => setNumber(value)}
              max={15} min={1}>
              <NumberInputField bg="white" textColor="black" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <FormLabel
              paddingTop="2vh"
              >Date</FormLabel>
            <Input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              bg="white"
              textColor="black"
              placeholder="Select Date"
              type="date"/>

            <FormLabel
              paddingTop="2vh"
              as='table'
              >Time</FormLabel>
            <Select
              value={availableTimes}
              onChange={(e) => setAvailableTimes(e.target.value)}
              color='black'
              bg="white"
              placeholder='Select option'>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
            </Select>

        </FormControl>

      <FormControl>
          <FormLabel
              paddingTop="2vh"
              as='table'
              >Occasion</FormLabel>
            <Select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              color='black'
              bg="white"
              placeholder='Select option'>
                <option value="Anniversary">Anniversary</option>
                <option value="Birthday">Birthday</option>
            </Select>

      </FormControl>

      <FormControl paddingBottom="4vh">
        <FormLabel
          paddingTop="1vh"
          >Any special requests?</FormLabel>
        <Input
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          bg="white"
          textColor="black"
          type='text'
          placeholder="i.e. allergies, child seat etc."/>
      </FormControl>

      <Button
        type="submit"
        bg="#F4CE14"
        w="max-content"
        textColor="#495E57"
        >Proceed to payment</Button>

    </VStack>
  </Box>
  )
}

export default BookingForm