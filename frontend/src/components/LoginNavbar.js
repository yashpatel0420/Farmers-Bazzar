import React, { useState } from "react";
import { Link } from "react-router-dom";

import imgMenu from "../asset/img/menu.png";

const LoginNavbar = () => {
  const [collapse, setCollapse] = useState(false);

  const [dropdown, setDropDown] = useState({
    customer: "",
    vendor: "",
    loginBox: false,
  });
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5 sticky"
      style={{ position: "sticky" }}
    >
      <div className="logo">
        <h1>
          <span>Farmers</span>Bazzar
        </h1>
      </div>
      <button
        className={`navbar-toggler ${collapse ? " " : "collapsed"}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-label="menu button"
        onClick={() => (collapse ? setCollapse(false) : setCollapse(true))}
      >
        <span className="navbar-toggler-icon">
          <img src={imgMenu} alt="Menu Image" />
        </span>
      </button>
      <div
        className={`collapse navbar-collapse ${collapse ? "show" : ""}`}
        id="navbarCollapse"
      >
        <div className="navbar-nav mx-auto py-0">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/customer/login" className="nav-item nav-link">
            Customer Login
          </Link>
          <Link to="/login" className="nav-item nav-link">
            Vendor Login
          </Link>
          <Link to="/admin" className="nav-item nav-link">
            Admin Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LoginNavbar;
