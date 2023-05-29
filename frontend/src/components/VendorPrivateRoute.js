import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
const VendorPrivateRoute = ({ children }) => {
  const currentVendor = useSelector((state) => state.vendor.currentVendor);
  if (!currentVendor._id) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default VendorPrivateRoute;
