import React from "react";
import { setProductData } from "../actions/product.action";
import { setCategoryData } from "../actions/category.action";
import { deleteRequest, getRequest, postRequest } from "./verb.services";
import { notification } from "antd";

// Fetch products from db.
export const getAllProducts = (resolve, reject) => {
  return (dispatch) => {
    return (
      getRequest("/getproduct", null, true)
        .then(({ data }) => {
          dispatch(setProductData(data));
          resolve();
        })
        // .then(() => {
        //   return getRequest("/getcategory", null, false).then(({ data }) => {
        //     dispatch(setCategoryData(data));
        //     resolve();
        //   });
        // })
        .catch((error) => {
          const err =
            error && error.response && error.response.data
              ? error.response.data.message
              : "Something went wrong";
          // Notify Error
          alert(err);
          reject(error);
        })
    );
  };
};
