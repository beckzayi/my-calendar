import axios from "axios";

const request = (url, method = "get", data) => {
  return axios(
    {
      url,
      method,
      data
    }
  );
};

export default request;
