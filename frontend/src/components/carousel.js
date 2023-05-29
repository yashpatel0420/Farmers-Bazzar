import React, { useState } from "react";

const Carousel = ({ imgs = [] }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="container-fluid p-0">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {imgs
            .filter((img, ind) => ind == index % imgs.length)
            .map((img, ind) => (
              <div className={`carousel-item active ${ind}`} key={ind}>
                <img className="w-100" src={img} alt="Carousel Image" />
                <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                  <div className="text-start p-5" style={{ max: "300px" }}>
                    <h3 className="text-white">
                      We are getting the most fresh fruits and vegetables from
                      our reliable network.
                    </h3>
                    <h1 className="display-1 text-white mb-md-4">
                      Fresh Vegetables and Fruits
                    </h1>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <button
          aria-label="left button"
          className="carousel-control-prev"
          type="button"
          onClick={() => setIndex(index + 1)}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          aria-label="right button"
          className="carousel-control-next"
          type="button"
          onClick={() =>
            index === 0 ? setIndex(imgs.length - 1) : setIndex(index - 1)
          }
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
