// action types.
export const actions = {
  SET_CART_DATA: "SET_CART_DATA",
};

// set complete user data to redux.
export const setCartData = (data) => ({
  type: actions.SET_CART_DATA,
  data,
});
