import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faYoutube,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
const footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="#">Our services</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Return</a>
              </li>
              <li>
                <a href="#">Payment options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Keep Updated</h4>
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark text-white py-4">
        <div className="container text-center">
          <div className="footer-p">
            <p className="mb-0">
              &copy; <a className="text-secondary fw-bold">farmersbazzar.ca</a>.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
