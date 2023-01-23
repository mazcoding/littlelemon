import React from 'react'
import { Box, Button, Image, Grid,Flex, Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import dude from "/Users/misaghazimi/Documents/WebDevelopment/lemon/src/images/Mario and Adrian b.jpg"

function ShortAbout() {
  return (
    <Box   w="100%" h="auto" paddingTop="5%" paddingBottom="5%" paddingLeft="15%" paddingRight="15%">
      <Grid flexWrap="wrap" templateColumns="repeat(2, 1fr)" gap="20%"  >
        <VStack align="left">
          <Heading fontFamily="Markazi Text Medium" textColor="#495E57">Little Lemon</Heading>
          <Text textColor="#495E57" fontFamily="Markazi Text Medium" fontSize="xl">Chicago</Text>
          <Text fontFamily="Karla Regular" textColor="#495E57"noOfLines={[3,6]} fontSize="sm">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Text>
          <Spacer/>
        </VStack>
        <Box >
          <Image borderRadius="16"  boxSize="50%px" objectFit='contain' src={dude} alt="Picture of the restuarant"  />
        </Box>
    </Grid>
    </Box>
    )
  }

export default ShortAbout