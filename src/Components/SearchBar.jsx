import { Box, Button, Flex, Input, Select } from "@chakra-ui/react";
import React from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { SideBarM } from "./SideBarM";
export const SearchBar = () => {
  return (
    <Box h="70px" border="1px solid green">
      <Flex
        alignItems="center"
        bg="grey"
        mt="20px"
        justifyContent={"space-between"}
      >
        <Flex
          alignItems="center"
          bg="yellow"
          h="30px"
          w={["30%", "30%", "30%", "30%"]}
        >
          <Flex gap="5px" mt="5px">
            <Box mt="2px">
              <SideBarM />
            </Box>
            <ManageSearchIcon pt="2px" />
          </Flex>

          <Input
            border="1px solid blue"
            placeholder="Search transactions, invoices or help"
            fontSize="16px"
            h="25px"
            visibility={["hidden", "hidden", "hidden", "visible"]}
          />
        </Flex>
        <Flex
          bg="red"
          w={["fit-content", "fit-content", "fit-content", "10%"]}
          justifyContent={["none", "space-between"]}
          alignItems="center"
        >
          <Box pt="5px">
            <NotificationsIcon fontSize="28px" />
          </Box>

          <Box visibility={["hidden", "hidden", "hidden", "visible"]}>name</Box>
          <Box>image</Box>
        </Flex>
      </Flex>
    </Box>
  );
};
