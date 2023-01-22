import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import TesteTemplate from './TesteTemplate'

function Teste() {
  return (
    <Box bg="#495E57"  w="100%" height={"350px"} >
        <HStack margin={10}>
        <TesteTemplate/>
        </HStack>
    </Box>
  )
}

export default Teste