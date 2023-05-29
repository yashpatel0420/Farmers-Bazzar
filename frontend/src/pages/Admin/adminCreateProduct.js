import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import FetchAPI from "../../API/fetchData";
import ImageUpload from "../../components/ImageUpload";
import AdminBar from "./adminbar";

const AdminCreateProduct = () => {
  const INITIAL_STATE = {
    vendor: "",
    name: "",
    price: 0,
    description: "",
    image: "",
    delivery: {
      shipping: false,
      pickUp: false,
      address: "",
    },
  };

  const navigate = useNavigate();

  const [vendors, setVendors] = useState([]);
  const [product, setProduct] = useState(INITIAL_STATE);
  //   console.log(product);
  useEffect(() => {
    FetchAPI("/api/vendors").then((res) => {
      setVendors(res);
      setProduct({
        ...product,
        vendor: res[0]._id,
      });
    });
  }, []);
  const setImageUrl = (url) => {
    setProduct({ ...product, image: url });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("product", JSON.stringify(product));
    data.append("file", product.image);

    fetch("/api/products/create", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => navigate("/admin/product"));
  };
  return (
    <>
      <AdminBar />
      <div className="vendor-main">
        <h6 className="about-us">Insert Products</h6>
      </div>

      <div className="p-container2">
        <form action="/action_page.php">
          <div className="p-row">
            <div className="p-col-25">
              <label className="p-label" htmlFor="pname">
                Select Venodr
              </label>
            </div>
            <div className="p-col-75">
              <select
                className="p-input"
                name="productname"
                value={product.vendor}
                onChange={(e) =>
                  setProduct({ ...product, vendor: e.target.value })
                }
              >
                {vendors &&
                  vendors.map((vend) => (
                    <option value={`${vend._id}`} key={vend._id}>
                      {vend.firstName + " " + vend.lastName}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="p-row">
            <div className="p-col-25">
              <label className="p-label" htmlFor="pname">
                Product Name
              </label>
            </div>
            <div className="p-col-75">
              <input
                className="p-input"
                type="text"
                id="pname"
                name="productname"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                placeholder="Product name.."
                required
              />
            </div>
          </div>
          <div className="p-row">
            <div className="p-col-25">
              <label className="p-label" htmlFor="fname">
                Product Price
              </label>
            </div>
            <div className="p-col-75">
              <input
                className="p-input"
                type="number"
                aria-label="product price"
                id="pprice"
                name="productprice"
                placeholder="Product Price.."
                min={0}
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="p-row">
            <div className="p-col-25">
              <label className="p-label" htmlFor="lname">
                Product Image
              </label>
            </div>
            <div className="p-col-75">
              <ImageUpload file={product.image} setFile={setImageUrl} />
            </div>
          </div>
          <div className="p-row">
            <div className="p-col-25">
              <label className="p-label" htmlFor="subject">
                Product Description
              </label>
            </div>
            <div className="p-col-75">
              <textarea
                className="p-input"
                id="subject"
                name="subject"
                placeholder="Write product Description here.."
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                style={{ height: "150px" }}
                required
              ></textarea>
            </div>
          </div>
          <div className="p-row">
            <div className="p-col-25">
              <label className="p-label" htmlFor="country">
                Delivery Method
              </label>
            </div>
            <div className="p-col-75">
              <input
                type="checkbox"
                id="shipping"
                name="shipping"
                checked={product.delivery.shipping}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    delivery: {
                      ...product.delivery,
                      shipping: e.target.checked,
                    },
                  })
                }
              />
              <label className="p-checkbox" htmlFor="shipping">
                Shipping
              </label>
              <br />
              <input
                type="checkbox"
                id="pickup"
                name="pickup"
                checked={product.delivery.pickUp}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    delivery: { ...product.delivery, pickUp: e.target.checked },
                  })
                }
              />
              <label className="p-checkbox" htmlFor="pickup">
                Pick-Up
              </label>
              <br />
            </div>
          </div>
          {product.delivery.pickUp ? (
            <div className="p-row">
              <div className="p-col-25">
                <label className="p-label" htmlFor="subject">
                  Address
                </label>
              </div>
              <div className="p-col-75">
                <textarea
                  className="p-input"
                  id="subject"
                  value={product.delivery.address}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      delivery: {
                        ...product.delivery,
                        address: e.target.value,
                      },
                    })
                  }
                  name="subject"
                  placeholder="Write product Description here.."
                  style={{ height: "100px" }}
                  required
                ></textarea>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* <div className="p-row">
            <div className="p-col-25">
              <label className="p-label" htmlFor="subject">
                Address
              </label>
            </div>
            <div className="p-col-75">
              <textarea
                className="p-input"
                id="subject"
                name="subject"
                placeholder="Write product Description here.."
                style={{ height: "100px" }}
                required
              ></textarea>
            </div>
          </div> */}

          <div className="p-row">
            <button className="p-submit" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminCreateProduct;
