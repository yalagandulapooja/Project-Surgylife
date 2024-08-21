import React from 'react';
import footerstyles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={footerstyles}>
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <p>&copy; 2024 Elearn InfoTech.</p>
      </div>
      <div className="col-md-6">
        <p className="text-end">Designed By PoojaYalagandula...</p>
      </div>
    </div>
  </div>
    </footer>
  )
}

export default Footer;