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
    InputRightAddon,
    InputGroup,
    Select,
    useToast,
} from "@chakra-ui/react";
import firebase from "../firebase";

// get current logged in user
var user = JSON.parse(localStorage.getItem("user"));

const Dashboard = () => {
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [newUnit, setNewUnit] = useState("");
    const toast = useToast();
    const ref = firebase.firestore().collection("users").doc(user.uid);
    const handleChange = (e) => {
        const name = e.target.name;
        const amount = e.target.value == "" ? 0 : e.target.value;

        // find the ingredient that changed
        const updatedIngredients = ingredients.map((ingredient) =>
            ingredient.name === name
                ? { ...ingredient, amount: parseInt(amount) }
                : ingredient
        );
        // update changed ingredient to new amount
        setIngredients(updatedIngredients);
        ref.update({ ingredients: updatedIngredients });
    };
    // add new ingredient created by user to dashboard and firebase
    function addIngredient() {
        const ingredient = {
            name: newIngredient.toLowerCase(),
            amount: 0,
            unit: newUnit,
        };
        // make sure ingredient has name and unit
        if (newIngredient === "") {
            toast({
                title: "Invalid name",
                description: "Your ingredient must have a name!",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } else if (newUnit === "") {
            toast({
                title: "Invalid unit",
                description: "Your ingredient must have a unit!",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Ingredient Added!",
                description: `Ingredient ${newIngredient} has been added!`,
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            setNewIngredient("");
            setNewUnit("");
            var updatedIngredients = ingredients;
            updatedIngredients.push(ingredient);
            setIngredients(updatedIngredients);
            ref.update({ ingredients: updatedIngredients });
        }
    }
    // get data from firebase and store into state
    useEffect(() => {
        ref.get().then(function (doc) {
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
    }, []);
    return (
        <Box
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            my="2rem"
            px="5vw"
        >
            <Grid templateColumns="2fr 1fr" gap={6}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
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
                        colorScheme="red"
                    >
                        Log Out
                    </Button>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-evenly"
                >
                    <FormLabel>Add Ingredient</FormLabel>
                    <Input
                        placeholder="e.g tomato"
                        value={newIngredient}
                        onChange={(e) => setNewIngredient(e.target.value)}
                    />
                    <Select
                        placeholder="Select Unit"
                        value={newUnit}
                        onChange={(e) => setNewUnit(e.target.value)}
                    >
                        <option value="ea">ea</option>
                        <option value="mL">mL</option>
                        <option value="L">L</option>
                        <option value="lbs">lbs</option>
                        <option value="pt">pt</option>
                        <option value="tsp">tsp</option>
                        <option value="C">C</option>
                        <option value="mg">mg</option>
                        <option value="g">g</option>
                        <option value="Tbsp">Tbsp</option>
                    </Select>
                    <Button colorScheme="green" onClick={() => addIngredient()}>
                        Add
                    </Button>
                </Box>
            </Grid>
            <Grid templateColumns="repeat(4, 1fr)" gap={6} my="50px">
                {ingredients.map((ingredient) => (
                    <FormControl key={ingredient.name}>
                        <FormLabel>{ingredient.name}</FormLabel>
                        <InputGroup>
                            <Input
                                value={ingredient.amount}
                                name={ingredient.name}
                                type="number"
                                onChange={handleChange}
                            ></Input>
                            <InputRightAddon children={ingredient.unit} />
                        </InputGroup>
                    </FormControl>
                ))}
            </Grid>
        </Box>
    );
};

export default Dashboard;
