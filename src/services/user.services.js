import { getRequest, postRequest, putRequest } from "./verb.services";
import { setUserData } from "../actions/user.action";
import { notification } from "antd";

export const setUserToLocalStorage = (user, token) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

// export const verifyUser = (resolve, reject) => {
//   return (dispatch) => {
//     return getRequest("/user/me", null, true)
//       .then(({ data, status }) => {
//         if (status === 200) {
//           const userData = data.data;
//           dispatch(
//             setUserData({
//               ...userData,
//               selectedTeam:
//                 userData.teams && userData.teams.length > 0
//                   ? userData.teams[0]
//                   : {},
//             })
//           );
//           resolve(userData);
//         } else {
//           notification.error({
//             message: "Error",
//             description: "Something went wrong while verifying user",
//           });
//           reject();
//         }
//       })
//       .catch((err) => {
//         notification.error({
//           message: "Error",
//           description: "Something went wrong while verifying user",
//         });
//         reject(err);
//       });
//   };
// };

/**
 *
 * @param {Object} data Contains username and password
 * @param {Function} resolve
 * @param {Function} reject
 *
 * Authenticates the user and then updates redux with the user.
 */
export const userLogin = (data, resolve, reject) => {
  return (dispatch) => {
    return postRequest("/signin", null, false, data)
      .then(({ data, status }) => {
        if (status === 200) {
          const userData = data.user;
          setUserToLocalStorage(userData, data.token);
          dispatch(
            setUserData({
              ...userData,
            })
          );
          return resolve(userData);
        } else {
          // Notify Error
          notification.error({
            message: "Error",
            description: "Something went wrong. Internet problem maybe?",
          });
          return reject();
        }
      })
      .catch((error) => {
        const err =
          error && error.response && error.response.data
            ? error.response.data.message
            : "Something went wrong";
        // Notify Error
        alert(err);
        return reject(error);
      });
  };
};

export const userSignup = (data, resolve, reject) => {
  return (dispatch) => {
    return postRequest("/signup", null, false, data)
      .then(({ data, status }) => {
        if (status === 200) {
          const userData = data.user;
          setUserToLocalStorage(userData, data.token);
          dispatch(
            setUserData({
              ...userData,
            })
          );
          alert("You are successfully registered to Khareedlo");
          return resolve(userData);
        } else {
          // Notify Error
          alert("Something went wrong. Internal error");
          return reject();
        }
      })
      .catch((error) => {
        console.log(error);
        const err =
          error && error.response && error.response.data
            ? error.response.data.message
            : "Something went wrong";
        // Notify Error
        alert(err);
        return reject(error);
      });
  };
};

export const forgotPassword = (email, resolve, reject) => {
  return (dispatch) => {
    return putRequest("user/forgot-password", null, false, { email })
      .then(({ data, status }) => {
        if (status === 200) {
          console.log(data);
          notification.success({
            message: "Success",
            description: "Successfully sent password reset link to your email",
          });
          return resolve();
        } else {
          // Notify Error
          notification.error({
            message: "Error",
            description: "Something went wrong. Internet problem maybe?",
          });
          return reject();
        }
      })
      .catch((error) => {
        const err =
          error && error.response && error.response.data
            ? error.response.data.message
            : "Something went wrong";
        // Notify Error
        notification.error({
          message: "Error",
          description: err,
        });
        return reject();
      });
  };
};

export const resetPassword = (resetPasswordData, resolve, reject) => {
  return (dispatch) => {
    return putRequest("user/reset-password", null, false, resetPasswordData)
      .then(({ data, status }) => {
        if (status === 200) {
          console.log(data);
          notification.success({
            message: "Success",
            description: "Successfully reset your account password",
          });
          return resolve();
        } else {
          // Notify Error
          notification.error({
            message: "Error",
            description: "Something went wrong. Internet problem maybe?",
          });
          return reject();
        }
      })
      .catch((error) => {
        const err =
          error && error.response && error.response.data
            ? error.response.data.message
            : "Something went wrong";
        // Notify Error
        notification.error({
          message: "Error",
          description: err,
        });
        return reject();
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    console.log("mugheera");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(setUserData(null));
    setTimeout(() => {
      window.location = "/";
    }, 500);
  };
};
