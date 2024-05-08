import React from "react";
import Desktop from "../Desktop/Desktop";
import Taskbar from "../Taskbar/Taskbar";
import oldPCimg from "../../assets/Old_PC.png";
import "./Windows95.css";

function Windows95() {
  return (
    <div className="Windows95">
      <img className="oldPCimg" src={oldPCimg} alt="Old PC" />
      <div className="OS">
        <Desktop />
        <Taskbar />
      </div>
    </div>
  );
}

export default Windows95;
