import React from 'react'
import { Box,
    Wrap,
    Heading,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
    Card,
    Image,
    Text,
    CardBody,
    Spacer,
    Stack,
    HStack,
    Flex,
    Grid} from '@chakra-ui/react'
    import { FaMotorcycle } from 'react-icons/fa';

function CardsTemp({infos}) {

  return (
    <Flex wrap="wrap"  width="100%"  paddingLeft="10%"  paddingRight="10%" justify={"center"}>
        {infos.map((info) => (
            <Card
            margin={4}
            key= {info.id}
            width="25%"
            minW="min-content"
            borderTopRadius="16"
            bg="#EDEFEE"  >
                <CardBody>
                    <Image
                    src={info.url}
                    alt={info.alt}
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <HStack justify="space-between">
                           <Heading size='md' textColor="#495E57">{info.title}</Heading>
                           <Text color='#EE9972' fontSize='2xl'>
                        ${info.price}
                    </Text>
                    </HStack>
                    <Text>
                        {info.body}
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <HStack>
                    <Button bg="#F4CE14" textColor="#495E57">
                        Order a Delivery
                    </Button>
                    <FaMotorcycle/>
                    </HStack>
                </CardFooter>
            </Card>
        ))}
    </Flex>
  )
}

export default CardsTemp