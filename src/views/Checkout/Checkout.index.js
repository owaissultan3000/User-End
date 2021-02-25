import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addOrder } from "../../services/order.index";
import { Spin, Modal } from "antd";
import { addToCart } from "../../services/cart.services";
import { Redirect } from "react-router-dom";

const Checkout = ({ cartData, addToCart, history }) => {
  const [spinner, setSpinner] = useState(false);

  let subTotal = 0;
  let delivery = 5;

  for (let i = 0; i < cartData.length; i++) {
    subTotal += cartData[i].disocuntedPrice * cartData[i].itemQuantity;
  }

  const PlaceOrder = () => async () => {
    if (cartData.length) {
      setSpinner(true);

      let order = {};
      let user = JSON.parse(localStorage.getItem("user"));
      order.items = [];

      for (let i = 0; i < cartData.length; i++) {
        order.items.push({
          product: cartData[i]._id,
          quantity: cartData[i].itemQuantity,
        });
      }

      order.price = subTotal + delivery;
      order.user = user._id;

      return new Promise((resolve, reject) => {
        addOrder(order, resolve, reject);
      })
        .then((data) => {
          addToCart(null);
          setSpinner(false);
          alert("Congratulations your order has been placed successfully");
          history.push("/");
        })
        .catch((error) => alert(console.log(error)));
    } else {
      alert("Your cart is empty");
    }
  };

  return (
    <section className="ftco-section ftco-cart">
      <div className="container">
        <div className="row align-item-start">
          <div className="col-lg-12 cart-wrap ">
            <div className="cart-detail cart-total p-3 p-md-4">
              <Spin tip="Loading..." size="large" spinning={spinner}>
                <h3 className="billing-heading mb-4">Cart Total</h3>
              </Spin>
              <p className="d-flex">
                <span>Subtotal</span>
                <span>{subTotal} RS</span>
              </p>
              <p className="d-flex">
                <span>Delivery</span>
                <span>5.00 RS</span>
              </p>
              <hr />
              <p className="d-flex total-price">
                <span>Total</span>
                <span>{5 + subTotal} RS</span>
              </p>
            </div>
          </div>
        </div>
        <a
          className="btn btn-primary px-2"
          onClick={PlaceOrder()}
          style={{
            padding: 10,
            color: "black",
            width: 300,
          }}
        >
          Proceed
        </a>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  cartData: state.cart.cartData || [],
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addToCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
