import React, { useState, useEffect } from "react";
import {
    Box,
    Grid,
    Heading,
    Avatar,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    FormControl,
    FormLabel,
} from "@chakra-ui/react";

var user = JSON.parse(localStorage.getItem("user"));

const Dashboard = () => {
    const [ingredients, setIngredients] = useState([
        { name: "tomato", amount: 0 },
        { name: "egg", amount: 0 },
        { name: "bacon", amount: 0 },
        { name: "bagel", amount: 0 },
    ]);
    return (
        <Box
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            my="2rem"
        >
            <Avatar
                name=""
                size="xl"
                src={JSON.parse(localStorage.getItem("user")).photoURL}
            />
            <Heading mt="5px" mb="20px">
                {user.displayName}
            </Heading>
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                {ingredients.map((ingredient) => (
                    <FormControl>
                        <FormLabel>{ingredient.name}</FormLabel>
                        <NumberInput defaultValue={ingredient.amount} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                ))}
            </Grid>
        </Box>
    );
};

export default Dashboard;
