import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
export const SidebarData = [
  {
    title: "Home",
    icon: <HomeOutlinedIcon />,
    link: "./home",
  },

  {
    title: "Dashboard",
    icon: <DashboardCustomizeOutlinedIcon />,
    link: "./home",
  },

  {
    title: "Inbox",
    icon: <ArchiveOutlinedIcon />,
    link: "./home",
  },

  {
    title: "Products",
    icon: <ListAltOutlinedIcon />,
    link: "./home",
  },

  {
    title: "Admin",
    icon: <SettingsOutlinedIcon />,
    link: "./home",
  },
];
