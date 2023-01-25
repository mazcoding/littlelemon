import React from 'react'
import { Box, Image, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import dude from "/Users/misaghazimi/Documents/WebDevelopment/lemon/src/images/Mario and Adrian b.jpg"
import chef from "/Users/misaghazimi/Documents/WebDevelopment/lemon/src/images/restaurant chef B.jpg"
function ShortAbout() {
  return (
    <Box   w="100%" h="auto" paddingTop="5%" paddingBottom="5%" paddingLeft="15%" paddingRight="15%">
      <Grid flexWrap="wrap" templateColumns="repeat(2, 1fr)" gap="20%"  >
        <VStack align="left">
          <Heading textColor="#495E57">Little Lemon</Heading>
          <Text textColor="#495E57"  fontSize="xl">Chicago</Text>
          <Text textColor="#495E57"noOfLines={[3,12]} fontSize="sm">"Located in the heart of Chicago, our Italian-inspired restaurant is the perfect spot for a romantic dinner or a casual family meal. Our menu features a wide variety of traditional Italian dishes made with the freshest, locally sourced ingredients. From handmade pasta and wood-fired pizzas to classic risottos and hearty meats, there is something for everyone. Our cozy atmosphere and friendly staff will make you feel right at home. Come and experience the taste of Italy without leaving the Windy City at our restaurant." </Text>
        </VStack>
        <Box>
          <Image borderRadius="16"  boxSize="50%px" objectFit='contain' marginRight={"70px"}  position={"relative"} src={chef} alt="Picture of the restuarant owner and the chef"  />
          <Image borderRadius="16"  boxSize="50%px" objectFit='contain' marginLeft={"70px"} marginTop="-100px" position={"relative"} src={dude} alt="Picture of the chef while cooking"  />
        </Box>
    </Grid>
    </Box>
    )
  }

export default ShortAbout