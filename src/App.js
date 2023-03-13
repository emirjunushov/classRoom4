import React from "react";
import NavbarBot from "./components/NavbarBot/NavbarBot";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBlock from "./components/AddBlock/AddBlock";
import Contact from "./components/Contact/Contact";
import Favorites from "./components/Favorites/Favorites";
import AboutUs from "./components/AboutUs/AboutUs";

import HomeBlo from "./components/HomeBlo/HomeBlo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarBot />
        <Routes>
          <Route path="/" element={<HomeBlo />} />
          <Route path="/add-product" element={<AddBlock />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
