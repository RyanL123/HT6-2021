import React, { useState, useEffect } from "react";
import {
    chakra,
    Box,
    Flex,
    Text,
    useColorModeValue,
    Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import firebase from "../firebase";

// get current logged in user
var user = JSON.parse(localStorage.getItem("user"));

function calculateMatch(recipeIngredients, ingredients) {
    let num = 0;
    let denom = 0;
    // nested loop to match ingredients
    for (let i = 0; i < recipeIngredients.length; i++) {
        let name = recipeIngredients[i].name;
        denom += parseFloat(recipeIngredients[i].amount);
        for (let j = 0; j < ingredients.length; j++) {
            if (ingredients[j].name == name) {
                num += Math.min(
                    parseFloat(ingredients[j].amount),
                    parseFloat(recipeIngredients[i].amount)
                );
            }
        }
    }
    return Math.round((num * 100) / denom);
}

const FoodResult = (props) => {
    const [ingredients, setIngredients] = useState([]);
    const [recipeIngredients, setRecipeIngredients] = useState([]);
    const ref = firebase.firestore();
    useEffect(() => {
        ref.collection("users")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                if (doc.exists) {
                    setIngredients(doc.data().ingredients);
                } else {
                    firebase
                        .firestore()
                        .collection("users")
                        .doc(user.uid)
                        .set({ ingredients: [] });
                }
            });
        ref.collection("recipes")
            .doc(props.id)
            .get()
            .then(function (doc) {
                setRecipeIngredients(doc.data().data.ingredients);
            });
    }, []);
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
                    <Box mt={8}>
                        <Heading size="md@">
                            {calculateMatch(recipeIngredients, ingredients)}%
                            Match
                        </Heading>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

export default FoodResult;
