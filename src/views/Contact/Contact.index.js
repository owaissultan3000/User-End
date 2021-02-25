import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: "url(assests/images/bg_1.jpg)" }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>Contact us</span>
              </p>
              <h1 className="mb-0 bread">Contact us</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section contact-section bg-light">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="w-100" />
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Address:</span> A-612 Rufi Heaven Block 13 Karachi,
                  75300
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Phone:</span>{" "}
                  <a href="tel://1234567920">+ 923312783917</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Email:</span>{" "}
                  <a href="mailto:info@khareedlo.com">info@khareedlo.com</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="info bg-white p-4">
                <p>
                  <span>Website</span> <a href="#">khareedlo.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row block-9">
            <div className="col-md-6 order-md-last d-flex">
              <ContactForm />
            </div>
            <div className="col-md-6 d-flex">
              <div id="map" className="bg-white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
