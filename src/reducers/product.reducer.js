import { actions } from "../actions/product.action";

// Initial State
const INITIAL_STATE = {
  productData: null,
};

// Product Reducer.
export default (state = INITIAL_STATE, { type, data }) => {
  switch (type) {
    case actions.SET_PRODUCT_DATA:
      return { ...state, productData: data };
    default:
      return state;
  }
};
