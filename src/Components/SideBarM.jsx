import React from "react";
import "../App.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { SidebarData } from "./SidebarData";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";

export const SideBarM = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <MenuOpenIcon />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
        bg={"#43425D"}
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="#3C3B54">
            <Text color="white" letterSpacing={"5px"} fontSize="16px">
              ACME
            </Text>
          </DrawerHeader>
          <DrawerBody bg={"#43425D"} p="0px">
            {SidebarData.map((item, i) => (
              <Flex
                gap="13px"
                key={i}
                border="1px solid red"
                p={"10px"}
                className="hover-effect"
              >
                <Box color="grey">{item.icon}</Box>
                <Box color="white">{item.title}</Box>
              </Flex>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
