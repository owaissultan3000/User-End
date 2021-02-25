import { actions } from "../actions/user.action";

// Initial State
const INITIAL_STATE = {
  userData: {},
};

// User Reducer.
export default (state = INITIAL_STATE, { type, data }) => {
  switch (type) {
    case actions.SET_USER_DATA:
      return { ...state, userData: data };
    default:
      return state;
  }
};
