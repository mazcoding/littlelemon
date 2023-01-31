import React from 'react'
import {
  Box,
  FormControl,
  FormErrorMessage,
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
import { useState} from 'react'



function BookingForm( {state, dispatch,  submitForm, availableTimes}) {

  const time= availableTimes
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [request, setRequest] = useState("");

  const [fnameTouched, setFnameTouched] = useState(false);
  const [lnameTouched, setLnameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [numberTouched, setNumberTouched] = useState(false);
  const [dateTouched, setDateTouched] = useState(false);
  const [timeTouched, setTimeTouched] = useState(false);

  const fnameError = fname === '' && fnameTouched;
  const lnameError = lname === '' && lnameTouched;

  function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return pattern.test(email);}
  const mailError = mail === '' && emailTouched && !validateEmail(mail);

  const numberError = number === '' && numberTouched;
  const dateError = date === '' && dateTouched;
  const timeError = time === '' && timeTouched;

  const emptyField= (number === '' || fname === '' || lname === '' || mail==="" || date === '' || !timeTouched)


  const handleChange = (e) => {
    setDate(e);
    dispatch(e);
   }




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
          isInvalid = {Error}
          isRequired
          paddingTop="2.5vh" >

            <FormLabel>First Name</FormLabel>
            <Input
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              onBlur={() => setFnameTouched(true)}
              isInvalid={fnameError}
              bg="white"
              textColor="black"
              placeholder="i.e. George"/>
              {!fnameError ? (""): (
                <FormErrorMessage>Name is required.</FormErrorMessage>
              )}

            <FormLabel
              paddingTop="2vh"
              >Last Name</FormLabel>
            <Input
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              onBlur={() => setLnameTouched(true)}
              isInvalid={lnameError}
              bg="white"
              textColor="black"
              placeholder="i.e. Carlin"/>
              {!lnameError ? ("") : (
                <FormErrorMessage>Name is required.</FormErrorMessage>
              )}

            <FormLabel
              paddingTop="2vh"
              >Email</FormLabel>
            <Input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              onBlur={() => setEmailTouched(true)}
              isInvalid={mailError}
              bg="white"
              textColor="black"
              type='email'
              placeholder="i.e. name@domain.com"/>
             {!mailError ? (""): (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}

            <FormLabel
              paddingTop="2vh"
              >Number of guests</FormLabel>
            <NumberInput
              value={number}
              onChange={value => setNumber(value)}
              onBlur={() => setNumberTouched(true)}
              isInvalid={numberError}
              max={15} min={1}>
              <NumberInputField bg="white" textColor="black" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            {!numberError ? (""): (
                <FormErrorMessage>Please specify the number of guests.</FormErrorMessage>
              )}

            <FormLabel
              paddingTop="2vh"
              >Date</FormLabel>
            <Input
              value={date} 
              onChange={(e) => handleChange(e.target.value)} type={"date"}
              onBlur={() => setDateTouched(true)}
              isInvalid={dateError}
              bg="white"
              textColor="black"
              placeholder="Select Date"
              />
              {!dateError ? (""): (
                <FormErrorMessage>Please choose a date.</FormErrorMessage>
              )}

            <FormLabel
              paddingTop="2vh"
              as='table'
              >Time</FormLabel>
            <Select
              value={state}
              onChange={(e) => state(e.target.value)}type={"time"}
              onBlur={() => setTimeTouched(true)}
              isInvalid={timeError}
              color='black'
              bg="white"
              placeholder='Select option'>
              {availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
            </Select>
            {!dateError ? (""): (
                <FormErrorMessage>Please choose a time.</FormErrorMessage>
              )}

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
        isDisabled={emptyField}
        type="submit"
        onClick= {submitForm}
        bg="#F4CE14"
        w="max-content"
        textColor="#495E57"
        >Make reservation</Button>

    </VStack>
  </Box>
  )
}

export default BookingForm