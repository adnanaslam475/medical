import axios from "axios";
// import { baseUrl } from "../../Api/baseURL";
import { DangerLeft } from "./toaster-service.js";

export const apiInstance = axios.create({
  baseURL:
    "https://onecloudapi.azurewebsites.net/api/v1/account/loginDummy?userID=abc",
});

// superadminss@lms.com
// http://gtipms-env.eba-kx774cjf.us-east-1.elasticbeanstalk.com/
// https://onecloudapi.azurewebsites.net/api/v1/account/loginDummy?userID=abc
// https://onecloudapi.azurewebsites.net/api/v1/account/AccessResource

apiInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // console.log(typeof error.response.data.message);
    if (typeof error.response.data.message === "string") {
      DangerLeft(error.response.data.message);
    } else {
      for (let i = 0; i < error.response.data.message.length; i++) {
        DangerLeft(error.response.data.message[i]);
      }
      return Promise.reject(error);
    }
  }
);