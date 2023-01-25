import React from 'react'
import { Card, SimpleGrid, Flex, CardHeader, Heading, CardBody, Grid, Image, Avatar, Text, CardFooter } from '@chakra-ui/react'

function TesteTemplate({testemonial}) {



  return (
    <Flex wrap="wrap"  width="100%"  paddingLeft="10vw"  paddingRight="10vw" justify={"center"}>
      {testemonial.map((testemonial) => (
        <Card margin={3}
        key={testemonial.id}
        width="20%"
        minW="min-content"
        borderRadius="16"
        bg="#EDEFEE" >
          <CardHeader>
            <Heading size='md'> {testemonial.rating}</Heading>
          </CardHeader>
          <CardBody>
            <Grid templateColumns='repeat(2, 1fr)'>
              <Avatar size="lg" name={testemonial.name} src={testemonial.image}></Avatar>
              <Text fontWeight="bold" textAlign="center" paddingTop="12.5%" >{testemonial.name}</Text>
            </Grid>
          </CardBody>
          <CardFooter>
            <Text>{testemonial.review}</Text>
          </CardFooter>
        </Card>
      ))
      }
    </Flex>
  )
}

export default TesteTemplate