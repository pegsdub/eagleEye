import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import EquipmentPage from "./Pages/EquipmentPage";
import ProjectsPage from "./Pages/ProjectsPage";
import EagleEyeHome from "./Pages/eagleEyeHome";
import ServicePage from "./Pages/ServicePage";
import AdminPage from "./Pages/AdminPage";

export default function App() {
  return (
    <>
      <div className="fixed">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<EagleEyeHome />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}
