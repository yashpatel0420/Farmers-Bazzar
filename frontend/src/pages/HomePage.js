import React from "react";
import Carousel from "../components/carousel";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import imgFeature from "../asset/img/feature.png";
import imgAbout from "../asset/img/about.png";
import imgCarousel1 from "../asset/img/carousel-1.png";
import imgCarousel2 from "../asset/img/carousel-2.png";
import imgCarousel3 from "../asset/img/carousel-3.png";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div>
        <Carousel imgs={[imgCarousel1, imgCarousel2, imgCarousel3]} />
      </div>

      <div className="cta">
        <div className="cta-main">
          <h1>
            So why are you waiting. Explore our website and buy the products.
          </h1>
          <div className="cta-links">
            <a href="" className="cta-links-explore">
              Explore
            </a>
            <a href="" className="cta-links-contact">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid banner mb-5">
        <div className="container">
          <div className="row gx-0">
            <div className="col-md-6">
              <div
                className="bg-primary bg-vegetable d-flex flex-column justify-content-center p-5"
                style={{ height: "300px" }}
              >
                <h3>Seasonal food</h3>
                <div className="home-page-p">
                  <p>
                    Due to the fact that various crops grow at various periods
                    of the year, some items at the Farmers' Bazzar are only
                    offered during seasons.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-5"
                style={{ height: "300px" }}
              >
                <h3>Events and News</h3>
                <div className="home-page-p">
                  <p>
                    Keep up with everything that occurs at the Market. daily
                    announcements and updates may be found on our website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- About Start --> */}
      <div>
        <div className="container-fluid about">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                  <img
                    className="img-fluid mt-auto mx-auto"
                    src={imgAbout}
                    alt="About-us Image"
                  />
                </div>
              </div>
              <div className="col-lg-6 pb-5">
                <div className="">
                  <div className="mb-3 pb-2">
                    <h6 className="about-us">About Us</h6>
                    <h1 className="display-5">
                      We Provide Organic and Fresh Food For Your Family
                    </h1>
                  </div>
                  <div className="about-us-p">
                    <p className="mb-4">
                      The Farmers' Bazzar is a farmers market that emphasises
                      the value of establishing community ties and assisting
                      small businesses in their area. The Farmers' Bazzar market
                      is a place where residents gather here to discuss about
                      food and local events. It is where the seeds of change are
                      planted and awareness is developed.
                    </p>
                  </div>
                  <div className="row gx-5 gy-4">
                    <div>
                      <h4>Join the committee</h4>
                      <div className="about-us-p">
                        <p className="mb-0">
                          Fill out the Committee Application Form and adhere to
                          the submission guidelines if you're interested in
                          joining the Committee.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Services Start --> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div>
              <div className="mb-3">
                <h6 className="about-us">Services</h6>
                <h1 className="display-5">
                  We will provide tones of organic Farm Services
                </h1>
              </div>
              <div className="about-us-p">
                <p className="mb-4">
                  like Setting up and managing farmers market stalls, Providing
                  information on organic farming and best practices, Offering
                  educational resources on organic farming and nutrition,
                  Promoting local organic farms and products, Connecting local
                  organic farmers with consumers, Assisting with marketing and
                  advertising, Creating and maintaining networks of local
                  organic farms, etc.
                </p>
              </div>
              <a href="" className="btn btn-primary py-md-3 px-md-5">
                Contact Us
              </a>
            </div>
            <div>
              <div className="service-item bg-light text-center p-5">
                <h4>Become a Farm vendor</h4>
                <div className="about-us-p">
                  <p className="mb-0">
                    The Farmers' Bazzar gives an opportunity to vendor for
                    Product Promotion, Networking Opportunities and Financial
                    Support.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="service-item bg-light text-center p-5">
                <h4>Become a Community partner</h4>
                <div className="about-us-p">
                  <p className="mb-0">
                    The Farmers' Bazzar Market gives our Community Partners the
                    chance to interact with locals.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="service-item bg-light text-center p-5">
                <h4>Jobs and Volunteering</h4>
                <div className="about-us-p">
                  <p className="mb-0">
                    The Farmers' Bazzar Market team is not currently taking on
                    any new employees. But, you may fill out the volunteer
                    application form here if you're interested in volunteering
                    at the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services End --> */}

      {/* <!-- Features Start --> */}
      <div className="container-fluid bg-primary feature py-5 pb-lg-0 my-5">
        <div className="container py-5 pb-lg-0">
          <div
            className="mx-auto text-center mb-3 pb-2"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="display-5 text-white">Why Choose Us!!!</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-3">
              <div className="text-white mb-5">
                <h4 className="text-white">100% Organic</h4>
                <p className="mb-0">
                  We will provide truly organic and fresh foods to our
                  customers.
                </p>
              </div>
              <div className="text-white">
                <h4 className="text-white">Online product selling</h4>
                <p className="mb-0">
                  Customers can submit purchases in advance through the Farmers'
                  Bazzar Market store if they want to ensure that their
                  favourite goods will be available for them at the market.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-block bg-white h-100 text-center p-5 pb-lg-0">
                <div className="about-us-p">
                  <p>
                    Farmer's Bazzar markets are well known for the freshness of
                    their produce. Farmers typically harvest their crops the
                    same day they are sold, so you can be sure you're getting
                    the freshest, most flavorful fruits and vegetables possible.
                  </p>
                </div>
                <img className="img-fluid" src={imgFeature} alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-white mb-5">
                <h4 className="text-white">Modern Services</h4>
                <p className="mb-0">
                  We will provide top className services to community members
                  and customers.
                </p>
              </div>
              <div className="text-white">
                <h4 className="text-white">24/7 Support</h4>
                <p className="mb-0">
                  We have dedicated professionals to help you with any kind of
                  concern or query regarding our product or service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features end --> */}

      <Footer />
    </>
  );
};

export default HomePage;
