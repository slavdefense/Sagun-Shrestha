import React, { useState, useEffect } from "react";
import Display from "./Components/Display/Display-component";
import Navbar from "./Components/Navbar/Navbar-components";
import { Routes, Route } from "react-router";

import Work from "./Pages/Work/Work";
import AboutMe from "./Pages/Aboutme/Aboutme";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";

import ScrollToTop from "./Components/ScrollToTop/ScrollToTopOnMount";
import "./App.css";

function App() {
  const [navbar, setNavbar] = useState(false);

  const [navComponents] = useState([
    { name: "Home", url: "/" },
    { name: "Work", url: "/work" },
    { name: "About", url: "/aboutme" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <div className="App">
      <Display className="display" />
      <Navbar id="Navbar" className="navbar" navComponents={navComponents} />
      {/* <Work/>
     <AboutMe/>
     <Contact/> */}
      <Home />

      {/* <ScrollToTop/> */}

      {/* <Routes className="sticky">
       
      
      
       <Route path="/" element={<Home/>} />
       <Route path="/work" element={<Work/>}/>
       <Route path="/aboutme" element={<AboutMe/>}/>
       <Route path="/contact" element ={<Contact/>}/>
       
       <Route path="/aboutme" />
       <Route path="/contact" />

     </Routes> */}

      {/* <Work/>
      <AboutMe/>
      <Contact/> */}
    </div>
  );
}

export default App;
