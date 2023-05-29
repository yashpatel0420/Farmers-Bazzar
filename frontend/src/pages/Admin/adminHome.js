import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchAPI from "../../API/fetchData";
import AdminBar from "./adminbar";
const AdminHome = () => {
  const [items, setItems] = useState({});

  useEffect(() => {
    FetchAPI("/api/admin").then((res) => setItems(res));
  }, []);

  return (
    <>
      <AdminBar />
      <div className="admin-img">
        <img
          className="w-100"
          src={require("../../asset/img/admin.png")}
          alt="Image"
        />
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div>
              <div className="mb-3">
                <h6 className="about-us">Vendor's Information</h6>
                <h1 className="display-5">Here's all vendor's details</h1>
              </div>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Mobile No.</th>
                    <th>Email</th>

                    <th>image</th>
                  </tr>
                </thead>
                <tbody>
                  {items.vendors &&
                    items.vendors.map((vendor, ind) => (
                      <tr key={ind}>
                        <td>{ind + 1}</td>
                        <td>{vendor.firstName + " " + vendor.lastName}</td>
                        <td>{vendor.address}</td>
                        <td>{vendor.phone}</td>
                        <td>{vendor.email}</td>

                        <td>
                          <img
                            src={vendor.image ? `/${vendor.image}` : ""}
                            className="img-fluid max-height-100"
                            alt="Vendor Image"
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <Link
                to="/admin/vendor"
                className="btn btn-primary py-md-3 px-md-5"
              >
                Manage Vendor Data
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div>
              <div className="mb-3">
                <h6 className="about-us">Customer's Information</h6>
                <h1 className="display-5">Here's all Customer's details</h1>
              </div>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Mobile No.</th>
                    <th>Email</th>

                    <th>image</th>
                  </tr>
                </thead>
                <tbody>
                  {items.customers &&
                    items.customers.map((customer, ind) => (
                      <tr key={ind}>
                        <td>{ind + 1}</td>
                        <td>{customer.firstName + " " + customer.lastName}</td>
                        <td>{customer.address}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.email}</td>

                        <td>
                          <img
                            src={customer.image ? `/${customer.image}` : ""}
                            className="img-fluid max-height-100"
                            alt="customer Image"
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <Link
                to="/admin/customer"
                className="btn btn-primary py-md-3 px-md-5"
              >
                Manage Customer Data
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div>
              <div className="mb-3">
                <h6 className="about-us">Product's Information</h6>
                <h1 className="display-5">Here's all Product's details</h1>
              </div>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>price</th>
                    <th>Description</th>
                    <th>Shipping</th>

                    <th>image</th>
                  </tr>
                </thead>
                <tbody>
                  {items.products &&
                    items.products.map((product, ind) => (
                      <tr key={ind}>
                        <td>{ind + 1}</td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>{product.description}</td>
                        <td>
                          {product.delivery.shipping
                            ? "Avialablle"
                            : "Not Avaialable"}
                        </td>

                        <td>
                          <img
                            src={product.image ? `/${product.image}` : ""}
                            className="img-fluid max-height-100"
                            alt="customer Image"
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <Link
                to="/admin/product"
                className="btn btn-primary py-md-3 px-md-5"
              >
                Manage Product Data
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div>
              <div className="mb-3">
                <h6 className="about-us">Orders's Information</h6>
                <h1 className="display-5">Here's all Order's details</h1>
              </div>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Mobile No.</th>
                    <th>Address</th>
                    <th>Delivery Method</th>
                    <th>Payment Status</th>
                    <th>Amount</th>
                    <th>Order details</th>
                  </tr>
                </thead>
                <tbody>
                  {items.orders &&
                    items.orders.map((order, ind) => (
                      <tr key={ind}>
                        <td>{ind + 1}</td>
                        <td>{order.fullname}</td>
                        <td>{order.email}</td>
                        <td>{order.phone}</td>
                        <td>
                          {order.address +
                            ", " +
                            order.city +
                            ", " +
                            order.state +
                            ", " +
                            order.postalCode}
                        </td>
                        <td>
                          {order.delivery == "shipping"
                            ? `Shipping(${order.geo.distance})`
                            : order.delivery}
                        </td>
                        <td>{order.paymentStatus}</td>
                        <td>
                          $
                          {order.amount.shipping
                            ? (
                                order.amount.shipping + order.amount.cart
                              ).toFixed(2)
                            : order.amount.cart}
                        </td>
                        <td>
                          <p>
                            {order.cartItems.map(
                              (item) =>
                                `${item.name}-($${item.price}X${item.quantity}lb)\n`
                            )}
                          </p>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              <Link
                to="/admin/order"
                className="btn btn-primary py-md-3 px-md-5"
              >
                Manage Order Data
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
