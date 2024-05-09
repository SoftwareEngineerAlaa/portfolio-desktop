import React from "react";
import "./Desktop.css"; // Create a corresponding CSS file for styling
import Window from "../Window/Window";

const Desktop = () => {
  const desktopIcons = [
    { icon: "💻", title: "My Computer", selected: false },
    { icon: "🗑️", title: "Recycle Bin", selected: false },
    { icon: "📁", title: "Documents", selected: false },
    { icon: "📧", title: "E-Mail", selected: false },
    { icon: "🌐", title: "Internet", selected: false },
    { icon: "🧭", title: "Compass", selected: false },
    { icon: "🖼️", title: "Gallery", selected: false },
    { icon: "🌍", title: "Maps", selected: false },
    { icon: "🎵", title: "Music", selected: false },
    { icon: "⚙️", title: "Settings", selected: false },
    { icon: "🔐", title: "Private", selected: false },
    { icon: "🌅", title: "Weather", selected: false },
  ];

  // Rest of the code
  return (
    <div className="desktop">
      <div className="opened-windows">
        <Window />
      </div>
      {/* icons */}
      <div className="desktop-icons">
        {desktopIcons.map((item, index) => (
          <div className="desktop-icon" key={index}>
            {item.icon}
            <p className="icontitle">{item.title}</p>
          </div>
        ))}
      </div>
      {/* background */}
      <div className="desktop-background">
        <div className="desktop-background-image"></div>
      </div>
    </div>
  );
};
{
  /* 🔓🔈🔉🔊🪄🎨⚡🌅🗺️🌏🌎🚀 */
}

export default Desktop;
