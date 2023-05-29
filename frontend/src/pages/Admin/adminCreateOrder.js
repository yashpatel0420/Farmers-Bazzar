import React, { useEffect, useState } from "react";
import FetchAPI from "../../API/fetchData";
import AdminBar from "./adminbar";
const AdminCreateOrder = () => {
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    FetchAPI("/api/customers").then((res) => {
      setCustomer(res);
    });
  }, []);
  return (
    <>
      <AdminBar />
      <div class="container p-0">
        <h1 class="h-100 d-flex align-items-center justify-content-center">
          Create Order
        </h1>
        <div class="h-100 d-flex align-items-center justify-content-center">
          <div class="col-md-7 col-xl-8">
            <div class="tab-content">
              <div
                class="tab-pane fade show active"
                id="account"
                role="tabpanel"
              >
                <div class="card">
                  <div class="card-header">
                    <h5 class="card-title mb-0">Order information</h5>
                  </div>
                  <div class="card-body">
                    <form class="AddCustomer_form">
                      <div class="form-row">
                        <div class="AddCustomer">
                          <label for="inputAddress">Customer</label>
                          <select class="AddCustomer_SelectStyle">
                            {customer &&
                              customer.map((vend) => (
                                <option value={`${vend._id}`} key={vend._id}>
                                  {vend.firstName + " " + vend.lastName}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="AddCustomer">
                          <label for="inputFirstName">Full Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputFirstName"
                            placeholder="Full name"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="AddCustomer">
                          <label for="inputEmail4">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                          />
                        </div>
                        <div class="AddCustomer">
                          <label for="inputLastName">Phone Number</label>
                          <input
                            type="Phone Number"
                            class="form-control"
                            id="inputLastName"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="AddCustomer">
                          <label for="inputFirstName">Address</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputFirstName"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="AddCustomer">
                          <label for="inputAddress">City</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress"
                            placeholder="City"
                          />{" "}
                        </div>
                        <div class="AddCustomer">
                          <label for="inputCity">State </label>
                          <select
                            id="inputState"
                            class="AddCustomer_SelectStyle"
                          >
                            <option selected="">Choose...</option>
                            <option>AB</option>
                            <option>BC</option>
                            <option>ON</option>
                            <option>QC</option>
                            <option>MB</option>
                            <option>SK</option>
                          </select>
                        </div>
                        <div class="AddCustomer">
                          <label for="inputCity">Postal Code</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputCity"
                          />
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="AddCustomer">
                          <label for="inputAddress">Delivery</label>
                          <select class="AddCustomer_SelectStyle">
                            <option>Shipping</option>
                            <option>Pickup</option>
                          </select>
                        </div>
                        <div class="AddCustomer">
                          <label for="inputCity">Shipping Amount </label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputCity"
                          />
                        </div>
                        <div class="AddCustomer">
                          <label for="inputCity">Cart Total</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputCity"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="AddCustomer">
                          <label for="inputFirstName">Payment Status</label>
                          <select class="AddCustomer_SelectStyle">
                            <option>Pending</option>
                            <option>Approved</option>
                          </select>
                        </div>
                      </div>

                      <div class="AddCustomer">
                        <button type="submit"> Add Order</button>
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

export default AdminCreateOrder;
