import React, { useState } from "react";
import MyCart from "../MyCart/MyCart.index";
import Footer from "../../components/footer/footer.index";
import Header from "../../components/header/header.index";
import ProductDetails from "../../components/product/productDetails";
import About from "../About/About.index";
import SignUp from "../Authentication/SignUp.index";
import Contact from "../Contact/Contact.index";
import Home from "../Home/Home.index";
import FruitShop from "../Shop/FruitShop";
import VegetableShop from "../Shop/VegetableShop";
import Checkout from "../Checkout/Checkout.index";
import PaymentForm from "../Checkout/OnlinePayment";
import Cart from "../../components/cart/cart.index";
import { Switch, Route } from "react-router-dom";
import PublicRoute from "../../components/routes/public_route/public_route.index";
import Login from "../Authentication/Login.index";
import DriedShop from "../Shop/DriedShop";
import JuiceShop from "../Shop/JuiceShop";
import PrivateRoute from "../../components/routes/private_route/private_route.index";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../../store/configureStore";
import ScrollToTop from "../../components/scroll";
//Connected Router is used to synchronize router history with redux store

const Main = () => {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <ScrollToTop />
        <Header />
        <Switch>
          <PublicRoute path="/" component={Home} exact />
          <PublicRoute path="/contact" component={Contact} />
          <PublicRoute path="/About" component={About} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signup" component={SignUp} />
          <PublicRoute path="/vegetableShop" component={VegetableShop} />
          <PublicRoute path="/fruitShop" component={FruitShop} />
          <PublicRoute path="/driedShop" component={DriedShop} />
          <PublicRoute path="/juiceShop" component={JuiceShop} />\
          <PublicRoute path="/mycart" component={MyCart} />
          {/* Private Routes */}
          <PrivateRoute path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
      </ConnectedRouter>
    </React.Fragment>
  );
};

export default Main;
