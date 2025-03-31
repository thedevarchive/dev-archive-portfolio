import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/App.css";

//Navbar component
//Users can access other sections through here
export function Navbar() {
  const activeStyle = {
    fontWeight: "bold"
  }

  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : null)}>Home</NavLink></li>
        <li><NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : null)}>About</NavLink></li>
        <li><NavLink to="/skills" style={({ isActive }) => (isActive ? activeStyle : null)}>Skills</NavLink></li>
        <li><NavLink to="/projects" style={({ isActive }) => (isActive ? activeStyle : null)}>Projects</NavLink></li>
        <li><NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : null)}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}
