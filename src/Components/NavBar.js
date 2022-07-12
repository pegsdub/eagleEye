import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="h-screen w-32 text-white bg-orange-200 border-solid border-r-2 rounded-r-3xl drop-shadow-xl">
      <Link to="/" className="text-center">
        <h2 className=" py-8">eagleEyeLogo</h2>
      </Link>
      <NavLink className="text-center" to="/equipment">
        <h2 className=" py-8">Equipment</h2>
      </NavLink>
      <NavLink to="/projects">
        <h2 className="text-center py-8">Projects</h2>
      </NavLink>
      <NavLink to="/service">
        <h2 className="text-center py-8">Service</h2>
      </NavLink>
      <NavLink to="/admin">
        <h2 className="text-center py-8">Admin</h2>
      </NavLink>
    </nav>
  );
};

export default NavBar;
