import request from "./request";

const fetchAndSetState = (url, method, fn) => {
  request(url, method)
    .then(response => {
      fn(response.data)
    });
}

export default fetchAndSetState;
