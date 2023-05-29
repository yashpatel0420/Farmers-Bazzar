import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchAPI from "../../API/fetchData";
import getPagination from "../../components/getPagination";
import AdminBar from "./adminbar";
const AdminVendors = () => {
  const [vendors, setVendors] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, rows: 5 });
  const fetchVendor = () =>
    FetchAPI("/api/vendors").then((res) => setVendors(res));
  useEffect(() => {
    fetchVendor();
  }, []);

  let data = getPagination(vendors, pagination.rows, pagination.page);
  const onDeleteVedor = (id) => {
    FetchAPI("/api/vendors/delete", "POST", { id }).then((res) => {
      fetchVendor();
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
                <h6 className="about-us">Vendor's Information</h6>
                <h1 className="display-5">Here's all vendor's details</h1>
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
                  <Link
                    to="/admin/createUser/vendors"
                    className="btn btn-success"
                  >
                    Create Vendor Account
                  </Link>
                </div>
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
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors &&
                    data.map((vendor, ind) => (
                      <tr key={ind}>
                        <td>
                          {(pagination.page - 1) * pagination.rows + ind + 1}
                        </td>
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
                        <td>
                          <button className="btn btn-success rounded m-1">
                            Edit
                          </button>
                          <button
                            className="btn btn-success rounded m-1"
                            onClick={() => onDeleteVedor(vendor._id)}
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
                        Math.ceil(vendors.length / pagination.rows)
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

export default AdminVendors;
