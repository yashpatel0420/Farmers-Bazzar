import React, { useEffect, useState } from "react";
import FetchAPI from "../../API/fetchData";
import AdminBar from "./adminbar";
import getPagination from "../../components/getPagination";
import { Link } from "react-router-dom";
const AdminProducts = () => {
  //   const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, rows: 5 });

  const fetchProducts = () =>
    FetchAPI("/api/products").then((res) => setProducts(res));
  useEffect(() => {
    fetchProducts();
  }, []);
  let data = getPagination(products, pagination.rows, pagination.page);
  const onDeleteProduct = (id) => {
    FetchAPI("/api/products/delete", "POST", { id }).then((res) => {
      fetchProducts();
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
                <h6 className="about-us">Product's Information</h6>
                <h1 className="display-5">Here's all Product's details</h1>
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
                  <Link to="/admin/createProduct" className="btn btn-success">
                    Create Product
                  </Link>
                </div>
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
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products &&
                    data.map((product, ind) => (
                      <tr key={ind}>
                        <td>
                          {" "}
                          {(pagination.page - 1) * pagination.rows + ind + 1}
                        </td>
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
                        <td>
                          <button className="btn btn-success rounded m-1">
                            Edit
                          </button>
                          <button
                            className="btn btn-success rounded m-1"
                            onClick={() => onDeleteProduct(product._id)}
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
                        Math.ceil(products.length / pagination.rows)
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
              <a
                href="#"
                className="btn btn-primary py-md-3 px-md-5 text-light"
              >
                Manage Data
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProducts;
