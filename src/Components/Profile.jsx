import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
// import material social icons here
// put all icons in an array
export const Profile = () => {
  const profileData = [
    {
      profile: " https://placeholder.com/",
      name: "",
      location: "",
      phoneNumber: "",
    },
    {
      profile: "mitsogo-assesment/public/profile-pic-01.jpg",
      name: "nani",
      location: "",
      phoneNumber: "",
    },
    {
      profile: "mitsogo-assesment/public/profile-pic-01.jpg",
      name: "",
      location: "",
      phoneNumber: "",
    },
    {
      profile: "mitsogo-assesment/public/profile-pic-01.jpg",
      name: "",
      location: "",
      phoneNumber: "",
    },
    {
      profile: "mitsogo-assesment/public/profile-pic-01.jpg",
      name: "",
      location: "",
      phoneNumber: "",
    },
    {
      profile: "mitsogo-assesment/public/profile-pic-01.jpg",
      name: "",
      location: "",
      phoneNumber: "",
    },
  ];
  return (
    <Box border="1px solid">
      <Box border="2px solid yellow" w="fit-content"> 
        <Image src="mitsogo-assesment\public\profile-pic-01.jpgb" alt={""} />
        <Text>name</Text>
        <Flex>
          {/* map icons array here */}
          <Box>icons</Box>
        </Flex>
      </Box>
      {profileData.map((item, i) => (
        <Box key={i} border="1px solid">
          <Image src={item.profile} alt={item.name} rounded="xl"/>
          <Flex justifyContent={"space-around"}>
            <Text>{item.location}</Text>
            <Text>{item.phoneNumber}</Text>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};
