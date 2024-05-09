import React from "react";
import "./Window.css";

function Window() {
  return (
    <div className="window unselected">
      <div className="window-titlebar">
        <div className="window-title">💻Window Title</div>
        <div className="window-controls">
          <div className="window-control unselected">-</div>
          <div className="window-control unselected">□</div>
          <div className="window-control unselected">x</div>
        </div>
      </div>
      <div className="window-content selected">
        <p className="welcome unselected">Welcome to my Protfolio</p>
      </div>
    </div>
  );
}

export default Window;
