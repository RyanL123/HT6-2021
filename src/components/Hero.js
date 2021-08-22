import { Heading, Flex, Text } from "@chakra-ui/react";
import React from "react";
import LazyHero from "react-lazy-hero";

const Hero = (props) => {
    return (
        <div>
            <LazyHero
                imageSrc="https://t3.ftcdn.net/jpg/02/54/20/88/360_F_254208823_NXcV5RCcWJ1vgSuWjhPqIpPmqXIyBrDO.jpg"
                minHeight="75vh"
            >
                <Heading size="4xl" color="#000000">
                    FoodAdd
                </Heading>
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
