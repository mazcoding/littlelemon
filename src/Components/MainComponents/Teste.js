import { Box, Heading, HStack} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import TesteTemplate from './TesteTemplate'
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'

function Teste() {

 const [testemonial, setTestemonial]= useState([
  {
    id:"1",
    image:'https://bit.ly/kent-c-dodds',
    rating:[
      <HStack justify="center"> 
        <FaStar color='#F4CE14'/>,
        <FaStar color='#F4CE14'/>,
        <FaStar color='#F4CE14'/>,
        <FaStar color='#F4CE14'/>,
        <FaStar color='#F4CE14'/>
      </HStack>
      ],
    name:"Andy Cohen",
    review:"The food was great. It was an awesome and lovely atmosphere to be in."
  },
  {
    id:"2",
    image:'https://bit.ly/code-beast',
    rating:[
      <HStack justify="center"> 
        <FaStar color='#F4CE14'/>,
        <FaStar color='#F4CE14'/>,
        <FaStar color='#F4CE14'/>,
        <FaStar color='#F4CE14'/>,
        <FaRegStar color='#F4CE14'/>
      </HStack>
      ],
    name:"Tariq Kubir",
    review:"Great restaurant, great food and great staff. I will be going back for sure!"
  },
  {
    id:"3",
    image:'https://bit.ly/sage-adebayo',
    rating:[
      <HStack justify="center"> 
        <FaStar color='#F4CE14'/>,
        <FaStar color='#F4CE14'/>,
        <FaStar color='#F4CE14'/>,
        <FaStar color='#F4CE14'/>,
        <FaStar color='#F4CE14'/>
      </HStack>
      ],
    name:"George Santos",
    review:"The desserts are heavenly, specially the cakes. I highly recommend!"
  },
  {
    id:"4",
    image:'https://bit.ly/prosper-baba',
    rating:[
      <HStack justify="center"> 
        <FaStar color='#F4CE14'/>,
        <FaStar color='#F4CE14'/>,
        <FaStar color='#F4CE14'/>,
        <FaStar color='#F4CE14'/>,
        <FaStarHalfAlt color='#F4CE14'/>
      </HStack>
      ],
    name:"James Hoffmann",
    review:"Reserve a table in advance, if you want to go on the weekend. It is worth it."
  }
 ])




  return (
    <Box bg="#495E57"  w="100%" height="fit-content" >
        <Heading textColor="#F4CE14" textAlign="center" paddingTop="5%" paddingBottom="4%">Testemonials</Heading>
        <HStack paddingBottom="5%">
          <TesteTemplate testemonial={testemonial}/>
        </HStack>
    </Box>
  )
}

export default Teste