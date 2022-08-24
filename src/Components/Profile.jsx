import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "../App.css";
// import material social icons here
// put all icons in an array
export const Profile = () => {
  const profileData = [
    {
      profile:
        "https://github.com/ramanabandapu/mitsogo-assesment/blob/main/profile-pic-03.jpg?raw=true",
      name: "Drew James",
      location: "United States",
      phoneNumber: "8715674877",
    },
    {
      profile:
        "https://github.com/ramanabandapu/mitsogo-assesment/blob/main/profile-pic-02.jpg?raw=true",
      name: "Bavid Kames",
      location: "United States",
      phoneNumber: "8715674877",
    },
    {
      profile:
        "https://github.com/ramanabandapu/mitsogo-assesment/blob/main/profile-pic-04.jpg?raw=true",
      name: "Lavid Emes",
      location: "United States",
      phoneNumber: "8715674877",
    },
  ];
  return (
    <Box  w={"100%"} h="100%" bg={"#FFFFFF"} mb={"20px"}>
      <Box w="fit-content" m="auto" h="fit-content" textAlign={"center"} mt="15px">
        <Image
          src="https://github.com/ramanabandapu/mitsogo-assesment/blob/main/profile-pic-01.jpg?raw=true"
          alt={"profile"}
          rounded="200px"
          w="96px"
          h="96px"
          ml="15px"
        />
        <Text fontSize={"15px"} fontWeight="600">
          Nick Herasimenka
        </Text>
        <Text fontSize={"12px"} color="grey">
          United States
        </Text>
        <Flex
          color="grey"
          w="60%"
          justifyContent={"space-between"}
          m="auto"
          pt="10px"
        >
          <TwitterIcon fontSize="10px" />
          <FacebookRoundedIcon fontSize="10px" />
          <LinkedInIcon fontSize="10px" />
          <WhatsAppIcon fontSize="10px" />
        </Flex>
      </Box>
      <Flex justifyContent={"space-between"} p="15px">
        <Text>Our Users</Text>
        <Text>
          <MoreVertIcon />
        </Text>
      </Flex>
      {profileData.map((item, i) => (
        <Flex mb="10px" ml="5px">
          <Box>
            <Image
              src={item.profile}
              alt={item.name}
              rounded="200px"
              w="50px"
              h="50px"
            />
          </Box>
          <Box h="fit-content" ml="10px" mt="10px" w="80%">
            <Text fontSize={"13px"} fontWeight="bold">
              {item.name}
            </Text>
            <Flex w="100%" justifyContent={"space-between"}>
              <Text fontSize={"12px"}>{item.location}</Text>
              <Text fontSize={"12px"}>Mob:{item.phoneNumber}</Text>
            </Flex>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};
