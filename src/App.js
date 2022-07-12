import React, { useState, useEffect, Fragment } from "react";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import EquipmentPage from "./Pages/EquipmentPage";
import EagleEyeHome from "./Pages/eagleEyeHome";
import ProjectsPage from "./Pages/ProjectsPage";

function App() {
  return (
    <>
      <Fragment>
        <div className="top-0 left-0 fixed">
          <div>
            <NavBar />
          </div>
        </div>
        <Routes>
          <Route path="/">eagleEyeHome</Route>
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/projects" element={ProjectsPage} />
        </Routes>
      </Fragment>
    </>
  );
}

export default App;
