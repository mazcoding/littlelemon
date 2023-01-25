import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

function Socials() {
  return (
    <Box>
        <Flex fontSize="13" textColor="white" flexDirection="column" align="start" gap={1}>
                <a href="https://www.facebook.com" target="_blank">Facebook</a>
                <a href="https://www.instagram.com" target="_blank">Instagram</a>
                <a href="https://www.twitter.com" target="_blank">Twitetr</a>
        </Flex>
    </Box>
  )
}

export default Socials