import React, { useState, useEffect } from "react";
import { chakra, Flex } from "@chakra-ui/react";
import Pagination from "../components/Pagination";
import FoodResult from "../components/FoodResult";

const food = {
    title: "Spicy beef ramen",
    image:
        "https://thewoksoflife.com/wp-content/uploads/2016/02/beef-noodle-soup-7-1.jpg",
    link: "/recipe",
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};

const Search = () => {
    return (
        <Flex direction="column">
            <FoodResult {...food}></FoodResult>
            <FoodResult {...food}></FoodResult>
            <FoodResult {...food}></FoodResult>
            <FoodResult {...food}></FoodResult>
            <Pagination />
        </Flex>
    );
};

export default Search;
