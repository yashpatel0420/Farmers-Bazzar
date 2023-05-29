import React, { useState } from "react";
import imgLogo1 from "../asset/img/logo1.jpeg";
import imgs3 from "../asset/img/s3.png";
import imgImg from "../asset/img/img.png";
import imgImg1 from "../asset/img/img1.png";
import FetchAPI from "../API/fetchData";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { customerSignInStart } from "../redux/customer/customer.reducer";
import { signOutStart } from "../redux/vendor/vendor.reducer";
import { Link } from "react-router-dom";
import LoginNavbar from "../components/LoginNavbar";
import { AdminSignOutStart } from "../redux/Admin/Admin.reducer";

const CustomerLogin = () => {
  const [mode, setMode] = useState(false);
  const [loginState, setLoginState] = useState({ email: "", password: "" });
  const disptach = useDispatch();
  const navigate = useNavigate();
  const [signupState, setSignupStae] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const onLogin = (e) => {
    e.preventDefault();
    FetchAPI("/api/customers/login", "POST", loginState).then((res) => {
      if (res.success) {
        disptach(signOutStart());
        disptach(AdminSignOutStart());
        disptach(customerSignInStart(res.Customer));
        return navigate("/");
      }
      alert(res.msg);
    });
  };
  const onSignUp = async (e) => {
    e.preventDefault();

    fetch("/api/customers/create", {
      method: "POST",
      body: JSON.stringify(signupState),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setMode(false);
          return alert("Sucessfully Register");
        }
        alert("Error In Singing UP");
      });
  };

  return (
    <>
      <LoginNavbar />
      <main className={`v-main ${mode ? "sign-up-mode" : ""}`}>
        <div className="v-box">
          <div className="v-inner-box">
            <div className="v-forms-wrap">
              <form
                className="v-form sign-in-form"
                style={{ justifyContent: "center" }}
                action="index.html"
                autoComplete="off"
              >
                <div className="v-logo">
                  <Link to="/">
                    <img src={imgLogo1} alt="easyclass" />
                    <h4>Farmer's Bazzar</h4>
                  </Link>
                </div>

                <div className="v-heading v-block">
                  <h2>Welcome Back</h2>
                  <h6>Not registred yet?</h6>
                  <span onClick={() => setMode(true)} className="v-toggle">
                    Sign up
                  </span>
                </div>

                <div className="actual-form">
                  <div className="v-input-wrap">
                    <input
                      type="text"
                      value={loginState.email}
                      onChange={(e) =>
                        setLoginState({ ...loginState, email: e.target.value })
                      }
                      placeholder="email"
                      minLength="4"
                      className="v-input-field"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="v-input-wrap">
                    <input
                      type="password"
                      placeholder="password"
                      value={loginState.password}
                      onChange={(e) =>
                        setLoginState({
                          ...loginState,
                          password: e.target.value,
                        })
                      }
                      minLength="4"
                      className="v-input-field"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <button className="v-sign-btn" onClick={onLogin}>
                    Login
                  </button>
                </div>
              </form>

              <form
                className="v-form sign-up-form"
                action="index.html"
                autoComplete="off"
              >
                <div className="v-logo">
                  <img src={imgLogo1} alt="easyclass" />
                  <h4>Farmer's Bazzar</h4>
                </div>

                <div className="v-heading">
                  <h2>Get Started</h2>
                  <h6>Already have an account?</h6>
                  <span onClick={() => setMode(false)} className="v-toggle">
                    Login
                  </span>
                </div>

                <div className="actual-form">
                  <div className="v-input-wrap">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={signupState.firstName}
                      onChange={(e) =>
                        setSignupStae({
                          ...signupState,
                          firstName: e.target.value,
                        })
                      }
                      minLength="4"
                      className="v-input-field"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="v-input-wrap">
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={signupState.lastName}
                      onChange={(e) =>
                        setSignupStae({
                          ...signupState,
                          lastName: e.target.value,
                        })
                      }
                      minLength="4"
                      className="v-input-field"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="v-input-wrap">
                    <input
                      type="email"
                      placeholder="Email"
                      value={signupState.email}
                      onChange={(e) =>
                        setSignupStae({ ...signupState, email: e.target.value })
                      }
                      className="v-input-field"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="v-input-wrap">
                    <input
                      type="password"
                      placeholder="Password"
                      value={signupState.password}
                      onChange={(e) =>
                        setSignupStae({
                          ...signupState,
                          password: e.target.value,
                        })
                      }
                      minLength="4"
                      className="v-input-field"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="v-input-wrap">
                    <input
                      type="text"
                      placeholder="Phone"
                      value={signupState.phone}
                      onChange={(e) =>
                        setSignupStae({ ...signupState, phone: e.target.value })
                      }
                      className="v-input-field"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="v-input-wrap">
                    <input
                      type="text"
                      placeholder="Address"
                      value={signupState.address}
                      onChange={(e) =>
                        setSignupStae({
                          ...signupState,
                          address: e.target.value,
                        })
                      }
                      className="v-input-field"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <button className="v-sign-btn" onClick={onSignUp}>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            <div className="v-carousel">
              <div className="v-images-wrapper">
                <img src={imgs3} className="v-image v-img-1 show" alt="" />
                <img src={imgImg1} className="v-image v-img-2" alt="" />
                <img src={imgImg} className="v-image v-img-3" alt="" />
              </div>

              <div className="v-text-slider">
                <div className="v-text-wrap">
                  <div className="v-text-group">
                    <h2>Buy local fresh products</h2>
                    <h2>Keep your money local!</h2>
                    <h2>Locally grown..right from Farmer!</h2>
                  </div>
                </div>

                <div className="v-bullets">
                  <span className="active" data-value="1"></span>
                  <span data-value="2"></span>
                  <span data-value="3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CustomerLogin;
