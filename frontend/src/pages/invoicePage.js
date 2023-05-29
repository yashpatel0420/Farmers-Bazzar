import React, { useEffect, useRef } from "react";
import imgApprove from "../asset/img/approved.png";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar";

const InvoicePage = () => {
  const order = useSelector((state) => state.customer.order);
  const invoiceRef = useRef();
  const printHandler = useReactToPrint({
    content: () => invoiceRef.current,
    documentTitle: "Invoice",
  });

  const getTotoalAmount = (ord) => {
    let num = 0;
    num = ord.amount.shipping + ord.amount.cart;
    return num.toFixed(2);
  };
  return (
    <>
      <Navbar />
      <div
        className="Invoice"
        size="A4"
        ref={invoiceRef}
        // onClick={() => window.print()}
      >
        <div className="top-section">
          <div className="address">
            <div className="address-content">
              <h2>Farmers Bazzar</h2>
            </div>
          </div>
          <div className="contact">
            <div className="contact-content">
              <div className="email">
                Email: <span>farmersBazzar@gmail.com</span>
              </div>
              <div className="number">
                Number: <span>+1(123)456-7890</span>
              </div>
            </div>
          </div>
        </div>

        <div className="billing-invoice">
          <div className="title">Billing Invoice</div>
          <div className="des">
            <p className="code">id-{order._id}7</p>
            <p className="issue">
              Issued: <span>March 31, 2023</span>
            </p>
          </div>
        </div>

        <div className="billing-to">
          <div className="title"> Billing To </div>
          <div className="billed-sec">
            <div className="name">{order.fullname}</div>
            <p>{order.email}</p>
            <p>{order.phone}</p>
          </div>
          <div className="billed-sec">
            <div className="sub-title">
              {order.delivery == "shipping"
                ? "Shipping Address"
                : "Pick-Up Address"}
            </div>
            <div className="ship-add">
              {" "}
              {order.delivery == "shipping"
                ? `${order.address}, ${order.city}, ${order.state}, ${order.postalCode}`
                : "Farmmers bazzar, CF Fairview Park, 2960 Kingsway Dr, Kitchener, Ontario,canada"}{" "}
            </div>
          </div>
        </div>

        <div className="table">
          <table>
            <tbody>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
              {order.cartItems.map((item, ind) => (
                <tr key={ind}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.quantity * item.price}</td>
                </tr>
              ))}
              {/* <tr>
                <td>641e6953f3cfc4bc7a6bd8c7</td>
                <td>Potato</td>
                <td>5</td>
                <td>$5</td>
                <td>$35</td>
              </tr>
              <tr>
                <td>641e6953f3cfc4bc7a6bd8c7</td>
                <td>Pineapple</td>
                <td>10</td>
                <td>$15</td>
                <td>$170</td>
              </tr> */}
            </tbody>
          </table>
          <div className="payment">
            <div className="payment-approve">
              Payment : <img src={imgApprove} width="90px" />
            </div>
            <div className="final-total">
              Subtotal : ${order.amount.cart}
              <br />
              {order.delivery == "shipping"
                ? `Shipping Cost : $${order.amount.shipping}`
                : ""}
              <br />
              Your final total : ${getTotoalAmount(order)}
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="thanks">Thank You</div>
        </div>
      </div>
      <button
        onClick={printHandler}
        className="checkout-submit-btn btn btn-primary w-100 text-light font-weight-bold"
      >
        Print
      </button>
    </>
  );
};

export default InvoicePage;
