import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import isObjectEmpty from "../components/isObjectEmpty";
import { useDispatch, useSelector } from "react-redux";
import FetchAPI from "../API/fetchData";
import { signInStart, signOutStart } from "../redux/vendor/vendor.reducer";
import {
  customerSignInStart,
  customerSignOutStart,
} from "../redux/customer/customer.reducer";
import ImageUpload from "../components/ImageUpload";
const ProfilePage = () => {
  const currentVendor = useSelector((state) => state.vendor.currentVendor);
  const currentCustomer = useSelector((state) => state.customer.customer);
  const dispatch = useDispatch();
  const [isImage, isSetImage] = useState(false);
  const [modePass, setModePass] = useState(false);
  const [password, setPassword] = useState({ password: "", cnfmPassword: "" });

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    address: "",
    description: "",
    email: "",
    phone: "",
    password: "",
    image: "",
  });

  const [editMode, setEditMode] = useState(false);

  const saveinfoWithImage = () => {
    let data = new FormData();
    data.append("product", JSON.stringify(profile));
    data.append("file", profile.image);

    fetch(`/api/${profile.owner}/editWithImage`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        if (profile.owner === "customers") {
          setProfile(res);
          dispatch(customerSignInStart(res));
        }
        if (profile.owner === "vendors") {
          setProfile(res);
          dispatch(signInStart(res));
        }
      });
  };
  const onUpdatePassword = () => {
    if (password.password !== password.cnfmPassword) {
      return alert("Password and confirm password doen't match");
    }

    FetchAPI(`/api/${profile.owner}/edit`, "POST", {
      _id: profile._id,
      password: password.password,
    }).then((res) => {
      alert("Password is upadated, Please Login");
      if (profile.owner === "customers") {
        dispatch(customerSignOutStart());
      }
      if (profile.owner === "vendors") {
        dispatch(signOutStart());
      }
    });
  };
  const saveUserInfo = () => {
    setEditMode(false);
    isImage
      ? saveinfoWithImage()
      : FetchAPI(`/api/${profile.owner}/edit`, "POST", profile).then((res) => {
          if (profile.owner === "customers") {
            dispatch(customerSignInStart(res));
          }
          if (profile.owner === "vendors") {
            dispatch(signInStart(res));
          }
        });
  };

  useEffect(() => {
    if (!isObjectEmpty(currentCustomer)) {
      setProfile({ ...currentCustomer, owner: "customers" });
    }
    if (!isObjectEmpty(currentVendor)) {
      setProfile({ ...currentVendor, owner: "vendors" });
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="container p-0">
        <h1 className="h3 mb-3">Settings</h1>
        <div className="row">
          <div className="col-md-5 col-xl-4">
            <div className="profile-card">
              <div className="profile-card-header">
                <h5 className="card-title mb-0">Profile Settings</h5>
              </div>
              <div className="list-group list-group-flush" role="tablist">
                <a
                  className={`list-group-item list-group-item-action ${
                    modePass ? "" : "active"
                  }`}
                  data-toggle="list"
                  href="#account"
                  role="tab"
                  onClick={() => setModePass(false)}
                >
                  Account
                </a>
                <a
                  className={`list-group-item list-group-item-action ${
                    modePass ? "active" : ""
                  }`}
                  data-toggle="list"
                  href="#password"
                  role="tab"
                  onClick={() => setModePass(true)}
                >
                  Password
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-xl-8">
            <div className="tab-content">
              <div
                className={`tab-pane fad:e ${modePass ? "" : "show active"}`}
                id="account"
                role="tabpanel"
              >
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0">User information</h5>
                    {editMode ? (
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={saveUserInfo}
                      >
                        Save changes
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={() => setEditMode(true)}
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="form-group">
                          <label htmlFor="inputUsername">Contact Number</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputUsername"
                            placeholder="Username"
                            value={profile.phone}
                            onChange={(e) =>
                              setProfile({
                                ...profile,
                                phone: e.target.value,
                              })
                            }
                            disabled={editMode ? false : true}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputUsername">Biography</label>
                          <textarea
                            rows="2"
                            className="form-control"
                            id="inputBio"
                            placeholder="Tell something about yourself"
                            value={profile.description}
                            onChange={(e) =>
                              setProfile({
                                ...profile,
                                description: e.target.value,
                              })
                            }
                            disabled={editMode ? false : true}
                          ></textarea>
                        </div>

                        <div className="form-group col-md-6">
                          <label htmlFor="inputFirstName">First name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputFirstName"
                            placeholder="First name"
                            value={profile.firstName}
                            onChange={(e) =>
                              setProfile({
                                ...profile,
                                firstName: e.target.value,
                              })
                            }
                            disabled={editMode ? false : true}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputLastName">Last name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputLastName"
                            placeholder="Last name"
                            value={profile.lastName}
                            onChange={(e) =>
                              setProfile({
                                ...profile,
                                lastName: e.target.value,
                              })
                            }
                            disabled={editMode ? false : true}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="inputEmail4">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                            value={profile.email}
                            onChange={(e) =>
                              setProfile({
                                ...profile,
                                email: e.target.value,
                              })
                            }
                            disabled={editMode ? false : true}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputAddress">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                            value={profile.address}
                            onChange={(e) =>
                              setProfile({
                                ...profile,
                                address: e.target.value,
                              })
                            }
                            disabled={editMode ? false : true}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center">
                          {editMode ? (
                            <ImageUpload
                              setFile={(url) =>
                                setProfile({ ...profile, image: url })
                              }
                              file={profile.image}
                              imageButtonclick={() => isSetImage(true)}
                              displayButton={editMode}
                            />
                          ) : (
                            <div className="cmp-image-upload__preview">
                              <img
                                src={profile.image ? `/${profile.image}` : ""}
                                alt="preview"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fad:e ${modePass ? "show active" : ""}`}
                id="password"
                role="tabpanel"
              >
                <div className="card">
                  <div className="card-body">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="card-title mb-0">User information</h5>

                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={onUpdatePassword}
                      >
                        Save Password
                      </button>
                    </div>
                    <form>
                      <div className="form-group">
                        <label htmlFor="inputPasswordNew">New password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPasswordNew"
                          value={password.password}
                          onChange={(e) =>
                            setPassword({
                              ...password,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputPasswordNew2">
                          Confirm password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPasswordNew2"
                          value={password.cnfmPassword}
                          onChange={(e) =>
                            setPassword({
                              ...password,
                              cnfmPassword: e.target.value,
                            })
                          }
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
