import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button, notification } from "antd";
//services
import { addToCart } from "../../services/cart.services";

const Card = (props) => {
  const addItem = (item) => (e) => {
    e.preventDefault();

    //make cart
    let items = [...props.cartData];
    let isFound = false;

    //Increasing the count of item if it already exists in a cart
    for (let i = 0; i < items.length; i++) {
      if (items[i]._id === item._id) {
        if (items[i].itemQuantity >= items[i].quantity) {
          isFound = true;

          return alert(
            "We are currently out of stock for this particular product"
          );
        }
        items[i].itemQuantity++;
        isFound = true;
        break;
      }
    }

    if (!isFound) items.push({ ...item, itemQuantity: 1 });

    return props.addToCart(items);
  };

  const productCards = props.ProductData.map((data) => {
    return (
      <div className="col-md-6 col-lg-3" key={data._id}>
        <div className="product">
          <a href="#" className="img-prod">
            <img className="img-fluid" src={data.imagePath} alt={data.name} />
            <span className="status">
              Freshness Level: {data.freshnesslevel}
            </span>
            <div className="overlay"></div>
          </a>
          <div className="text py-3 pb-4 px-3 text-center">
            <h3>
              <a href="#">{data.name}</a>
            </h3>
            <div className="d-flex">
              <div className="pricing">
                <p className="price">
                  <span className="mr-2 price-dc">{data.price} RS</span>
                  <span className="price-sale">{data.disocuntedPrice} RS</span>
                </p>
              </div>
            </div>
            <div className="bottom-area d-flex px-3">
              <div className="m-auto d-flex">
                {/* <a
                  href="#"
                  className="add-to-cart d-flex justify-content-center align-items-center text-center"
                >
                  <span>
                    <i className="ion-ios-menu" />
                  </span>
                </a> */}
                <a
                  onClick={addItem(data)}
                  className="buy-now d-flex justify-content-center align-items-center mx-1"
                >
                  <span>
                    <i className="ion-ios-cart" />
                  </span>
                </a>
                {/* <a
                  href="#"
                  className="heart d-flex justify-content-center align-items-center "
                >
                  <span>
                    <i className="ion-ios-heart" />
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return productCards;
};

const mapStateToProps = (state) => ({
  cartData: state.cart.cartData || [],
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addToCart,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Card);
