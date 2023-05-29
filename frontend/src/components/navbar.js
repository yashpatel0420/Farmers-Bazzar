import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import imgLogo from "../asset/img/logo.png";
import imgMenu from "../asset/img/menu.png";
import { customerSignOutStart } from "../redux/customer/customer.reducer";
import { signOutStart } from "../redux/vendor/vendor.reducer";

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);
  const currentVendor = useSelector((state) => state.vendor.currentVendor);
  const customer = useSelector((state) => state.customer.customer);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <img className="imgLogo" src={imgLogo} alt="logo"></img>
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
          {!currentVendor._id ? (
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
          ) : (
            ""
          )}
          {currentVendor._id ? (
            <Link
              to={`/vendor/${currentVendor._id}`}
              className="nav-item nav-link"
            >
              My Products
            </Link>
          ) : (
            <Link to="/products" className="nav-item nav-link">
              Products
            </Link>
          )}

          {!currentVendor._id ? (
            <Link to="/vendors" className="nav-item nav-link">
              Vendors
            </Link>
          ) : (
            ""
          )}

          {currentVendor && currentVendor._id ? (
            <Link to="/product-add-form" className="nav-item nav-link">
              Add Product
            </Link>
          ) : (
            ""
          )}
          {!currentVendor._id ? (
            <Link to="/aboutUs" className="nav-item nav-link">
              About us
            </Link>
          ) : (
            ""
          )}
          {cart.length > 0 ? (
            <Link to="/cart" className="nav-item nav-link">
              Cart ({cart.length})
            </Link>
          ) : (
            ""
          )}
          {customer && customer._id ? (
            <li
              className={`nav-item dropdown ${
                dropdown.customer === "value" ? " show" : ""
              }`}
            >
              <Link
                className="nav-link nav-item dropdown-toggle text-primary text-primary"
                style={{ color: "#1D632E" }}
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() =>
                  dropdown.customer
                    ? setDropDown({ ...dropdown, customer: "" })
                    : setDropDown({ ...dropdown, customer: "value" })
                }
              >
                {customer.firstName + " " + customer.lastName}
              </Link>

              <div
                className={`dropdown-menu ${
                  dropdown.customer === "value" ? " show" : ""
                }`}
                aria-labelledby="navbarDropdown"
              >
                <Link to="/profile" className="nav-item nav-link text-primary">
                  Profile
                </Link>
                <Link
                  className="nav-item nav-link text-primary"
                  onClick={() => dispatch(customerSignOutStart())}
                >
                  Logout
                </Link>
              </div>
            </li>
          ) : (
            // <Link to="/customer/login" className="nav-item nav-link">
            //   Login
            // </Link>
            ""
          )}

          {currentVendor._id ? (
            <li
              className={`nav-item dropdown ${
                dropdown.vendor === "value" ? " show" : ""
              }`}
            >
              <a
                className="nav-link dropdown-toggle text-primary"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() =>
                  dropdown.vendor
                    ? setDropDown({ ...dropdown, vendor: "" })
                    : setDropDown({ ...dropdown, vendor: "value" })
                }
              >
                {currentVendor.firstName + " " + currentVendor.lastName}
              </a>

              <div
                className={`dropdown-menu ${
                  dropdown.vendor === "value" ? " show" : ""
                }`}
                aria-labelledby="navbarDropdown"
              >
                <Link to="/profile" className="nav-item nav-link text-primary ">
                  Profile
                </Link>
                <Link
                  className="nav-item nav-link text-primary"
                  onClick={() => dispatch(signOutStart())}
                >
                  Logout
                </Link>
              </div>
            </li>
          ) : (
            ""
          )}

          {currentVendor._id || customer._id ? (
            ""
          ) : (
            <li
              className={`nav-item dropdown ${
                dropdown.loginBox ? " show" : ""
              }`}
            >
              <a
                className="nav-link dropdown-toggle text-primary"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() =>
                  dropdown.vendor
                    ? setDropDown({ ...dropdown, loginBox: false })
                    : setDropDown({ ...dropdown, loginBox: true })
                }
              >
                Login
              </a>

              <div
                className={`dropdown-menu ${dropdown.loginBox ? " show" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                <Link
                  to="/customer/login"
                  className="nav-item nav-link text-primary "
                >
                  Customer
                </Link>
                <Link className="nav-item nav-link text-primary" to="/login">
                  Vendor
                </Link>
                <Link
                  className="nav-item nav-link text-primary"
                  to="/admin/login"
                >
                  Admin
                </Link>
              </div>
            </li>
            // <Link to="/customer/login" className="nav-item nav-link">
            //   Login
            // </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
