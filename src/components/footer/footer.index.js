import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row">
          <div className="mouse">
            <a href="#" className="mouse-icon">
              <div className="mouse-wheel">
                <span className="ion-ios-arrow-up" />
              </div>
            </a>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">khareedLO</h2>
              <p>
                Developed by Mugheera Bin Sadiq, Owais Sultan, Abdul Basit Imam
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-twitter" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-facebook" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Menu</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/vegetableshop" className="py-2 d-block">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="about" className="py-2 d-block">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="contact" className="py-2 d-block">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker" />
                    <span className="text">
                      <span>Address:</span> A-612 Rufi Heaven Block 13 Karachi,
                      75300
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-phone" />
                      <span className="text">+92 331 27 83 917</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-envelope" />
                      <span className="text">info@khareedLO.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{" "}
              <i class="icon-heart color-danger" aria-hidden="true"></i> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
              Template is licensed under CC BY 3.0. Converted in react by
              Mugheera Bin Sadiq
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
