import React, { useEffect, useState } from "react";
import FetchAPI from "../../API/fetchData";
import AdminBar from "./adminbar";
import getPagination from "../../components/getPagination";
import { Link } from "react-router-dom";
const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, rows: 5 });

  const fetchOrder = () => FetchAPI("/api/order").then((res) => setOrders(res));
  useEffect(() => {
    fetchOrder();
  }, []);
  let data = getPagination(orders, pagination.rows, pagination.page);
  const onDeleteOrder = (id) => {
    FetchAPI("/api/order/delete", "POST", { id }).then((res) => {
      fetchOrder();
      alert(res);
    });
  };
  return (
    <>
      <AdminBar />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div>
              <div className="mb-3">
                <h6 className="about-us">Order's Information</h6>
                <h1 className="display-5">Here's all Order's details</h1>
              </div>
              <div className="d-flex justify-content-between rouded">
                <div className="show">
                  <p>Show :</p>
                  <select
                    value={pagination.rows}
                    onChange={(e) =>
                      setPagination({ ...pagination, rows: e.target.value })
                    }
                  >
                    <option></option>
                    <option>5</option>
                    <option>10</option>
                  </select>
                  &nbsp;&nbsp;
                  <p>entries</p>
                </div>
                <div>
                  <Link to="/admin/createOreder" className="btn btn-success ">
                    Create Order
                  </Link>
                </div>
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
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((order, ind) => (
                      <tr key={ind}>
                        <td>
                          {(pagination.page - 1) * pagination.rows + ind + 1}
                        </td>
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
                        <td>
                          <button className="btn btn-success rounded m-1">
                            Edit
                          </button>
                          <button
                            className="btn btn-success rounded m-1"
                            onClick={() => onDeleteOrder(order._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="col-sm-12">
                <nav>
                  <ul className="pagination">
                    {[
                      ...Array(
                        Math.ceil(orders.length / pagination.rows)
                      ).keys(),
                    ].map((e) => (
                      <li
                        key={e}
                        className={`page-item ${
                          pagination.page === e + 1 ? "active" : ""
                        }`}
                        onClick={() =>
                          setPagination({ ...pagination, page: e + 1 })
                        }
                      >
                        <a className="page-link">{e + 1}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrders;
