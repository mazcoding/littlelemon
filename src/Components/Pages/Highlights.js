import React from 'react'
import CardsTemp from './CardsTemp'
import { useState } from 'react'

import { Heading, VStack, HStack, Box , Text, Button} from '@chakra-ui/react'
function Highlights() {

  const [infos, setInfos] = useState([
    {id: "1",
     url: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fEdyZWVrJTIwU2FsYWR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
     alt: 'Greek Salad',
     title: "Greek Salad",
     body: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
     price: "12.99"
    },

    {id: "2",
     url: 'https://images.unsplash.com/photo-1594978583693-8dfdfc93f052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJ1Y2hldHRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
     alt: 'Bruchetta',
     title: "Bruchetta",
     body: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
     price: "5.99"
    },

    {id: "3",
     url: 'https://images.unsplash.com/photo-1541781550486-81b7a2328578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
     alt: 'Dessert',
     title: "Lemon Dessert",
     body: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
     price: "5"
    }
 ])

  return (
    <Box marginTop="10%">
      <HStack paddingLeft={"15%"} margin="5" justify="space-between" paddingRight={"15%"}>
        <Heading fontFamily="Markazi Text Medium" textColor="#495E57">This Week's Specials!</Heading>
        <Button fontFamily="Markazi Text Medium" fontSize="sm" width="fit-content" bg="#F4CE14" textColor="#495E57" borderRadius="16">Online Menu</Button>
      </HStack>
      <CardsTemp infos={infos}/>
    </Box>
  )
}

export default Highlights