import React from "react";
import { chakra, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FoodResult = (props) => {
    return (
        <Flex
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                bg={useColorModeValue("white", "gray.800")}
                mx={{ lg: 8 }}
                display={{ lg: "flex" }}
                maxW={{ lg: "5xl" }}
                shadow={{ lg: "lg" }}
                rounded={{ lg: "lg" }}
            >
                <Box w={{ lg: "50%" }}>
                    <Box
                        objectPosition="center center"
                        h={{ base: 64, lg: "full" }}
                        rounded={{ lg: "lg" }}
                        bgSize="cover"
                        backgroundImage={props.image}
                    ></Box>
                </Box>

                <Box
                    py={12}
                    px={6}
                    maxW={{ base: "xl", lg: "5xl" }}
                    w={{ lg: "50%" }}
                >
                    <chakra.h2
                        fontSize={{ base: "2xl", md: "3xl" }}
                        color={useColorModeValue("gray.800", "white")}
                        fontWeight="bold"
                    >
                        <Link to={props.link}>{props.title}</Link>
                    </chakra.h2>
                    <Text
                        mt={4}
                        color={useColorModeValue("gray.600", "gray.400")}
                        noOfLines={3}
                    >
                        {props.description}
                    </Text>

                    <Box mt={8}></Box>
                </Box>
            </Box>
        </Flex>
    );
};

export default FoodResult;
