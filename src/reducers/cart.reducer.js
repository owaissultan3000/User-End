import { actions } from "../actions/cart.actions";

// Initial State
const INITIAL_STATE = {
  cartData: null,
};

// Product Reducer.
export default (state = INITIAL_STATE, { type, data }) => {
  switch (type) {
    case actions.SET_CART_DATA: {
      return { ...state, cartData: data };
    }
    default:
      return state;
  }
};
