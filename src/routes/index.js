import React from "react";
import {
  BrowserRouter, Route,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../components/Menu";
import UnitsPage from "../pages/Units";
import UnitDetail from "../pages/UnitDetail";


const Router = () => {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="units" element={<UnitsPage />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="unit/:id" element={<UnitDetail />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
