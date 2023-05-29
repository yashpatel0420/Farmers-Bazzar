import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import imgMenu from "../../asset/img/menu.png";
import { AdminSignOutStart } from "../../redux/Admin/Admin.reducer";
const AdminBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
      <div className="admin-logo">
        <Link to="admin.html">
          <h1>
            <span>Farmers</span>Bazzar
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon">
            <img src={imgMenu} />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            <Link to="/admin" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/admin/vendor" className="nav-item nav-link">
              Vendors
            </Link>
            <Link to="/admin/customer" className="nav-item nav-link">
              Customers
            </Link>
            <Link to="/admin/product" className="nav-item nav-link">
              Products
            </Link>
            <Link to="/admin/order" className="nav-item nav-link">
              Orders
            </Link>
            <Link
              to="/"
              onClick={() => {
                dispatch(AdminSignOutStart());
              }}
              className="nav-item nav-link"
            >
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminBar;
