import React from "react";

const About = () => {
  return (
    <React.Fragment>
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
                <span>About us</span>
              </p>
              <h1 className="mb-0 bread">About us</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5 wrap-about pb-md-5">
              <div className="heading-section-bold mb-4 mt-md-5">
                <div className="ml-md-0">
                  <h2 className="mb-4">Welcome to Khareed LO</h2>
                  <h3>A project by React Retards</h3>
                </div>
              </div>
              <div className="pb-md-5">
                <h3>Our Team members</h3>
                <ul>
                  <li>Mugheera Bin Sadiq - 18K-0296</li>
                  <li>Owais Sultan - 18K-0303</li>
                  <li>Abdul Basit Imam</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
