import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import FetchAPI from "../../API/fetchData";
import { AdminSignInStart } from "../../redux/Admin/Admin.reducer";
import { customerSignOutStart } from "../../redux/customer/customer.reducer";
import { signOutStart } from "../../redux/vendor/vendor.reducer";
import LoginNavbar from "../../components/LoginNavbar";
const AdminLogin = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const [cred, setCred] = useState({ email: "", password: "" });

  const adminsignin = (e) => {
    e.preventDefault();
    console.log(cred);
    FetchAPI("/api/admin/login", "POST", cred).then((res) => {
      if (res.success) {
        disptach(signOutStart());
        disptach(customerSignOutStart());
        disptach(AdminSignInStart(res.admin));
        return navigate("/admin");
      } else {
        alert(res.msg);
      }
    });
  };
  return (
    <>
      <LoginNavbar />

      <div>
        <div className="w-wrapper-body">
          <div className="d-flex justify-content-center w-100 zxc ">
            <div className="w-wrapper">
              <div className="w-logo">
                <img src={require("../../asset/img/logo.png")} alt="" />
              </div>
              <div className="text-center mt-4 name">ADMIN PANEL</div>
              <form className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                  <span className="far fa-user"></span>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Username"
                    value={cred.email}
                    onChange={(e) =>
                      setCred({ ...cred, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-field d-flex align-items-center">
                  <span className="fas fa-key"></span>
                  <input
                    type="password"
                    name="password"
                    id="pwd"
                    placeholder="Password"
                    value={cred.password}
                    onChange={(e) =>
                      setCred({ ...cred, password: e.target.value })
                    }
                  />
                </div>
                <button className="btn mt-3" onClick={adminsignin}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
