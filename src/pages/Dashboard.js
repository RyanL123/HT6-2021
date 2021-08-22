import React, { useState, useEffect } from "react";
import {
    Box,
    Grid,
    Button,
    Heading,
    Avatar,
    Input,
    FormControl,
    FormLabel,
} from "@chakra-ui/react";
import firebase from "../firebase";

// get current logged in user
var user = JSON.parse(localStorage.getItem("user"));

const Dashboard = () => {
    const [ingredients, setIngredients] = useState([]);
    const ref = firebase.firestore().collection("users").doc(user.uid);
    const handleChange = (e) => {
        const name = e.target.name;
        const amount = e.target.value == "" ? 0 : e.target.value;

        const updatedIngredients = ingredients.map((ingredient) =>
            ingredient.name === name
                ? { ...ingredient, amount: parseInt(amount) }
                : ingredient
        );
        // update changed ingredient to new amount
        setIngredients(updatedIngredients);
        ref.update({ ingredients: updatedIngredients });
    };
    // get data from firebase and store into state
    useEffect(() => {
        ref.get().then(function (doc) {
            if (doc.exists) {
                setIngredients(doc.data().ingredients);
            } else {
                firebase.firestore().collection("users").doc(user.uid).set({});
            }
        });
    }, []);
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
            <Button
                mt="20px"
                onClick={() => {
                    localStorage.clear();
                    window.location.href = "/";
                }}
            >
                Log Out
            </Button>
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                {ingredients.map((ingredient) => (
                    <FormControl key={ingredient.name}>
                        <FormLabel>{ingredient.name}</FormLabel>
                        <Input
                            value={ingredient.amount}
                            name={ingredient.name}
                            type="number"
                            onChange={handleChange}
                        ></Input>
                    </FormControl>
                ))}
            </Grid>
        </Box>
    );
};

export default Dashboard;
