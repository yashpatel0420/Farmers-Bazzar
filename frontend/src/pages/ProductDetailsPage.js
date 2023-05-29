import React, { useEffect, useState } from "react";
import imgTometoes from "../asset/img/tomato.png";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import FetchAPI from "../API/fetchData";
import { addItemToCart } from "../redux/cart/cart.reducer";
import { useDispatch } from "react-redux";
const ProductDetailsPage = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  // console.log(quantity);

  const [productDetails, setProductDetails] = useState({
    delivery: {
      shipping: false,
      pickUp: false,
      address: "",
    },
    price: 0,
    name: "",
    description: "",
    image: "",
  });
  useEffect(() => {
    FetchAPI("/api/products/findById", "POST", {
      id,
    }).then((res) => {
      // console.log(res);
      setProductDetails(res);
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="main-container">
        {/* <!-- Left Column --> */}
        <div className="left-column">
          <img
            data-image="red"
            className="active"
            src={
              productDetails.image ? `/${productDetails.image}` : imgTometoes
            }
            alt="Image"
          />
        </div>

        {/* <!-- Right Column --> */}
        <div className="right-column">
          {/* <!-- Product Description --> */}

          <div className="product-description">
            <span>Details</span>
            <h1>
              {productDetails.name.charAt(0).toUpperCase() +
                productDetails.name.slice(1)}
            </h1>

            <p>{productDetails.description}</p>
          </div>

          {/* <!-- Product Configuration --> */}
          <div className="product-configuration">
            {/* <!-- Product detail --> */}
            {/* PRODUCT QUANTITY */}
            <span id="quantity-span">Quantity: </span>
            <input
              className="quantity-product"
              aria-label="quantity"
              name="quantity"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => {
                return parseInt(e.target.value) > 0 || e.target.value === ""
                  ? setQuantity(parseInt(e.target.value))
                  : 1;
              }}
            />
            <span id="quantity-span"> lb</span>
            <hr />
            {/* PRODUCT QUANTITY */}
            <div className="product-color">
              <span>Delivary Method</span>
              <div className="color-choose">
                <div>
                  <span>
                    Shipping:{" "}
                    {productDetails.delivery.shipping
                      ? "Available"
                      : "Not Available"}
                  </span>
                  <br />
                  <span>
                    PickUp:{" "}
                    {productDetails.delivery.pickUp
                      ? productDetails.delivery.address
                      : "Not Available"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Product Pricing --> */}
          <div className="product-price">
            <span>$ {productDetails.price}</span>
            <button
              type="button"
              aria-label="left button"
              onClick={() =>
                dispatch(addItemToCart({ ...productDetails, quantity }))
              }
              className="cart-btn"
            >
              Add to cart
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
