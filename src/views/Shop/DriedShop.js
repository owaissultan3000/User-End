import React, { useState, useEffect } from "react";
import Product from "../../components/product/product.index";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Spin } from "antd";
import { calculateFreshness } from "../../common/discount";

//services
import { getAllProducts } from "../../services/product.services";

const DriedShop = ({ getAllProducts, productData = [] }) => {
  const [allDrieds, setAllDrieds] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (productData.length === 0) {
      setSpinner(true);
      return new Promise((resolve, reject) => {
        return getAllProducts(resolve, reject);
      })
        .then(() => {
          setSpinner(false);
        })
        .catch((error) => alert(error));
    }
  }, []);

  useEffect(() => {
    const drieds = productData.filter(
      (item) => item.category.name.toLowerCase() === "dried"
    );
    setAllDrieds(drieds);
    calculateFreshness(drieds);
  }, [productData]);

  return (
    <div>
      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: "url(../../assests/images/bg_1.jpg)" }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">Home</a>
                </span>{" "}
                <span>Products</span>
              </p>
              <h1 className="mb-0 bread">Products</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 mb-5 text-center">
              <ul className="product-category">
                <li>
                  <Link to="/vegetableshop">Vegetables</Link>
                </li>
                <li>
                  <Link to="/fruitShop">Fruits</Link>
                </li>
                <li>
                  <Link to="/juiceShop">Juice</Link>
                </li>
                <li>
                  <Link to="driedShop" className="active">
                    Dried
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Spin tip="Loading..." size="large" spinning={spinner}>
            <Product ProductData={allDrieds} />
          </Spin>

          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(DriedShop);
