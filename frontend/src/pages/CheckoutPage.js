import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import fetchDistance from "../API/fetchDistance";
import { useDispatch, useSelector } from "react-redux";
import { CalculateTotal } from "../redux/cart/utils";
import Paypal from "../components/Paypal";
import FetchAPI from "../API/fetchData";
import { setOrder } from "../redux/customer/customer.reducer";
import { useNavigate } from "react-router";
const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const customer = useSelector((state) => state.customer.customer._id);
  const dispatch = useDispatch();
  let stateRef = useRef();
  const navigate = useNavigate();

  const [state, setState] = useState({
    customer,
    fullname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    delivery: "pickUp",
    cartItems: cart,
    amount: {
      shipping: 0,
      cart: parseFloat((CalculateTotal(cart) * 1.03).toFixed(2)),
      total: 0,
    },
    geo: {
      distance: "",
      time: "",
    },
    paymentStatus: "",
  });
  stateRef.current = state;
  // console.log(state);

  const getTotalAmount = (e) => {
    return (
      stateRef.current.amount.cart + stateRef.current.amount.shipping
    ).toFixed(2);
  };
  const createOrder = () => {
    setState(stateRef.current);

    FetchAPI("/api/order/create", "POST", stateRef.current).then((res) => {
      if (res.success) dispatch(setOrder(res.order));
      return navigate("/invoice");
    });
  };
  const onDelivaryChange = (e) => {
    // console.log("inside select", state);
    if (!state.address) return alert("please enter correct address");
    if (!state.city) return alert("please enter correct city");
    if (!state.state) return alert("please enter correct state");

    if (e.target.value === "shipping") {
      fetchDistance(`${state.address}, ${state.city}, ${state.state}`).then(
        (res) =>
          setState({
            ...state,
            delivery: "shipping",
            geo: {
              distance: (res.distance.value / 1000).toFixed(2),
              time: res.duration.text,
            },
            amount: {
              ...state.amount,
              shipping: parseFloat((res.distance.value / 2000).toFixed(2)),
            },
          })
      );
    } else {
      return setState({
        ...state,
        delivery: "pickUp",
        amount: {
          ...state.amount,
          shipping: 0,
        },
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="checkout-container">
        <form action="">
          <div className="checkout-row">
            <div className="checkout-col">
              <h3 className="checkout-title">billing address</h3>
              <div className="checkout-inputBox">
                <span>Full name :</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  aria-label="name"
                  value={state.fullname}
                  onChange={(e) =>
                    setState({ ...state, fullname: e.target.value })
                  }
                />
              </div>
              <div className="checkout-inputBox">
                <span>Email :</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="email"
                  value={state.email}
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
                />
              </div>
              <div className="checkout-inputBox">
                <span>Mobile Number :</span>
                <input
                  type="number"
                  placeholder="Enter your mobile number"
                  aria-label="email"
                  value={state.phone}
                  onChange={(e) =>
                    setState({ ...state, phone: e.target.value })
                  }
                />
              </div>
              <div className="checkout-inputBox">
                <span>Address :</span>
                <input
                  type="text"
                  placeholder="Enter your address"
                  aria-label="address"
                  value={state.address}
                  onChange={(e) =>
                    setState({ ...state, address: e.target.value })
                  }
                />
              </div>
              <div className="checkout-inputBox">
                <span>City :</span>
                <input
                  type="text"
                  placeholder="Enter your city"
                  aria-label="city"
                  value={state.city}
                  onChange={(e) => setState({ ...state, city: e.target.value })}
                />
              </div>
              <div className="checkout-flex">
                <div className="checkout-inputBox">
                  <span>State :</span>
                  <input
                    type="text"
                    placeholder="Enter your state"
                    aria-label="state"
                    value={state.state}
                    onChange={(e) =>
                      setState({ ...state, state: e.target.value })
                    }
                  />
                </div>
                <div className="checkout-inputBox">
                  <span>Postal code :</span>
                  <input
                    type="text"
                    placeholder="Enter your postal-code"
                    aria-label="zip-code"
                    value={state.postalCode}
                    onChange={(e) =>
                      setState({ ...state, postalCode: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="checkout-inputBox">
                <span>Delivery Method :</span>
                <select value={state.delivery} onChange={onDelivaryChange}>
                  <option value="pickUp">Pick Up</option>
                  <option value="shipping">Shipping</option>
                </select>
              </div>
              {state.delivery === "shipping" ? (
                <div className="checkout-flex">
                  <div className="checkout-inputBox">
                    <span>Distance :</span>
                    <input
                      type="text"
                      value={`${state.geo.distance} km`}
                      onChange={() => ""}
                      aria-label="state"
                      disabled
                    />
                  </div>
                  <div className="checkout-inputBox">
                    <span>Time :</span>
                    <input
                      type="text"
                      value={state.geo.time}
                      onChange={() => ""}
                      aria-label="zip-code"
                      disabled
                    />
                  </div>
                </div>
              ) : (
                " "
              )}

              <div className="Shipping-checkout-inputBox">
                <table>
                  <tbody>
                    {state.delivery === "shipping" ? (
                      <tr>
                        <td>Shipping Cost</td>
                        <td>${state.amount.shipping}</td>
                      </tr>
                    ) : (
                      ""
                    )}
                    <tr>
                      <td>Cart Total</td>
                      <td>${state.amount.cart}</td>
                    </tr>
                    <tr>
                      <td>Total Amount</td>
                      <td>
                        $
                        {(state.amount.cart + state.amount.shipping).toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Paypal coast={getTotalAmount} method={createOrder} />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
