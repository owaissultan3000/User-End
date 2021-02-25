import { deleteRequest, getRequest, postRequest } from "./verb.services";
import { notification } from "antd";

// Add product to db.
export const addOrder = (data, resolve, reject) => {
  return postRequest("/addorder", null, true, data)
    .then(({ data }) => {
      resolve(data);
    })
    .catch((error) => {
      console.log(error);
      alert(error);
      reject(error);
    });
};
