import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import AdminBar from "./adminbar";

const AdminCreateUser = () => {
  const usertype = useParams().user;
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    description: "",
  });
  const onCreateUser = (e) => {
    e.preventDefault();

    fetch(`/api/${usertype}/create`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          navigate(`/admin/${usertype.slice(0, -1)}`);
          return alert("Sucessfully Register");
        }
      });
  };

  return (
    <>
      <AdminBar />
      <div className="container p-0">
        <h1 className="h-100 d-flex align-items-center justify-content-center">
          Create {usertype.charAt(0).toUpperCase() + usertype.slice(1, -1)}{" "}
          Account
        </h1>
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="col-md-7 col-xl-8">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="account"
                role="tabpanel"
              >
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">
                      {usertype.charAt(0).toUpperCase() + usertype.slice(1, -1)}{" "}
                      Personal information
                    </h5>
                  </div>
                  <div className="card-body">
                    <form className="AddCustomer_form">
                      <div className="form-row">
                        <div className="AddCustomer">
                          <label htmlFor="inputFirstName">First name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputFirstName"
                            placeholder="First name"
                            value={user.firstName}
                            onChange={(e) =>
                              setUser({ ...user, firstName: e.target.value })
                            }
                          />
                        </div>
                        <div className="AddCustomer">
                          <label htmlFor="inputLastName">Last name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputLastName"
                            placeholder="Last name"
                            value={user.lastName}
                            onChange={(e) =>
                              setUser({ ...user, lastName: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="AddCustomer">
                          <label htmlFor="inputEmail4">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                            value={user.email}
                            onChange={(e) =>
                              setUser({ ...user, email: e.target.value })
                            }
                          />
                        </div>
                        <div className="AddCustomer">
                          <label htmlFor="inputLastName">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputLastName"
                            placeholder="Password"
                            value={user.password}
                            onChange={(e) =>
                              setUser({ ...user, password: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="AddCustomer">
                          <label htmlFor="inputAddress">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            value={user.address}
                            onChange={(e) =>
                              setUser({ ...user, address: e.target.value })
                            }
                            placeholder="1234 Main St"
                          />{" "}
                        </div>
                        <div className="AddCustomer">
                          <label htmlFor="inputCity">Phone Number</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputCity"
                            value={user.phone}
                            onChange={(e) =>
                              setUser({ ...user, phone: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="AddCustomer">
                          <label
                            className="AddCustomer_label"
                            htmlFor="inputCity"
                          >
                            Description
                          </label>
                          <textarea
                            className="form-control"
                            id="inputCity"
                            value={user.description}
                            onChange={(e) =>
                              setUser({ ...user, description: e.target.value })
                            }
                          ></textarea>
                        </div>
                      </div>

                      <div className="AddCustomer">
                        <button type="button" onClick={onCreateUser}>
                          {" "}
                          Add{" "}
                          {usertype.charAt(0).toUpperCase() +
                            usertype.slice(1, -1)}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCreateUser;
