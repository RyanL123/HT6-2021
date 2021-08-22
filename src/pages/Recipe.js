import React, { useState } from "react";
import {
    chakra,
    Box,
    Button,
    Image,
    Flex,
    Text, 
    Stack,
    StackDivider,
    Checkbox,
    Heading,
    Center,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";

import {Link } from "react-router-dom";

const Recipe = (props) =>{
    const [ servings, setServings ] = useState(1)

    return (
        <Center
            w="100%"
        >
            <Flex
                w="80%"
                direction={["column", null, "row"]}
                justifyContent="space-around"
                my="2rem"
            >
                <Flex 
                    direction="column"
                    
                >
                    <Heading
                    textAlign={["center", null, "left"]}
                    >
                        Food Name
                    </Heading>
                    <Image 
                        src={props.image}
                        fallbackSrc="https://via.placeholder.com/150"
                        boxSize="50vh"
                        borderRadius="5%"
                        alignSelf="center"
                    />
                    <Box mt="2rem">
                        <Text fontSize="2xl">
                            Ingredients                         
                        </Text>
                        <Flex direction="row" my="1rem">
                            <Text fontSize="xl" mr="1rem">
                                Servings                      
                            </Text>                          
                            <NumberInput defaultValue={servings} min={0} w="20%">
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </Flex>

                        <Stack spacing={4} direction="column">
                            <Checkbox colorScheme="green" size="lg" defaultIsChecked>
                                Item 1
                            </Checkbox>
                            <Checkbox colorScheme="green" size="lg" defaultIsChecked>
                                Item 2
                            </Checkbox>
                            <Checkbox colorScheme="green" size="lg" defaultIsChecked>
                                Item 3
                            </Checkbox>
                            <Checkbox colorScheme="green" size="lg" defaultIsChecked>
                                Item 4
                            </Checkbox>
                        </Stack>
                    </Box>
                </Flex>
                <Box w={["90%", null, "50%"]} mt={["2rem", null, "0"]}>
                    <Text fontSize="2xl">
                        Instructions
                    </Text>
                    <Stack spacing={4} direction="column" divider={<StackDivider borderColor="gray.200" />}>
                        <Checkbox colorScheme="green" size="lg">
                            Step 1
                        </Checkbox>
                        <Text fontSize="lg">
                            Instructions for step 1
                        </Text>
                        <Checkbox colorScheme="green" size="lg">
                            Step 2
                        </Checkbox>
                        <Text fontSize="lg">
                            Instructions for step 2
                        </Text>
                        <Checkbox colorScheme="green" size="lg">
                            Step 3
                        </Checkbox>
                        <Text fontSize="lg">
                            Instructions for step 3
                        </Text>
                        <Checkbox colorScheme="green" size="lg">
                            Step 4
                        </Checkbox>
                        <Text fontSize="lg">
                            Instructions for step 4
                        </Text>
                    </Stack>
                    <Button mt="2rem" onClick={console.log("clicked")}>
                        <Link to="/dashboard">
                            I made this recipe!
                        </Link>
                    </Button>
                </Box>
            </Flex>
        </Center>
    )
}

export default Recipe