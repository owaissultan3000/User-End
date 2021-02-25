import React, { useState, useEffect } from "react";
import Product from "../../components/product/product.index";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Spin } from "antd";
import { calculateFreshness } from "../../common/discount";
//services
import { getAllProducts } from "../../services/product.services";

const Home = ({ getAllProducts, productData = [] }) => {
  const [allFeatured, setAllFeatured] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(async () => {
    setSpinner(true);
    return new Promise((resolve, reject) => {
      return getAllProducts(resolve, reject);
    })
      .then(() => {
        setSpinner(false);
      })
      .catch((error) => alert(error));
  }, []);

  useEffect(() => {
    const featured = productData.filter((item) => item.featured === true);
    setAllFeatured(featured);

    calculateFreshness(featured);
  }, [productData]);

  return (
    <div>
      <div className="col-md-12 heading-section text-center">
        <h2
          className="subheading"
          style={{ fontSize: 50, padding: 50, paddingBottom: 100 }}
        >
          We offer grocery with high freshness level
        </h2>
      </div>

      <section className="ftco-section ftco-category ftco-no-pt">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 order-md-last align-items-stretch d-flex">
                  <div
                    className="category-wrap-2 img align-self-stretch d-flex"
                    style={{
                      backgroundImage: "url(assests/images/category.jpg)",
                    }}
                  >
                    <div className="text text-center">
                      <h2>
                        Protect the health <br /> of every home
                      </h2>
                      <p></p>
                      <p>
                        <a href="#" className="btn btn-primary">
                          Shop now
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="category-wrap img mb-4 d-flex align-items-end"
                    style={{
                      backgroundImage: "url(assests/images/category-1.jpg)",
                    }}
                  >
                    <div className="text px-3 py-1">
                      <h2 className="mb-0">
                        <a href="#">Fruits</a>
                      </h2>
                    </div>
                  </div>
                  <div
                    className="category-wrap img d-flex align-items-end"
                    style={{
                      backgroundImage: "url(assests/images/category-2.jpg)",
                    }}
                  >
                    <div className="text px-3 py-1">
                      <h2 className="mb-0">
                        <a href="#">Vegetables</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="category-wrap img mb-4 d-flex align-items-end"
                style={{
                  backgroundImage: "url(assests/images/category-3.jpg)",
                }}
              >
                <div className="text px-3 py-1">
                  <h2 className="mb-0">
                    <a href="#">Juices</a>
                  </h2>
                </div>
              </div>
              <div
                className="category-wrap img d-flex align-items-end"
                style={{
                  backgroundImage: "url(assests/images/category-4.jpg)",
                }}
              >
                <div className="text px-3 py-1">
                  <h2 className="mb-0">
                    <a href="#">Dried</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row no-gutters ftco-services">
            <div className="col-md-3 text-center d-flex align-self-stretch">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                  <span className="flaticon-shipped" />
                </div>
                <div className="media-body">
                  <h3 className="heading">Free Shipping</h3>
                  <span>On order over $100</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center d-flex align-self-stretch">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                  <span className="flaticon-diet" />
                </div>
                <div className="media-body">
                  <h3 className="heading">Always Fresh</h3>
                  <span>Product well package</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center d-flex align-self-stretch ">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                  <span className="flaticon-award" />
                </div>
                <div className="media-body">
                  <h3 className="heading">Superior Quality</h3>
                  <span>Quality Products</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center d-flex align-self-stretch ">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                  <span className="flaticon-customer-service" />
                </div>
                <div className="media-body">
                  <h3 className="heading">Support</h3>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section text-center">
            <span className="subheading">Featured Products</span>
            <h2 className="mb-4">Our Products</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
      </div>
      {/* <div className="col-md-12 heading-section text-center">
        <span className="subheading mb-5">Vegetables</span>
        <Product ProductData={Vegetables} />
      </div>

      <div className="col-md-12 heading-section text-center">
        <span className="subheading mb-5">Fruits</span>
        <Product ProductData={Vegetables} />
      </div>

      <div className="col-md-12 heading-section text-center">
        <span className="subheading mb-5">Juices</span>
        <Product ProductData={Vegetables} />
      </div> */}

      {/* <div className="col-md-12 heading-section text-center"> */}
      {/* <span className="subheading mb-5"></span> */}

      <Spin tip="Loading..." size="large" spinning={spinner}>
        <Product ProductData={allFeatured} />
      </Spin>

      {/* </div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  productData: state.product.productData || [],
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getAllProducts,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Home);
