import React, { useState } from "react";
import Display from "./Components/Display/Display-component";
import Navbar from "./Components/Navbar/Navbar-components";

import Home from "./Pages/Home/Home";

import "./App.css";

function App() {
  const [navComponents] = useState([
    { name: "Home", url: "/",id:44 },
    { name: "Work", url: "/work",id:55 },
    { name: "About", url: "/aboutme",id:66 },
    { name: "Contact", url: "/contact",id:88 },
  ]);

  return (
    <div className="App">
      <Display className="display" />
      <Navbar id="Navbar" className="navbar" navComponents={navComponents} />

      <Home />
    </div>
  );
}

export default App;
