import React, { useEffect, useState } from "react";
import imgProducts from "../asset/img/product.jpg";
import imgTomemtoes from "../asset/img/tomato.png";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import FetchAPI from "../API/fetchData";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const id = useParams().id;
  useEffect(() => {
    if (id) {
      FetchAPI("/api/products/productsByVendor", "POST", {
        id,
      }).then((singleProd) => setProducts(singleProd));
    } else {
      FetchAPI("/api/products").then((prods) => {
        // console.log("products", prods);
        setProducts(prods);
      });
    }
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="vendor-img">
        <img src={imgProducts} alt="Image" />
      </div>

      {/* <!-- Services Start --> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="mb-3">
              <h6 className="about-us">Available Products</h6>
              <h1 className="display-5">Here's all Products</h1>
              <div className="product-container">
                <div className="products">
                  {products &&
                    products.length > 0 &&
                    products.map((product, ind) => (
                      <Link to={`/product-details/${product._id}`} key={ind}>
                        <div className="product">
                          <div className="image">
                            <img
                              src={
                                product.image
                                  ? `/${product.image}`
                                  : imgTomemtoes
                              }
                              alt="Image"
                            />
                          </div>
                          <div className="namePrice">
                            <h3>
                              {product.name.charAt(0).toUpperCase() +
                                product.name.slice(1)}
                            </h3>
                            <span>${product.price}</span>
                          </div>
                          <div className="buy"></div>
                        </div>
                      </Link>
                    ))}
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

export default ProductPage;
