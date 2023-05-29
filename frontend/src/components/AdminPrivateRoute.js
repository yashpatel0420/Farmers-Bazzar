import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
const AdminPrivateRoute = ({ children }) => {
  const admin = useSelector((state) => state.admin.admin);
  if (!admin._id) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

export default AdminPrivateRoute;
