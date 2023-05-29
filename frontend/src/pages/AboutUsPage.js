import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
// import imgAboutHero1 from "../asset/img/abouthero1.jpg";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      {/* <section className="about-section2">
        <img src={imgAboutHero1} id="main" />
      </section> */}

      <div className="p-about">
        <h6 className="about-us">About Us</h6>
        <h2 className="p-title1">
          We Provide Organic and Fresh Food For Your Family
        </h2>

        <p className="p-content1">
          Welcome to Farmer's Bazzar. Our platform is intended to link local
          farmers and consumers, as well as to simplify the process of
          purchasing and selling fresh, locally sourced goods. Farmer Bazzar is
          dedicated to the development of a strong and sustainable local food
          system. We can create a healthier, more growing community and ensure
          that future generations have a source of nutritious, healthy food by
          supporting small-scale agriculture. Thank you for coming along with us
          on this adventure!
        </p>
        <div className="aboou-flex">
          <div className="p-image">
            <img src={require("../asset/img/about2.1.jpg")} alt="aboutflex" />
            {/* <!--https://unsplash.com/photos/Zaiuy5dKeCk --> */}
          </div>
          <div className="p-text-about">
            <h2>What is farmer's Bazzar for?</h2>
            <p>
              The Farmers' Bazzar is a farmers market that emphasises the value
              of establishing community ties and assisting small businesses in
              their area. The Farmers' Bazzar market is a place where residents
              gather here to discuss about food and local events. It is where
              the seeds of change are planted and awareness is developed.
            </p>
            <p>
              We believe in the significance of encouraging sustainable farming
              practises and supporting small-scale agriculture. We want to build
              a community of farmers and consumers that share our enthusiasm for
              creating a more flexible food system.
            </p>
          </div>
        </div>
        <div className="aboou-flex">
          <div className="p-text-about">
            <h2>What we offers?</h2>
            <p>
              Our platform provides a variety of services to assist farmers in
              managing their businesses more successfully and reaching a larger
              audience. Farmers may promote their products and interact with
              clients in their area by using our simple online marketplace. We
              also offer inventory management, order monitoring, and payment
              processing services in one accessible location.
            </p>
            <p>
              Moreover, we provides a simple and convenient way for consumers to
              search and buy fresh, produce that is grown locally. Customers can
              use our search filters to identify specific goods, check vendor
              profiles, and read reviews from other consumers.
            </p>
          </div>
          <div className="p-image">
            <img src={require("../asset/img/about1.1.jpg")} alt="aboutflex" />
          </div>
        </div>
      </div>

      {/* <!-- Team Start --> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "500px" }}
          >
            <h6 className="text-primary text-uppercase">The Team</h6>
            <h1 className="display-5">We Are Professional Vendors</h1>
          </div>
          <div className="row1 g-4" style={{ marginLeft: "50px" }}>
            <div className="col-sm-3">
              <div className="row g-0">
                <div className="col-10">
                  <div className="position-relative">
                    <img
                      className="w-100"
                      style={{ borderRadius: "20px" }}
                      src={require("../asset/img/vibhuti.jpeg")}
                      alt=""
                    />
                    <h4
                      style={{
                        textAlign: "center",
                        marginTop: "10px",
                        borderBottom: "3px solid black",
                        paddingBottom: "5px",
                        fontSize: "30px",
                      }}
                    >
                      Vibhuti Patel
                    </h4>
                    <h6 style={{ marginBottom: "40px", textAlign: "center" }}>
                      Chair
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="row g-0">
                <div className="col-10">
                  <div className="position-relative">
                    <img
                      className="w-100"
                      style={{ borderRadius: "20px" }}
                      src={require("../asset/img/vibhuti.jpeg")}
                      alt=""
                    />
                    <h4
                      style={{
                        textAlign: "center",
                        marginTop: "10px",
                        borderBottom: "3px solid black",
                        paddingBottom: "5px",
                        fontSize: "30px",
                      }}
                    >
                      Vibhuti Patel
                    </h4>
                    <h6 style={{ marginBottom: "40px", textAlign: "center" }}>
                      Chair
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="row g-0">
                <div className="col-10">
                  <div className="position-relative">
                    <img
                      className="w-100"
                      style={{ borderRadius: "20px" }}
                      src={require("../asset/img/yash.jpeg")}
                      alt=""
                    />
                    <h4
                      style={{
                        textAlign: "center",
                        marginTop: "10px",
                        borderBottom: "3px solid black",
                        paddingBottom: "5px",
                        fontSize: "30px",
                      }}
                    >
                      Yash Patel
                    </h4>
                    <h6 style={{ marginBottom: "40px", textAlign: "center" }}>
                      Chair
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="row g-0">
                <div className="col-10">
                  <div className="position-relative">
                    <img
                      className="w-100"
                      style={{ borderRadius: "20px" }}
                      src={require("../asset/img/vishwa.jpeg")}
                      alt=""
                    />
                    <h4
                      style={{
                        textAlign: "center",
                        marginTop: "10px",
                        borderBottom: "3px solid black",
                        paddingBottom: "5px",
                        fontSize: "30px",
                      }}
                    >
                      Vishwa Patel
                    </h4>
                    <h6 style={{ textAlign: "center" }}>Chair</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-contact" style={{ zIndex: "1" }}>
        <div className="form-section">
          <div className="contact-info">
            <h3 className="p1-title">Send Us Your Query</h3>
            <p className="p1-text">
              Complete the form or ask questions about Farmer's Bazzar:
            </p>

            <div className="info">
              <div className="information">
                <p>Farmer's Bazzar</p>
              </div>
              <div className="information">
                <p>farmersbazzar@gmail.com</p>
              </div>
              <div className="information">
                <p>987-654-3210</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form action="index.html" autocomplete="off">
              <div className="input-container">
                <span>Username</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input"
                />
              </div>
              <div className="input-container">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input"
                />
              </div>
              <div className="input-container">
                <span>Phone</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="input"
                />
              </div>
              <div className="input-container textarea">
                <span>Subject</span>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="input"
                ></textarea>
              </div>
              <input type="submit" value="Send" className="contact-btn" />
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUsPage;
