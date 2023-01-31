
import React from 'react'
import {Box, Flex, HStack, Text} from '@chakra-ui/react'
import { FaLocationArrow, FaPhone, FaEnvelope } from 'react-icons/fa'

function Contact() {
  return (
    <Box>
     <Flex fontSize={13} textColor="white" flexDirection="column"  gap={5}>
            <HStack gap={2} align="baseline">
                <FaLocationArrow color="#F4CE14"/>
                <Text textAlign="left">2727 Farland Street<br/>60636 Chicago IL</Text>
            </HStack>
            <HStack gap={2}>
                <FaPhone color="#F4CE14"/>
                <Text>555-3456-98734</Text>
            </HStack>
            <HStack gap={2}>
                <FaEnvelope color="#F4CE14"/>
                <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
            </HStack>
    </Flex>
    </Box>
  )
}

export default Contact