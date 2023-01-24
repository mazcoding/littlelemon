import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

function Socials() {
  return (
    <Box>
        <Flex fontFamily="Markazi Text Medium" fontWeight="bold" textColor="white" flexDirection="column" align="start" gap={1}>
                <a href="https://www.facebook.com">Facebook</a>
                <a href="https://www.instagram.com">Instagram</a>
                <a href="https://www.twitter.com">Twitetr</a>
        </Flex>
    </Box>
  )
}

export default Socials