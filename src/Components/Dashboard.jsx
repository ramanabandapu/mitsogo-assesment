import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { SearchBar } from "./SearchBar";
import { Profile } from "./Profile";
export const Dashboard = () => {
  return (
    <div >
      <SearchBar />
      <Profile />
    </div>
  );
};
