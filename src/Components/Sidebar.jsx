import React from "react";
import { SidebarData } from "./SidebarData";
import "../App.css";
const Sidebar = () => {
  return (
    <div className="Sidebar" style={{bg:"blue"}} >
      <ul className="SidebarList" style={{bg:"blue"}} >
        {SidebarData.map((val, key) => {
          return (
            <li key={key} className="row">
              <div>{val.icon}</div>

              <div>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
