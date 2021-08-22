import React, { useState, useEffect } from "react";
import {
    chakra,
    Flex, 
} from "@chakra-ui/react";
import Pagination from "../components/Pagination";
import FoodResult from "../components/FoodResult";

const tomatoAndEggs = {
    "title": "Tomato and Eggs",
    "image": "https://christieathome.com/wp-content/uploads/2020/10/Chinese-Tomato-Egg-Stirfry-18-1-scaled.jpg", 
    "link": "/recipe", 
    "description": "Chinese Tomato Egg Stir-Fry. A popular Chinese dish that is deliciously sweet, tangy, and savoury. It's a great side dish for supper or lunch and is very easy to make at home!."
}

const tomatoOmellete = {
    "title": "Tomato Omellete",
    "image": "https://hurrythefoodup.com/wp-content/uploads/2017/03/Tomato-Omelette-7.jpg", 
    "link": "/recipe", 
    "description": "Preparing an omelette shows the chef many things, including your plating abilities (how you present a dish) and how well you can cook a delicate ingredient (the egg). We’ve opted for this tomato omelette version for a little more kick."
}

const spaghettiMarinara = {
    "title": "Spaghetti Marinara with Eggs",
    "image": "https://pinchofyum.com/wp-content/uploads/2014/05/spaghetti-6.jpg", 
    "link": "/recipe", 
    "description": "Poached eggs on spaghetti with homemade tomato sauce issss basically the best thing ever. And I’ve been eating it all week. Just try to stop that dinner train, I dare you. Either move outta the way or jump on this one because here it comes."
}

const Search = () => {
    return (
        <Flex direction="column">
            <FoodResult {...tomatoOmellete}></FoodResult>
            <FoodResult {...tomatoAndEggs}></FoodResult>
            <FoodResult {...spaghettiMarinara}></FoodResult>

            <Pagination />
        </Flex>
    )
}

  
  export default Search