import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import {
  emptyCart,
  removeItemFromCart,
  onChangeQuantity,
} from "../redux/cart/cart.reducer";
import { CalculateTotal } from "../redux/cart/utils";
import imgTometoes from "../asset/img/tomato.png";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const onDeletingItem = (id) => dispatch(removeItemFromCart(id));
  const onEmptyCart = () => dispatch(emptyCart());
  const quntityChange = (e, id) => {
    if (e.target.value > 0 || e.target.value === "")
      return dispatch(onChangeQuantity({ id, quantity: e.target.value }));
  };
  return (
    <>
      <Navbar />
      <div className="p-wrapper">
        <h1>shopping cart</h1>
        <div className="p-project">
          <div className="p-shop d-flex flex-column">
            {cart.length > 0 ? (
              cart.map((item, ind) => (
                <div className="p-box" key={ind}>
                  <img
                    src={item.image ? `/${item.image}` : imgTometoes}
                    alt="apples"
                  />
                  <div className="p-content">
                    <div className="p-name-area">
                      <h5>
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                      </h5>
                      <h5>${item.price}</h5>
                      <p className="p-unit">
                        QTY:
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => quntityChange(e, item._id)}
                        />{" "}
                        lb
                      </p>
                    </div>
                    <div className="p-subtotoal-are">
                      <div className="p-subtotal-area">
                        <h5>Subtotal: ${item.quantity * item.price}</h5>
                      </div>

                      <p className="p-btn-area">
                        <button
                          className="p-btn-2"
                          onClick={() => onDeletingItem(item._id)}
                        >
                          Remove
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-box">
                <div className="cart-d-center">
                  <h2>Cart is empty</h2>
                  <h6>
                    <Link to="/products">Shop Here</Link>{" "}
                  </h6>
                </div>
              </div>
            )}
            <button className="checkout-btn  " onClick={onEmptyCart}>
              Remove all
            </button>
          </div>
          <div className="p-right-bar">
            <p>
              <span>Subtotal</span> <span>${CalculateTotal(cart)}</span>
            </p>
            <hr />
            <p>
              <span>Tax</span> <span>3%</span>
            </p>
            <hr />

            <p>
              <span>Total</span>{" "}
              <span>${(CalculateTotal(cart) * 1.03).toFixed(2)}</span>
            </p>
            <hr />

            <Link to="/checkout" className="btn btn-success">
              Checkout
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
