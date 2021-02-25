import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 ">
              <a href="assests/images/product-1.jpg" className="image-popup">
                <img
                  src="assests/images/product-1.jpg"
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </a>
            </div>
            <div className="col-lg-6 product-details pl-md-5">
              <h3>{product.name}</h3>
              <p className="price">
                <span>{product.orignalPrice}</span>
              </p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth. Text should
              turn around and return to its own, safe country. But nothing the
              copy said could convince her and so it didn’t take long until.{" "}
              <p></p>
              <div className="row mt-4">
                <div className="w-100" />
                <div className="input-group col-md-6 d-flex mb-3">
                  <span className="input-group-btn mr-2">
                    <button
                      type="button"
                      className="quantity-left-minus btn"
                      data-type="minus"
                      data-field
                    >
                      <i className="ion-ios-remove" />
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    defaultValue={1}
                    min={1}
                    max={100}
                  />
                  <span className="input-group-btn ml-2">
                    <button
                      type="button"
                      className="quantity-right-plus btn"
                      data-type="plus"
                      data-field
                    >
                      <i className="ion-ios-add" />
                    </button>
                  </span>
                </div>
                <div className="w-100" />
                <br />
              </div>
              <p>
                <a href="cart.html" className="btn btn-black py-3 px-5">
                  Add to Cart
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
