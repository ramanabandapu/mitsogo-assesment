import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { SearchBar } from "./SearchBar";
import {Navbar} from "./Navbar";
import { Profile } from "./Profile";
import DoughnutGraph from "./DoughnutGraph";
import LineGraph from "./LineGraph";
import { DataTable } from "./DataTable";
import { VideoBox } from "./VideoBox";
import "../App.css";

const sm = ` "prof prof"
"line line"
"pie pie"
"tab tab"
"vid vid"

`;
const lg = `  "line pie prof"
"line pie prof"
"line pie prof"
"line pie prof"
"line pie prof"
"tab tab prof"
"tab tab vid"
"tab tab vid"
"tab tab vid"`;

export const Dashboard = () => {
  return (
    <Box m="" bg={"#F0F0F7"}>

      <SearchBar />
      <Navbar/>
      <Grid
        gridTemplateColumns={[
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
        ]}
        gridTemplateRows={[
          "500px,100px,100px,400px,300px",
          "500px,300px,300px,400px,300px",
          "500px,300px,300px,400px,300px",
          "repeat(9, 65px)",
        ]}
        gridTemplateAreas={[sm, sm, sm, lg]}
        // border="1px solid blue"
        gridGap="10px"
      >
        <GridItem area="line" >
          <LineGraph />
        </GridItem>
        <GridItem area="pie">
          <DoughnutGraph />
        </GridItem>
        <GridItem area="prof">
          <Profile />
        </GridItem>
        <GridItem area="tab" >
          <DataTable />
        </GridItem>
        <GridItem area="vid">
          <VideoBox />
        </GridItem>
      </Grid>
    </Box>
  );
};
