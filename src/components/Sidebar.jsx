import React, { useContext } from "react";
import {
  Home,
  User,
  Briefcase,
  Mail,
  MessageSquare,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "portfolio", label: "Portfolio", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
  // { id: "chat", label: "Chat", icon: MessageSquare },
];

const Sidebar = ({ activeSection, onSelect }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="header">
        <ul id="desktop-nav" class="icon-menu d-none- d-lg-block">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <li
              key={id}
              className={`icon-box desktop-nav-element ${
                activeSection === id ? "active" : ""
              }`}
              onClick={() => onSelect(id)}
              aria-label={label}
              aria-current={activeSection === id ? "page" : undefined}
              title={label}
            >
              <span className="menu_icon">
                <Icon size={20} />
              </span>
              {/* <i class="fa fa-envelope-open"></i> */}

              <div>
                <h2>{label}</h2>
              </div>
            </li>
          ))}
         
        </ul>
      </div>
      {/* dark/light toggle button */}
      <div className="theme_toggle_div">
      <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
      </div>
      
    </>
  );
};

export default Sidebar;
