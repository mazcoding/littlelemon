import { Box, Button, Image, Grid,Flex, Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import resturant from  "/Users/misaghazimi/Documents/WebDevelopment/lemon/src/images/hero.jpg"
import React from 'react'

function Hero() {
  return (
  <Box bg="#495E57"  w="100%" h="fit-content" paddingBottom="2.5%" paddingTop="2.5%">
    <Grid flexWrap="wrap" templateColumns="repeat(2, 1fr)" gap="20%" paddingLeft="15%" paddingRight="15%" >
      <VStack align="left" margin="4">
        <Heading textColor={"#F4CE14"}>Little Lemon</Heading>
        <Text textColor="White" fontSize="xl">Chicago</Text>
        <Text textColor="White"noOfLines={[3,4]} fontSize="sm">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restuarant features a locally-sourced menu with daily specials.</Text>
        <Spacer/>
        <Button fontSize="sm" width="fit-content" bg="#F4CE14" textColor="#495E57" borderRadius="16">Reserve a Table</Button>
      </VStack>
      <Box margin="5" >
        <Image borderRadius="16" marginRight="15%" marginTop="2.5%" position="absolute" boxSize="300px" objectFit='contain' src={resturant} alt="Picture of the restuarant"  />
      </Box>
  </Grid>
  </Box>
  )
}

export default Hero