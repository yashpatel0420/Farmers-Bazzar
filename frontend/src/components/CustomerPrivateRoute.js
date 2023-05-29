import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
const CustomerPrivateRoute = ({ children }) => {
  const customer = useSelector((state) => state.customer.customer);
  if (!customer._id) {
    return <Navigate to="/customer/login" replace />;
  }
  return children;
};

export default CustomerPrivateRoute;
