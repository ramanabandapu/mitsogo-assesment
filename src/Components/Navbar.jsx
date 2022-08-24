import React from 'react'
import { Box, Flex } from "@chakra-ui/react"
import "../App.css";
export const Navbar = () => {
  return (

    // verbose
    <Box h={"45px"} display="flex" alignItems="center" justifyContent="space-between">

        <Box fontSize={"20px"} fontFamily={"Source Sans Pro, Semibold"} pl={"10px"} >Overview</Box>
        <Box color={"#FFFFFF"} h={"80%"} w={"100px"} bg={"#6763E3"} textAlign={"center"} pt={"7px"} mr={"20px"}>Add Funds    +</Box>

      
    </Box>
    
    // shorthand using the `Flex` component
    // <Flex align="center" justify="center">
    //   Flex Container
    // </Flex>
  );
};
