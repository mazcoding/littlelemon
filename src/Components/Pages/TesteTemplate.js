import React from 'react'
import { Card, SimpleGrid, CardHeader, Heading, CardBody, Button, Text, CardFooter } from '@chakra-ui/react'

function TesteTemplate() {
  return (
    <SimpleGrid spacing={4}  templateColumns='repeat(auto-fill, minmax(200px, 1fr))' marginTop="8">
    <Card>
      <CardHeader>
        <Heading size='md'> Customer dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
    </SimpleGrid>
  )
}

export default TesteTemplate