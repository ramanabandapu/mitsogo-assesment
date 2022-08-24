import React from "react";
import { SidebarData } from "./SidebarData";
import "../App.css";
const Sidebar = () => {
  return (
    <div className="Sidebar" style={{border:"2px solid red", textAlign:"left"}}>
      <ul className="SidebarList">
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
