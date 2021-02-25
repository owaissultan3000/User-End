// action types.
export const actions = {
  SET_PRODUCT_DATA: "SET_PRODUCT_DATA",
};

// set complete product detail to redux.
export const setProductData = (data) => ({
  type: actions.SET_PRODUCT_DATA,
  data,
});
