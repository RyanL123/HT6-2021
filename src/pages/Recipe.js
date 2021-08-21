import React from "react";
import {
    chakra,
    Box,
    Image,
    Flex,
    Text, 
    Stack,
    StackDivider,
    Checkbox,
    Heading,
    Center
} from "@chakra-ui/react";

const Recipe = () =>{
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
                    <Heading>
                        Food Name
                    </Heading>
                    <Image 
                        src="https://thewoksoflife.com/wp-content/uploads/2016/02/beef-noodle-soup-7-1.jpg" 
                        fallbackSrc="https://via.placeholder.com/150"
                        boxSize="50vh"
                        borderRadius="5%"
                    />
                    <Text fontSize="2xl">
                        Ingredients
                    </Text>
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
                </Flex>
                <Box w={["90%", null, "50%"]}>
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
                </Box>
            </Flex>
        </Center>
    )
}

export default Recipe