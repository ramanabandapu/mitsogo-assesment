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
        
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text>ACME</Text>
          </DrawerHeader>

          <DrawerBody>
            {SidebarData.map((item,i) => (
              <Flex gap="10px" key={i}>
                <Box>{item.icon}</Box>
                <Box>{item.title}</Box>
              </Flex>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
