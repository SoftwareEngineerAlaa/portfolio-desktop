import React, { useState } from "react";
import "./Taskbar.css";

const Taskbar = () => {
  const [selected, setSelected] = useState(true);
  const getTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const time = `${hours}:${minutes} ${ampm}`;
    return time;
  };

  const time = getTime();

  const handleTaskbarItemClick = () => {
    setSelected(!selected);
  };

  return (
    <div className="taskbar">
      <button className="start-button unselected">🛸Start</button>
      <div className="taskbar-icons">
        <div
          className={`taskbar-icon ${selected ? "selected" : "unselected"}`}
          onClick={handleTaskbarItemClick}
        >
          📁 Welcome
        </div>
        <div className="taskbar-icon unselected">📁 Recent</div>
        <div className="taskbar-icon unselected">📧 E-Mail</div>
        <div className="taskbar-icon unselected">🌐 Browser</div>
        <div className="taskbar-icon unselected">🖼️ Gallery</div>
      </div>
      <div className="taskbar-clock selected">{time}</div>
    </div>
  );
};

export default Taskbar;
