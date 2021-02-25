import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//services
import { removeFromCart } from "../../services/cart.services";

const Cart = (props) => {
  const item = [...props.cartData] || [];

  const removeItem = (key) => (e) => {
    e.preventDefault();

    let index = item.findIndex((itm) => itm.key === key);
    item.splice(index, 1);

    props.removeFromCart(item);
  };

  const itemlist = item.map((item) => {
    return (
      <tr className="text-center" key={item.key}>
        <td className="product-remove">
          <a onClick={removeItem(item.key)}>
            <span className="ion-ios-close" />
          </a>
        </td>
        <td className="image-prod">
          <div
            className="img"
            style={{
              backgroundImage: "url(" + item.imagePath + ")",
            }}
          />
        </td>
        <td className="product-name">
          <h3>{item.name}</h3>
          <p>Far far away, behind the word mountains, far from the countries</p>
        </td>
        <td className="price">{item.price}</td>
        <td className="quantity">{item.itemQuantity}</td>
        <td className="total">{item.price * item.itemQuantity}</td>
      </tr>
    );
  });

  const view = () => {
    if (!itemlist.length) {
      return <p style={{ textAlign: "center" }}>Empty cart</p>;
    } else {
      return itemlist;
    }
  };
  return (
    <div className="row">
      <div className="col-md-12 ">
        <div className="cart-list">
          <table className="table">
            <thead className="thead-primary">
              <tr className="text-center">
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th>Product name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>{view()}</tbody>
          </table>
        </div>
        <div className="row">
          <p>
            <Link to="/checkout" className="btn btn-primary py-3 px-4">
              Proceed to Checkout
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartData: state.cart.cartData || [],
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      removeFromCart,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
