import React from "react";
import "./Desktop.css"; // Create a corresponding CSS file for styling

const Desktop = () => {
  return (
    <div className="desktop">
      {/* icons */}
      <div className="desktop-icons">
        <div className="desktop-icon">
          <p className="icon">💻</p>
          <p className="icontitle">My Computer</p>
        </div>
        <div className="desktop-icon">
          🗑️
          <p className="icontitle">Recycle Bin</p>
        </div>
        <div className="desktop-icon">
          📁
          <p className="icontitle">Documents</p>
        </div>
        <div className="desktop-icon">
          📧
          <p className="icontitle">E-Mail</p>
        </div>
        <div className="desktop-icon">
          🌐
          <p className="icontitle">Internet</p>
        </div>
        <div className="desktop-icon">
          🧭
          <p className="icontitle">Compass</p>
        </div>
        <div className="desktop-icon">
          🖼️
          <p className="icontitle">Gallery</p>
        </div>
        <div className="desktop-icon">
          🌍
          <p className="icontitle">Maps</p>
        </div>
        <div className="desktop-icon">
          🎵
          <p className="icontitle">Music</p>
        </div>
        <div className="desktop-icon">
          ⚙️
          <p className="icontitle">Settings</p>
        </div>
        <div className="desktop-icon">
          🔐
          <p className="icontitle">Private</p>
        </div>
        {/* 🔓🔈🔉🔊🪄🎨⚡🌅🗺️🌏🌎🚀 */}
        <div className="desktop-icon">
          🌅
          <p className="icontitle">Weather</p>
        </div>
      </div>
      {/* background */}
      <div className="desktop-background">
        <div className="desktop-background-image"></div>
      </div>
    </div>
  );
};

export default Desktop;
