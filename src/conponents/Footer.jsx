// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-auto">
      <p>&copy; {new Date().getFullYear()} SouthCoders. All rights reserved.</p>
    </footer>
  );
};

export default Footer;