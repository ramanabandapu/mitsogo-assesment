import { Image, Box, Button, Flex, Input, Select } from "@chakra-ui/react";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from "@mui/icons-material/Notifications";
import "../App.css";
import { SideBarM } from "./SideBarM";
export const SearchBar = () => {
  return (
    <Box h="70px" >
      <Flex
        alignItems="center"
        bg="#FFFFFF"
        mt="20px"
        justifyContent={"space-between"}
      >
        <Flex
          alignItems="center"
          // bg="yellow"
          h="30px"
          w={["30%", "30%", "30%", "30%"]}
        >
          <Flex gap="5px" mt="5px">
            <Box mt="2px">
              <SideBarM />
            </Box>
            <SearchIcon pt="2px" />
          </Flex>

          <Input
            border="none"
            placeholder="Search transactions, invoices or help"
            fontSize="16px"
            h="25px"
            visibility={["hidden", "hidden", "hidden", "visible"]}
          />
        </Flex>
        <Flex
          // bg="red"
          w={["fit-content", "fit-content", "fit-content", "13%"]}
          h={"50px"}
          justifyContent={["none", "space-between"]}
          alignItems="center"
        >
          <Box >
            <NotificationsIcon />

          </Box>

          <Box  fontSize="10px"  pl={"20px"} visibility={["hidden", "hidden", "hidden", "visible"]}>JohnDoe</Box>
          <Box  fontSize="16px" pl={"20px"}>
          <Image
          src="https://github.com/ramanabandapu/mitsogo-assesment/blob/main/profile-pic-01.jpg?raw=true"
          alt={"profile"}
          rounded="50px"
          h={"50%"}
          w={"50%"}/>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
