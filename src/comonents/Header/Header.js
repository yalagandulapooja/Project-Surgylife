import React from 'react';
import headerstyles from "./Header.module.css";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={headerstyles}>
      <div className="topbar">
      <div className={headerstyles.Header_top}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 mt-2">
                        <ul>
                            <li>
                                <a href="tel:+91 9391613058">
                                    <i className="fa-solid fa-phone-volume"></i> +91 9391613058</a>
                            </li>
                            <li>
                                <a href="mailto:poojayalagandula2.o@gmail.com">
                                    <i className="fa-solid fa-envelope"></i> poojayalagandula2.o@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 text-end">
                    <NavLink className="nav-link" to="/appointment">
                    <button className="btn btn-warning mt-1">
                      <h6>Book Appointment</h6>
                      </button></NavLink>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <nav className="navbar navbar-expand-lg p-0">
  <div className="container border-bottom">
    <a className="navbar-brand" href="#"><img src={logo} alt="Logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/treatments">Treatments</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/appointment">Book Appointment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header