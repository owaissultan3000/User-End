import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "./user.reducer";
import product from "./product.reducer";
import cart from "./cart.reducer";
import category from "./category.reducer";

// Root Reducer.
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    user,
    product,
    cart,
    category,
  });
