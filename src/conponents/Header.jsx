import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="text-2xl font-bold">SouthCoders</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
