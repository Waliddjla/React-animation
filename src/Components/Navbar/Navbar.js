import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">LISTE</Link>
      <Link to="/StateAnim">STATE</Link>
      <Link to="/Scroll">SCROLL</Link>
    </nav>
  );
}
