import React, { useEffect, useState } from "react";
import imgVendorimg1 from "../asset/img/vendor-img1.jpg";
import imgHero from "../asset/img/hero.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import FetchAPI from "../API/fetchData";
import { Link } from "react-router-dom";

import imgVendorimg2 from "../asset/img/vendor-img2.jpg";
import imgVendorimg3 from "../asset/img/vendor-img3.jpg";
import imgVendorimg4 from "../asset/img/vendor-img4.jpg";
import imgVendorimg5 from "../asset/img/vendor-img5.jpg";
import imgVendorimg6 from "../asset/img/vendor-img6.jpg";
import imgVendorimg7 from "../asset/img/vendor-img7.jpg";
import imgVendorimg8 from "../asset/img/vendor-img8.jpg";

const VendorPage = () => {
  const [vendors, setVendors] = useState([]);
  const Imgs = [
    imgVendorimg1,
    imgVendorimg2,
    imgVendorimg3,
    imgVendorimg4,
    imgVendorimg5,
    imgVendorimg6,
    imgVendorimg7,
    imgVendorimg8,
  ];
  useEffect(() => {
    FetchAPI("/api/vendors").then((res) => setVendors(res));
  }, []);
  // console.log(vendors);
  return (
    <>
      <Navbar />

      {/* ============================================================================== */}

      <div className="vendor-img">
        <img src={imgHero} alt="Image" />
      </div>

      {/* <!-- Services Start --> */}
      <div className="vendor-main">
        <h6 className="about-us">Find Vendors</h6>
        <div className="about-us-vendors">Here's all vendors</div>
        <div className="grid">
          {vendors.map((vendor, ind) => (
            <div className="grid-item" key={ind}>
              <div className="card">
                <img className="card-img" src={`/${vendor.image}`} alt="" />
                <div className="card-content">
                  <h1 className="vendor-card-header">
                    {vendor.firstName + " " + vendor.lastName}
                  </h1>
                  <span>{vendor.email}</span>
                  <p className="card-text">
                    {vendor.phone}
                    <br />
                    {vendor.address}
                  </p>
                  <Link to={`/vendor/${vendor._id}`}>
                    <button className="card-btn">Find Products</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="grid-item">
                <div className="card">
                    <img className="card-img" src="./img/vendor-img2.png" alt="">
                    <div className="card-content">
                        <h1 className="vendor-card-header">Uncle Henry</h1>
                        <p className="card-text">
                            For the cultivation of tree fruits like apples and delicious cherries, our interior valleys' clear, fresh water and strongly warm weather that lasts far into the fall are ideal.
                        </p>
                        <a href="product.html"><button className="card-btn">Find Products</button></a>
                    </div>
                </div>
            </div>
                
            <div className="grid-item">
                <div className="card">
                    <img className="card-img" src="./img/vendor-img3.png" alt="">
                    <div className="card-content">
                        <h1 className="vendor-card-header">Ray Kinsella</h1>
                        <p className="card-text">
                            most fertile soil in Canada, which is ideal for growing berries. Using cutting-edge production techniques, our state-of-the-art greenhouses also produce some of the greatest quality veggies.
                        </p>
                        <a href="product.html"><button className="card-btn">Find Products</button></a>
                    </div>
                </div>
            </div>
                
            <div className="grid-item">
                <div className="card">
                    <img className="card-img" src="./img/vendor-img4.png" alt="">
                    <div className="card-content">
                        <h1 className="vendor-card-header">Mulan</h1>
                        <p className="card-text">
                            Plant arugula seeds on a farm in the late fall and early spring for an early summer yield. Although it can grow in very light shade, it does best in the sun, which results in a more potent pepper flavour.
                        </p>
                        <a href="product.html"><button className="card-btn">Find Products</button></a>
                    </div>
                </div>
            </div>
                
            <div className="grid-item">
                <div className="card">
                    <img className="card-img" src="./img/vendor-img5.png" alt="">
                    <div className="card-content">
                        <h1 className="vendor-card-header">Richard Alpert</h1>
                        <p className="card-text">
                            Berries are the mature ovaries of flowers, and they contain seeds that are encased within the fruit's flesh. Tomatoes, eggplants, persimmons, and dates are a few examples of berries that can be eaten.
                        </p>
                        <a href="product.html"><button className="card-btn">Find Products</button></a>
                    </div>
                </div>
            </div>
                
            <div className="grid-item">
                <div className="card">
                    <img className="card-img" src="./img/vendor-img6.png" alt="">
                    <div className="card-content">
                        <h1 className="vendor-card-header">Arthur Hogget</h1>
                        <p className="card-text">
                            The typical red beet, the pink chioggia beet, and the yellow golden beet are three varieties that are frequently farmed. We are also developed in a variety of sizes and shapes.
                        </p>
                        <a href="product.html"><button className="card-btn">Find Products</button></a>
                    </div>
                </div>
            </div> */}
        </div>
      </div>

      {/* ====================================================================================================== */}

      <Footer />
      {/* <!-- Services End --> */}
    </>
  );
};

export default VendorPage;
