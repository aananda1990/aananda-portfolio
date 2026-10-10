import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import "./App.css";
import "./assets/css/style.css";

// id -> component mapping. Naya section add karna ho to
// bas yahan aur Sidebar.jsx ke NAV_ITEMS me entry daal do.
const SECTIONS = {
  home: Home,
  about: About,
  portfolio: Portfolio,
  contact: Contact,
  chat: Contact, // placeholder, apna Chat component bana lena
};

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const ActiveComponent = SECTIONS[activeSection];

  return (
    <div className="app">
      <main className="content">
      <div
          key={activeSection}
          className="page-transition"
        >
          <ActiveComponent onSelect={setActiveSection} />
        </div>
        
        {/* <ActiveComponent onSelect={setActiveSection} /> */}
      </main>

      <Sidebar activeSection={activeSection} onSelect={setActiveSection} />
    </div>
  );
}
