import React from "react";
import "./Desktop.css"; // Create a corresponding CSS file for styling

const Desktop = () => {
  return (
    <div className="desktop">
      {/* icons */}
      <div className="desktop-icons">
        <div className="desktop-icon">📁</div>
        <div className="desktop-icon">📧</div>
        <div className="desktop-icon">🌐</div>
        <div className="desktop-icon">📷</div>
      </div>
      {/* background */}
      <div className="desktop-background">
        <div className="desktop-background-image"></div>
      </div>
    </div>
  );
};

export default Desktop;
