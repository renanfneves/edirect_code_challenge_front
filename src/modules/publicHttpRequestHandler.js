import axios from "axios";
import { removeEmptyValues } from "utils";

const requester = axios.create({
  headers: {
    responseType: "application/json",
  },
});


const publicHttpRequestHandler = ({
  method,
  url,
  body = null,
  params = null,
  headers = null,
}) => {
  try {
    const request = {
      method,
      url,
      data: body,
      headers: { 
        ...headers,
        contentType: "application/json",
        Authorization: process.env.REACT_APP_API_SECRET, 
      },
      params: removeEmptyValues(params),
    };
    return requester(request)
      .then(data => Promise.resolve(data))
      .catch(err => Promise.reject(err.response));
  } catch (error) {
    return Promise.reject(error.response);
  }
};

export default publicHttpRequestHandler;