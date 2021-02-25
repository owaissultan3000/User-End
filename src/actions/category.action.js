export const actions = {
  SET_ALL_CATEGORIES: "SET_ALL_CATEGORIES",
};

export const setCategoryData = (data) => ({
  type: actions.SET_ALL_CATEGORIES,
  data,
});
