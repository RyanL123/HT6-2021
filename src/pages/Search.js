import React from "react";
import { Flex } from "@chakra-ui/react";
import Pagination from "../components/Pagination";
import FoodResult from "../components/FoodResult";

// hard coded cause we ran out of time
const tomatoAndEggs = {
    title: "Tomato and Eggs",
    image: "https://christieathome.com/wp-content/uploads/2020/10/Chinese-Tomato-Egg-Stirfry-18-1-scaled.jpg",
    link: "/recipe/5JglkB1rEZcuVbtxTbk5",
    description:
        "Chinese Tomato Egg Stir-Fry. A popular Chinese dish that is deliciously sweet, tangy, and savoury. It's a great side dish for supper or lunch and is very easy to make at home!.",
    id: "5JglkB1rEZcuVbtxTbk5",
};

const tomatoOmelet = {
    title: "Tomato Omelette",
    image: "https://hurrythefoodup.com/wp-content/uploads/2017/03/Tomato-Omelette-7.jpg",
    link: "/recipe/PvEaBZvu4GC7ZjAcIs3I",
    description:
        "Preparing an omelette shows the chef many things, including your plating abilities (how you present a dish) and how well you can cook a delicate ingredient (the egg). We’ve opted for this tomato omelette version for a little more kick.",
    id: "PvEaBZvu4GC7ZjAcIs3I",
};

const spaghettiMarinara = {
    title: "Spaghetti Marinara with Eggs",
    image: "https://pinchofyum.com/wp-content/uploads/2014/05/spaghetti-6.jpg",
    link: "/recipe/cxdmqR5bEOlDx0tuj11a",
    description:
        "Poached eggs on spaghetti with homemade tomato sauce issss basically the best thing ever. And I’ve been eating it all week. Just try to stop that dinner train, I dare you. Either move outta the way or jump on this one because here it comes.",
    id: "cxdmqR5bEOlDx0tuj11a",
};

const Search = () => {
    return (
        <Flex direction="column">
            <FoodResult {...tomatoOmelet}></FoodResult>
            <FoodResult {...tomatoAndEggs}></FoodResult>
            <FoodResult {...spaghettiMarinara}></FoodResult>

            <Pagination />
        </Flex>
    );
};

export default Search;
