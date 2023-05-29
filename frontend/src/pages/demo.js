import React from "react";
import { useDispatch } from "react-redux";
import FetchAPI from "../API/fetchData";
import Paypal from "../components/Paypal";
import {
  AdminSignInStart,
  AdminSignOutStart,
} from "../redux/Admin/Admin.reducer";

// var distance = require("google-distance");

export default function App() {
  const disptach = useDispatch();

  const adminsignin = () => {
    FetchAPI("/api/admin/login", "POST", {
      email: "admin@gmail.com",
      password: "admin@123",
    }).then((res) => disptach(AdminSignInStart(res)));
  };
  return (
    <div>
      <button onClick={adminsignin}>signing</button>
    </div>
  );
}
