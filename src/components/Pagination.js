import React from "react";
import { chakra, Flex, useColorModeValue, Icon } from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
    const PagButton = (props) => {
        const activeStyle = {
            bg: useColorModeValue("brand.600", "brand.500"),
            color: useColorModeValue("white", "gray.200"),
        };
        return (
            <chakra.button
                mx={1}
                px={4}
                py={2}
                rounded="md"
                bg={useColorModeValue("teal.100", "teal.700")}
                color={useColorModeValue("gray.700", "gray.200")}
                opacity={props.disabled && 0.6}
                _hover={!props.disabled && activeStyle}
                cursor={props.disabled && "not-allowed"}
                {...(props.active && activeStyle)}
            >
                {props.children}
            </chakra.button>
        );
    };
    return (
        <Flex
            bg={useColorModeValue("white", "gray.600")}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Flex>
                <PagButton>
                    <Icon
                        as={IoIosArrowBack}
                        color={useColorModeValue("gray.700", "gray.200")}
                        boxSize={4}
                    />
                </PagButton>
                <PagButton>1</PagButton>
                <PagButton>2</PagButton>
                <PagButton>3</PagButton>
                <PagButton>4</PagButton>
                <PagButton>5</PagButton>
                <PagButton>
                    <Icon
                        as={IoIosArrowForward}
                        color={useColorModeValue("gray.700", "gray.200")}
                        boxSize={4}
                    />
                </PagButton>
            </Flex>
        </Flex>
    );
};

export default Pagination;
