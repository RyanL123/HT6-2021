import { Heading, Flex, Text, Image, Box } from "@chakra-ui/react";
import React from "react";
import LazyHero from "react-lazy-hero";
import logo from "../assets/logo.png";
import dottech from "../assets/dottech.png";

const Hero = (props) => {
    return (
        <div>
            <LazyHero
                imageSrc="https://cdn.discordapp.com/attachments/772518562576728084/878822825115385916/HD-Food-Backgrounds.png"
                minHeight="75vh"
                opacity={0.4}
            >
                <Box display="flex" flexDirection="row" alignItems="center">
                    <Image src={logo} width="100px" height="100px"></Image>
                    <Heading size="4xl" color="#262626" ml="20px">
                        FoodAdd
                    </Heading>
                    <Image src={dottech} height="54px"></Image>
                </Box>
            </LazyHero>

            <Flex
                direction="column"
                align="center"
                maxW={{ xl: "1200px" }}
                m="0 auto"
                {...props}
            >
                <Text as="span" fontSize="22px" color="grey" padding="50px">
                    Use this website to{" "}
                    <Text as="span" fontWeight="bold" color="black">
                        manage
                    </Text>{" "}
                    your ingredients and{" "}
                    <Text as="span" fontWeight="bold" color="black">
                        follow
                    </Text>{" "}
                    recipes!
                </Text>
            </Flex>
        </div>
    );
};

export default Hero;
